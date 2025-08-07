// Security Monitoring Script - Run weekly
// node domain-monitor.js

const { exec } = require('child_process');
const domain = 'kmartlk.com';

async function runCommand(command) {
  return new Promise((resolve) => {
    exec(command, (error, stdout) => {
      resolve(stdout || `Error: ${error?.message || 'Unknown'}`);
    });
  });
}

async function monitorSecurity() {
  console.log('🔒 WEEKLY SECURITY MONITOR - K MART');
  console.log('='.repeat(50));
  
  // Check SPF record
  console.log('\n📧 SPF Record Check:');
  const spfCheck = await runCommand(`nslookup -type=TXT ${domain}`);
  if (spfCheck.includes('v=spf1 -all')) {
    console.log('✅ SPF record found: v=spf1 -all');
  } else {
    console.log('❌ SPF record missing! Add: v=spf1 -all');
  }
  
  // Check DNS servers
  console.log('\n🌐 DNS Server Check:');
  const nsCheck = await runCommand(`nslookup -type=NS ${domain}`);
  if (nsCheck.includes('vercel-dns.com')) {
    console.log('✅ Using Vercel DNS servers');
  } else {
    console.log('⚠️ Check DNS servers!');
  }
  
  // Check for unauthorized MX records
  console.log('\n📮 MX Record Check:');
  const mxCheck = await runCommand(`nslookup -type=MX ${domain}`);
  if (mxCheck.includes('MX preference')) {
    console.log('⚠️ MX records found - investigate');
  } else {
    console.log('✅ No MX records (good)');
  }
  
  // Website accessibility
  console.log('\n🌍 Website Check:');
  console.log(`Visit: https://${domain}`);
  console.log(`Check blacklist: https://check.spamhaus.org/?ip=${domain}`);
  
  console.log('\n📋 ACTION ITEMS:');
  console.log('1. Review Namecheap DNS settings');
  console.log('2. Check blacklist status');  
  console.log('3. Verify form remains neutralized');
  console.log('4. Monitor for suspicious DNS changes');
  
  console.log('\n🚨 If ANY unauthorized records found:');
  console.log('- Change Namecheap password immediately');
  console.log('- Remove unauthorized records');
  console.log('- Enable 2FA if not already done');
}

// Run monitoring
monitorSecurity().catch(console.error);

// Schedule reminder
console.log('\n⏰ Set reminder: Run this script weekly');
console.log('Command: node domain-monitor.js');
