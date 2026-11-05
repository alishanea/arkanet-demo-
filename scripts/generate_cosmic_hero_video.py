import os
import math
import subprocess
import cv2
import numpy as np
import imageio_ffmpeg

def main():
    print("Loading cleaned master artwork...")
    src_path = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/artwork_master.png"
    master = cv2.imread(src_path)
    if master is None:
        print("Error: could not read artwork_master.png")
        return

    orig_h, orig_w, _ = master.shape
    print(f"Master dimensions: {orig_w}x{orig_h}")

    # Target resolution: 1920 x 1080 Full HD
    W, H = 1920, 1080
    scale = W / float(orig_w)
    scaled_h = int(round(orig_h * scale))
    scaled = cv2.resize(master, (W, scaled_h), interpolation=cv2.INTER_LANCZOS4)
    
    # Align so the water, reflection and arch are balanced
    crop_y_start = scaled_h - H # aligns to bottom
    base_frame = scaled[crop_y_start:scaled_h, 0:W].astype(np.float32)
    
    # In original master (589h), horizon line of water is at y ~ 455
    # Scaled to 1080h: horizon is at 455 * scale - crop_y_start
    horizon_y = int(round(455.0 * scale - crop_y_start))
    print(f"Horizon line at y={horizon_y}")

    # Portal center in base_frame (inner golden light of the arch)
    # Original ~ (500, 320)
    portal_x = 500.0 * scale
    portal_y = 320.0 * scale - crop_y_start
    
    # Precompute light glow mask around the arch
    portal_dist = np.sqrt(((np.arange(W) - portal_x) / 380.0) ** 2 + ((np.arange(H)[:, None] - portal_y) / 300.0) ** 2)
    portal_glow_mask = np.clip(1.0 - portal_dist, 0.0, 1.0) ** 1.8
    # Warm amber / golden glow (BGR)
    portal_glow_bgr = np.dstack([portal_glow_mask * 0.25, portal_glow_mask * 0.55, portal_glow_mask * 0.85]).astype(np.float32)

    # 35 floating dust motes / starlight particles
    np.random.seed(42)
    particles = []
    for _ in range(35):
        particles.append({
            "base_x": portal_x + (np.random.rand() - 0.5) * 550.0,
            "base_y": portal_y + (np.random.rand() - 0.5) * 400.0,
            "phase": np.random.rand() * math.pi * 2,
            "r": 1.2 + np.random.rand() * 1.8
        })

    FPS = 30
    NUM_FRAMES = 180 # 6.0 seconds seamless loop

    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    out_mp4 = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-cosmic.mp4"
    out_webm = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-cosmic.webm"

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
        out_mp4
    ]

    pipe = subprocess.Popen(cmd_mp4, stdin=subprocess.PIPE)

    print("Rendering 180 frames of living cosmic world...")

    # Pre-generate water coordinate grids for fast vectorized ripple displacement
    water_h = H - horizon_y
    y_indices, x_indices = np.indices((water_h, W))
    depth_factor = (y_indices.astype(np.float32) / float(water_h)) ** 1.2
    depth_factor_3d = depth_factor[:, :, None]

    feather = np.clip((np.arange(water_h, dtype=np.float32) / 16.0)[:, None, None], 0.0, 1.0)

    for f in range(NUM_FRAMES):
        t = f / float(NUM_FRAMES)
        angle = t * math.pi * 2.0
        
        # 1. Start from base frame
        frame = base_frame.copy()

        # 2. Gentle breathing of sunlight / portal warmth
        portal_pulse = math.sin(angle) * 0.22
        frame += portal_glow_bgr * (30.0 * portal_pulse)

        # 3. Realistic water ripple displacement
        # Traveling wave harmonics (2*pi*t guarantees seamless 0 == 180)
        wave_disp_y = (np.sin(y_indices * 0.07 - angle * 2.0) * 2.2 +
                       np.sin(x_indices * 0.03 + y_indices * 0.02 - angle) * 1.4) * depth_factor
        wave_disp_x = (np.cos(y_indices * 0.04 + x_indices * 0.02 - angle) * 1.8) * depth_factor

        # Map coordinates
        map_y = np.clip(y_indices + horizon_y + wave_disp_y, horizon_y, H - 1).astype(np.float32)
        map_x = np.clip(x_indices + wave_disp_x, 0, W - 1).astype(np.float32)
        
        # Remap water region
        water_displaced = cv2.remap(base_frame, map_x, map_y, cv2.INTER_LINEAR)
        
        # Add subtle water shimmer highlights (glint on ripples)
        glint = np.clip(np.sin(y_indices * 0.08 - angle * 2.0 + wave_disp_y * 0.4) ** 8, 0, 1) * depth_factor * 18.0
        water_displaced += np.dstack([glint * 0.7, glint * 0.85, glint]) # soft warm shimmer
        
        # Blend water onto frame with soft edge at horizon
        frame[horizon_y:, :] = water_displaced * feather + frame[horizon_y:, :] * (1.0 - feather)

        # 4. Stardust / dust motes drifting in the light
        for p in particles:
            p_dx = math.sin(angle + p["phase"]) * 16.0 + math.cos(angle * 2.0 + p["phase"]) * 5.0
            p_dy = math.sin(angle * 2.0 + p["phase"]) * 12.0
            
            px = int(round(p["base_x"] + p_dx))
            py = int(round(p["base_y"] + p_dy))
            
            p_alpha = (math.sin(angle * 2.0 + p["phase"]) + 1.0) * 0.5
            if 0 <= px < W and 0 <= py < H and p_alpha > 0.2:
                p_col = (np.array([210.0, 235.0, 255.0]) * p_alpha).tolist()
                cv2.circle(frame, (px, py), int(round(p["r"])), p_col, -1, cv2.LINE_AA)

        # Write frame to ffmpeg pipe
        uint8_frame = np.clip(frame, 0, 255).astype(np.uint8)
        pipe.stdin.write(uint8_frame.tobytes())

        if (f + 1) % 30 == 0:
            print(f"Rendered {f + 1}/{NUM_FRAMES} frames...")

    pipe.stdin.close()
    pipe.wait()
    print(f"MP4 generated successfully: {out_mp4} ({os.path.getsize(out_mp4)} bytes)")

    # Generate WebM
    print("Generating WebM version...")
    cmd_webm = [
        ffmpeg_exe,
        "-y",
        "-i", out_mp4,
        "-c:v", "libvpx-vp9",
        "-b:v", "2.2M",
        "-pix_fmt", "yuv420p",
        out_webm
    ]
    subprocess.run(cmd_webm, check=True)
    print(f"WebM generated successfully: {out_webm} ({os.path.getsize(out_webm)} bytes)")

if __name__ == "__main__":
    main()
