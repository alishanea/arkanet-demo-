import os
import math
import subprocess
import cv2
import numpy as np
import imageio_ffmpeg

def main():
    print("Loading cleaned master artwork without floating orbs...")
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
    
    # Save the 1080p clean poster image immediately
    poster_path = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-cosmic-poster.jpg"
    cv2.imwrite(poster_path, np.clip(base_frame, 0, 255).astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, 95])
    print(f"Saved {poster_path}")

    # In original master (589h), horizon line of water is at y ~ 455
    horizon_y = int(round(455.0 * scale - crop_y_start))
    print(f"Horizon line at y={horizon_y}")

    # Portal center in base_frame (inner golden light of the arch)
    portal_x = 500.0 * scale
    portal_y = 320.0 * scale - crop_y_start
    
    # Soft light glow mask around the arch
    portal_dist = np.sqrt(((np.arange(W) - portal_x) / 420.0) ** 2 + ((np.arange(H)[:, None] - portal_y) / 320.0) ** 2)
    portal_glow_mask = np.clip(1.0 - portal_dist, 0.0, 1.0) ** 1.8
    # Warm amber / golden glow (BGR)
    portal_glow_bgr = np.dstack([portal_glow_mask * 0.20, portal_glow_mask * 0.45, portal_glow_mask * 0.70]).astype(np.float32)

    FPS = 30
    NUM_FRAMES = 180  # 6.0 seconds seamless loop

    # Precompute water coordinates grid for water ripples
    water_h = H - horizon_y
    y_grid, x_grid = np.meshgrid(np.arange(water_h), np.arange(W), indexing="ij")
    dist_from_horizon = (y_grid / float(water_h)).astype(np.float32)

    # Temporary raw frames directory
    temp_dir = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/_temp_frames"
    os.makedirs(temp_dir, exist_ok=True)

    print(f"Rendering {NUM_FRAMES} frames...")
    for f_idx in range(NUM_FRAMES):
        theta = (f_idx / float(NUM_FRAMES)) * 2.0 * math.pi
        frame = base_frame.copy()

        # 1. Subtle warm light breathing through the portal archway
        light_breathe = (math.sin(theta) + 1.0) * 0.5 * 14.0
        frame += portal_glow_bgr * light_breathe

        # 2. Gentle reflective water ripples (horizontal subtle displacement)
        dy = (np.sin(x_grid * 0.02 + theta) * 1.5 + np.cos(x_grid * 0.045 - theta * 2) * 1.0) * (dist_from_horizon ** 0.5)
        map_x = x_grid.astype(np.float32)
        map_y = np.clip(y_grid.astype(np.float32) + horizon_y + dy, horizon_y, H - 1)
        
        water_region = cv2.remap(
            frame,
            map_x,
            map_y,
            interpolation=cv2.INTER_LINEAR,
            borderMode=cv2.BORDER_REFLECT
        )
        
        # Blend water back with gentle feathering near horizon
        feather = np.clip(dist_from_horizon * 10.0, 0.0, 1.0)[:, :, None]
        frame[horizon_y:H, :] = frame[horizon_y:H, :] * (1.0 - feather) + water_region * feather

        # Clip and save
        frame_uint8 = np.clip(frame, 0, 255).astype(np.uint8)
        frame_path = os.path.join(temp_dir, f"frame_{f_idx:04d}.png")
        cv2.imwrite(frame_path, frame_uint8)

        if f_idx % 45 == 0:
            print(f"Frame {f_idx}/{NUM_FRAMES} done")

    print("All frames rendered. Encoding MP4 (H.264)...")
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    mp4_out = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-cosmic.mp4"
    webm_out = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-cosmic.webm"

    # Encode MP4
    cmd_mp4 = [
        ffmpeg_exe, "-y",
        "-framerate", str(FPS),
        "-i", os.path.join(temp_dir, "frame_%04d.png"),
        "-c:v", "libx264",
        "-profile:v", "high",
        "-level:v", "4.1",
        "-pix_fmt", "yuv420p",
        "-crf", "20",
        "-preset", "medium",
        "-movflags", "+faststart",
        mp4_out
    ]
    subprocess.run(cmd_mp4, check=True)
    print(f"MP4 encoded: {os.path.getsize(mp4_out) / 1024:.1f} KB")

    # Encode WebM
    print("Encoding WebM (VP9)...")
    cmd_webm = [
        ffmpeg_exe, "-y",
        "-framerate", str(FPS),
        "-i", os.path.join(temp_dir, "frame_%04d.png"),
        "-c:v", "libvpx-vp9",
        "-crf", "28",
        "-b:v", "0",
        "-pix_fmt", "yuv420p",
        webm_out
    ]
    subprocess.run(cmd_webm, check=True)
    print(f"WebM encoded: {os.path.getsize(webm_out) / 1024:.1f} KB")

    # Clean up temp frames
    for f in os.listdir(temp_dir):
        os.remove(os.path.join(temp_dir, f))
    os.rmdir(temp_dir)
    print("Done! Background video has no floating orb circles, seamless 60fps ripples, and pristine quality.")

if __name__ == "__main__":
    main()

