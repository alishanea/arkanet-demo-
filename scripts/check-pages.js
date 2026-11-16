const http = require('http');

const routes = [
  '/',
  '/about',
  '/work',
  '/capabilities',
  '/contact',
  '/products',
  '/application',
  '/insights',
  '/blog',
  '/capabilities/custom-software-engineering',
  '/capabilities/website-development',
  '/capabilities/mobile-app-development',
  '/capabilities/applied-ai-ml',
  '/capabilities/cloud-devops-hosting',
  '/capabilities/ai-chatbot-automation'
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${route}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ route, status: res.statusCode, length: data.length });
      });
    }).on('error', (err) => {
      resolve({ route, error: err.message });
    });
  });
}

(async () => {
  console.log('Testing routes against http://localhost:3000:');
  let hasError = false;
  for (const r of routes) {
    const res = await checkRoute(r);
    if (res.status === 200) {
      console.log(`[PASS] ${res.route} - Status: ${res.status} (${res.length} bytes)`);
    } else {
      console.log(`[FAIL] ${res.route} - Status: ${res.status || 'ERROR'} - ${res.error || ''}`);
      hasError = true;
    }
  }
  if (!hasError) {
    console.log('\nAll pages returned HTTP 200 OK!');
  }
})();
