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
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
      results.push(fullPath);
    }
  });
  return results;
}

const root = path.resolve(__dirname, '..');
const files = walk(path.join(root, 'src'));
const assetRegex = /['"](\/(?:assets|images)[^'\"?#\s]+)['"]/g;
const missing = [];
const found = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    const assetPath = match[1];
    const localPath = path.join(root, 'public', assetPath.replace(/\//g, path.sep));
    if (!fs.existsSync(localPath)) {
      missing.push({ file: path.relative(root, file), asset: assetPath });
    } else {
      found.push(assetPath);
    }
  }
});

console.log('Total referenced assets:', found.length + missing.length);
console.log('Missing assets count:', missing.length);
if (missing.length > 0) {
  console.log(JSON.stringify(missing, null, 2));
}
