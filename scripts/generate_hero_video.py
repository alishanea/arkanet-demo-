import os
import sys
import math
import subprocess
import cv2
import numpy as np
import imageio_ffmpeg

def main():
    print("Extracting dot pattern from reference...")
    ref_path = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hands_isolated.png"
    img = cv2.imread(ref_path, cv2.IMREAD_GRAYSCALE)
    if img is None:
        print(f"Error: could not read {ref_path}")
        return

    dark = (img < 235).astype(np.uint8) * 255
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(dark)

    raw_dots = []
    for i in range(1, num_labels):
        area = stats[i, cv2.CC_STAT_AREA]
        if 2 <= area <= 200:
            cx, cy = centroids[i]
            raw_dots.append((float(cx), float(cy), float(area)))

    print(f"Total extracted dots: {len(raw_dots)}")
    
    # Target resolution: 1920 x 1080 Full HD
    W, H = 1920, 1080
    scale = W / 697.0
    
    # Calculate original bounds
    xs = [d[0] for d in raw_dots]
    ys = [d[1] for d in raw_dots]
    orig_y_min, orig_y_max = min(ys), max(ys)
    orig_y_center = (orig_y_min + orig_y_max) / 2.0
    
    # We want the hands placed nicely: vertically centered with slight lower bias for headline
    target_y_center = H / 2.0 + 35.0
    
    # Categorize left vs right hand
    dots_data = []
    for cx, cy, area in raw_dots:
        base_x = cx * scale
        base_y = target_y_center + (cy - orig_y_center) * scale
        base_r = max(1.2, math.sqrt(area / math.pi) * scale * 0.46)
        is_left = (cx < 350)
        
        # normalized distance along hand (0 = wrist, 1 = fingertip)
        if is_left:
            prog = max(0.0, min(1.0, cx / 230.0))
        else:
            prog = max(0.0, min(1.0, (696.0 - cx) / (696.0 - 427.0)))
            
        dots_data.append({
            "x": base_x,
            "y": base_y,
            "r": base_r,
            "is_left": is_left,
            "prog": prog,
            "seed": (cx * 17.3 + cy * 31.7) % (math.pi * 2)
        })

    # Sparks between fingertips
    # Left fingertip ~ (630, 680), Right fingertip ~ (1180, 700)
    left_tip_x = max(d["x"] for d in dots_data if d["is_left"])
    left_tip_y = [d["y"] for d in dots_data if d["is_left"] and abs(d["x"] - left_tip_x) < 20][0]
    
    right_tip_x = min(d["x"] for d in dots_data if not d["is_left"])
    right_tip_y = [d["y"] for d in dots_data if not d["is_left"] and abs(d["x"] - right_tip_x) < 20][0]
    
    print(f"Left fingertip: ({left_tip_x:.1f}, {left_tip_y:.1f})")
    print(f"Right fingertip: ({right_tip_x:.1f}, {right_tip_y:.1f})")

    # Generate 18 sparks bridging between the fingertips in closed loops
    sparks = []
    for k in range(18):
        t_phase = (k / 18.0) * math.pi * 2
        freq = 1 if k % 2 == 0 else 2
        sparks.append({
            "t_phase": t_phase,
            "freq": freq,
            "span_offset_y": (math.sin(k * 1.5) * 40.0),
            "size": 1.5 + (k % 3) * 0.8
        })

    # Video setup: 180 frames @ 30fps = 6.0 seconds seamless loop
    FPS = 30
    NUM_FRAMES = 180
    
    # Pre-render subtle radial vignette background
    base_bg = np.ones((H, W, 3), dtype=np.float32)
    y_coords, x_coords = np.ogrid[:H, :W]
    # gentle radial shading
    dist_from_center = np.sqrt(((x_coords - W / 2.0) / (W / 2.0)) ** 2 + ((y_coords - H / 2.0) / (H / 2.0)) ** 2)
    # Background color: #ffffff at center to #f4f6fb at corners
    for c, (val_center, val_edge) in enumerate([(255, 244), (255, 246), (255, 251)]): # B, G, R
        base_bg[:, :, c] = val_center - (val_center - val_edge) * np.clip(dist_from_center * 0.7, 0, 1)

    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    output_mp4 = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-hands.mp4"
    output_webm = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-hands.webm"
    
    # We pipe raw BGR24 frames into ffmpeg for pristine H.264 encode
    cmd_mp4 = [
        ffmpeg_exe,
        "-y",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", f"{W}x{H}",
        "-pix_fmt", "bgr24",
        "-r", str(FPS),
        "-i", "-",
        "-c:v", "libx264",
        "-pix_fmt", "yuv420p",
        "-preset", "slow",
        "-crf", "18",
        "-movflags", "+faststart",
        output_mp4
    ]

    pipe = subprocess.Popen(cmd_mp4, stdin=subprocess.PIPE)

    print("Rendering 180 frames (6.0s seamless loop)...")
    
    # Colors (BGR)
    COLOR_NAVY = np.array([97.0, 43.0, 32.0])    # #202B61
    COLOR_BLUE = np.array([246.0, 130.0, 59.0])   # #3B82F6
    COLOR_CYAN = np.array([255.0, 212.0, 0.0])    # #00D4FF
    
    for frame_idx in range(NUM_FRAMES):
        t = frame_idx / float(NUM_FRAMES) # 0.0 to 1.0
        angle = t * math.pi * 2
        
        frame = base_bg.copy()
        
        # Subtle hand levitation
        float_left_y = math.sin(angle) * 5.0
        float_right_y = math.sin(angle + math.pi * 0.7) * 5.0
        
        # Draw all dots
        for d in dots_data:
            is_left = d["is_left"]
            float_y = float_left_y if is_left else float_right_y
            
            # Pulse wave moving along hand towards fingertip
            # wave repeats twice per loop (freq = 2) for smooth flow
            wave_phase = angle * 2.0 - d["prog"] * math.pi * 3.0 + d["seed"] * 0.3
            pulse = math.sin(wave_phase)
            # Normalize pulse to 0..1 peak
            pulse_norm = max(0.0, pulse) ** 2.5
            
            # Breathing radius
            r = d["r"] * (1.0 + pulse_norm * 0.38)
            
            # Dynamic color interpolation
            if pulse_norm < 0.6:
                mix = pulse_norm / 0.6
                c = COLOR_NAVY * (1.0 - mix) + COLOR_BLUE * mix
            else:
                mix = (pulse_norm - 0.6) / 0.4
                c = COLOR_BLUE * (1.0 - mix) + COLOR_CYAN * mix
                
            x_pos = d["x"]
            y_pos = d["y"] + float_y
            
            # Draw anti-aliased circle
            cv2.circle(frame, (int(round(x_pos)), int(round(y_pos))), int(round(r)), c.tolist(), -1, cv2.LINE_AA)

        # Draw sparks bridging fingertips
        for spk in sparks:
            # Closed-loop parameterization
            spk_t = (angle * spk["freq"] + spk["t_phase"]) % (math.pi * 2)
            # X oscillates between left fingertip and right fingertip
            progress = (math.cos(spk_t) + 1.0) * 0.5 # 0 (left) to 1 (right)
            sx = left_tip_x + (right_tip_x - left_tip_x) * progress
            
            # Gentle arch trajectory
            arch = math.sin(progress * math.pi) * 35.0
            sy = left_tip_y + (right_tip_y - left_tip_y) * progress - arch + spk["span_offset_y"] * math.sin(spk_t)
            
            spark_alpha = math.sin(progress * math.pi) ** 1.5
            if spark_alpha > 0.05:
                spark_color = (COLOR_CYAN * spark_alpha + np.array([255.0, 255.0, 255.0]) * (1.0 - spark_alpha)).tolist()
                cv2.circle(frame, (int(round(sx)), int(round(sy))), int(round(spk["size"])), spark_color, -1, cv2.LINE_AA)

        # Convert to uint8 and write to pipe
        uint8_frame = np.clip(frame, 0, 255).astype(np.uint8)
        pipe.stdin.write(uint8_frame.tobytes())
        
        if (frame_idx + 1) % 30 == 0:
            print(f"Rendered {frame_idx + 1}/{NUM_FRAMES} frames...")

    pipe.stdin.close()
    pipe.wait()
    print(f"MP4 generated successfully: {output_mp4} ({os.path.getsize(output_mp4)} bytes)")

    # Also convert to WebM for native HTML5 webm support
    print("Generating WebM version...")
    cmd_webm = [
        ffmpeg_exe,
        "-y",
        "-i", output_mp4,
        "-c:v", "libvpx-vp9",
        "-b:v", "1.5M",
        "-pix_fmt", "yuv420p",
        output_webm
    ]
    subprocess.run(cmd_webm, check=True)
    print(f"WebM generated successfully: {output_webm} ({os.path.getsize(output_webm)} bytes)")

if __name__ == "__main__":
    main()

