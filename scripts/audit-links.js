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

// Extract slugs from capabilitiesData.ts using regex
const capContent = fs.readFileSync(path.join(root, 'src', 'lib', 'capabilitiesData.ts'), 'utf8');
const validSlugs = new Set();
const slugMatchRegex = /"([a-z0-9-]+)":\s*\{[\s\n]*slug:/g;
let sMatch;
while ((sMatch = slugMatchRegex.exec(capContent)) !== null) {
  validSlugs.add(sMatch[1]);
}

// Valid top-level routes
const validRoutes = new Set([
  '/',
  '/about',
  '/work',
  '/capabilities',
  '/insights',
  '/blog',
  '/contact',
  '/sitemap.xml',
  '/robots.txt'
]);

const hrefRegex = /href=["'](\/[^"'#\s?]+)["']/g;
const deadLinks = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const url = match[1];
    if (url.startsWith('/capabilities/')) {
      const slug = url.replace('/capabilities/', '');
      if (!validSlugs.has(slug)) {
        deadLinks.push({ file: path.relative(root, file), url });
      }
    } else if (!validRoutes.has(url) && !url.startsWith('/_next') && !url.startsWith('/assets/')) {
      deadLinks.push({ file: path.relative(root, file), url });
    }
  }
});

console.log('Total valid capability slugs found:', validSlugs.size);
console.log('Dead / unhandled links found:', deadLinks.length);
console.log(JSON.stringify(deadLinks, null, 2));
