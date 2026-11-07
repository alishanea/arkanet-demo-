import re
import os
import glob

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src_dir = os.path.join(root, 'src')
pub_dir = os.path.join(root, 'public')

asset_refs = set()
pattern = re.compile(r'["\'](/assets/[^"\'#\s?]+)["\']')

for root_dir, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
            p = os.path.join(root_dir, file)
            with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                for m in pattern.finditer(content):
                    asset_refs.add(m.group(1))

missing = []
for ref in sorted(asset_refs):
    local_path = os.path.join(pub_dir, ref.lstrip('/assets/'))
    # Also check if it's in public/assets/
    alt_path = os.path.join(root, 'public', ref.lstrip('/'))
    if not os.path.exists(local_path) and not os.path.exists(alt_path):
        missing.append((ref, alt_path))

print(f"Total local /assets/ references: {len(asset_refs)}")
print(f"Missing assets: {len(missing)}")
for ref, lp in missing:
    print(f"  MISSING: {ref}")

