import subprocess
import imageio_ffmpeg
import os

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

src = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/team_261_1080.mp4"
out_mp4 = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-tech-team.mp4"
out_webm = r"c:/Users/ALISHAN/Downloads/arkanet-maindemo/arkanet-main/public/assets/hero-tech-team.webm"

# In team_261_1080.mp4, duration is ~11.5 seconds at 25 fps (~287 frames).
# Let's create a perfect 10-second seamless loop by cross-fading the last 1.2 seconds into the beginning!
# Filter complex:
# [0]split[main][end];
# [main]trim=0:9.0,setpts=PTS-STARTPTS[base];
# [end]trim=9.0:10.2,setpts=PTS-STARTPTS[fadein];
# etc... OR use xfade:
# ffmpeg -i src -filter_complex "[0:v]split[v1][v2];[v1]trim=1:10,setpts=PTS-STARTPTS[v1_cut];[v2]trim=0:1,setpts=PTS-STARTPTS[v2_cut];[v1_cut][v2_cut]xfade=transition=fade:duration=1:offset=8[outv]"
filter_str = (
    "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,"
    "eq=contrast=1.05:brightness=0.02:saturation=1.1,"
    "split[v1][v2];"
    "[v1]trim=1.0:10.5,setpts=PTS-STARTPTS[v1_trim];"
    "[v2]trim=0.0:1.0,setpts=PTS-STARTPTS[v2_trim];"
    "[v1_trim][v2_trim]xfade=transition=fade:duration=1.0:offset=8.5[outv]"
)

print("Encoding seamless loop MP4...")
cmd_mp4 = [
    ffmpeg,
    "-y",
    "-i", src,
    "-filter_complex", filter_str,
    "-map", "[outv]",
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "20",
    "-pix_fmt", "yuv420p",
    "-movflags", "+faststart",
    out_mp4
]
subprocess.run(cmd_mp4, check=True)
print(f"MP4 done: {out_mp4} ({os.path.getsize(out_mp4)} bytes)")

print("Encoding WebM...")
cmd_webm = [
    ffmpeg,
    "-y",
    "-i", out_mp4,
    "-c:v", "libvpx-vp9",
    "-b:v", "2.0M",
    "-pix_fmt", "yuv420p",
    out_webm
]
subprocess.run(cmd_webm, check=True)
print(f"WebM done: {out_webm} ({os.path.getsize(out_webm)} bytes)")
