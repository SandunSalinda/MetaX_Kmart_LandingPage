// Domain Security Check Script
// Run with: node security-check.js

const { exec } = require('child_process');
const domain = 'kmartlk.com';

console.log(`🔍 Security Check for ${domain}\n`);

// Check DNS records
exec(`nslookup ${domain}`, (error, stdout, stderr) => {
  console.log('📡 DNS Records:');
  console.log(stdout);
  console.log('---\n');
});

// Check if domain is still blacklisted
const checkUrls = [
  `https://check.spamhaus.org/?ip=${domain}`,
  'http://www.surbl.org/surbl-analysis/'
];

console.log('🚨 Check these URLs manually:');
checkUrls.forEach(url => console.log(`- ${url}`));

console.log('\n✅ Your Vercel site should be accessible at:');
console.log(`- https://${domain}`);
console.log(`- https://www.${domain}`);

console.log('\n🔒 Security Checklist:');
console.log('□ Changed Namecheap password');
console.log('□ Enabled 2FA on Namecheap');
console.log('□ Reviewed all DNS records');
console.log('□ Removed unauthorized DNS entries');
console.log('□ Submitted delisting requests');
console.log('□ Set up DNS monitoring');
