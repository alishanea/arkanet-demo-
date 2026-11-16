const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        results = results.concat(walk(fullPath));
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const root = path.resolve(__dirname, '..');
const files = walk(path.join(root, 'src'));
const assetRegex = /["`'](\/assets\/[^"'`\s]+)["`']/g;
const missing = [];
const checked = new Set();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    const assetPath = match[1];
    if (checked.has(assetPath)) continue;
    checked.add(assetPath);
    const diskPath = path.join(root, 'public', assetPath);
    if (!fs.existsSync(diskPath)) {
      missing.push({ assetPath, file: path.relative(root, file) });
    }
  }
});

console.log('Total unique /assets/ references checked:', checked.size);
console.log('Missing assets found:', missing.length);
if (missing.length > 0) {
  console.log(JSON.stringify(missing, null, 2));
} else {
  console.log('All static assets exist on disk!');
}
