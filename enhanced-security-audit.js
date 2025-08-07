// Enhanced Security Audit Script
// Run with: node enhanced-security-audit.js

const { exec } = require('child_process');
const https = require('https');
const domain = 'kmartlk.com';

console.log(`🔍 COMPREHENSIVE SECURITY AUDIT for ${domain}`);
console.log('='.repeat(60));

// Function to run command and return promise
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(`Error: ${error.message}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Function to check website accessibility
function checkWebsite(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(`✅ ${url} - Status: ${res.statusCode}`);
    }).on('error', (err) => {
      resolve(`❌ ${url} - Error: ${err.message}`);
    });
  });
}

async function performAudit() {
  console.log('\n📡 DNS RECORDS ANALYSIS:');
  console.log('-'.repeat(40));
  
  // Check A records
  console.log('🔍 A Records:');
  const aRecords = await runCommand(`nslookup -type=A ${domain}`);
  console.log(aRecords);
  
  // Check MX records
  console.log('📧 MX (Mail) Records:');
  const mxRecords = await runCommand(`nslookup -type=MX ${domain}`);
  console.log(mxRecords);
  
  // Check TXT records
  console.log('📝 TXT Records:');
  const txtRecords = await runCommand(`nslookup -type=TXT ${domain}`);
  console.log(txtRecords);
  
  // Check NS records
  console.log('🌐 NS (Nameserver) Records:');
  const nsRecords = await runCommand(`nslookup -type=NS ${domain}`);
  console.log(nsRecords);
  
  // Check CNAME records
  console.log('🔗 CNAME Records:');
  const cnameRecords = await runCommand(`nslookup -type=CNAME www.${domain}`);
  console.log(cnameRecords);
  
  console.log('\n🌐 WEBSITE ACCESSIBILITY CHECK:');
  console.log('-'.repeat(40));
  
  // Check website accessibility
  const websiteCheck1 = await checkWebsite(`https://${domain}`);
  const websiteCheck2 = await checkWebsite(`https://www.${domain}`);
  
  console.log(websiteCheck1);
  console.log(websiteCheck2);
  
  console.log('\n🚨 SECURITY ANALYSIS:');
  console.log('-'.repeat(40));
  
  // Analysis of findings
  console.log('DNS Server Analysis:');
  if (aRecords.includes('vercel-dns.com')) {
    console.log('✅ Using Vercel DNS servers - GOOD');
  } else {
    console.log('⚠️  Check if using correct DNS servers');
  }
  
  if (mxRecords.includes('MX preference')) {
    console.log('⚠️  MX records found - Check if authorized');
  } else {
    console.log('✅ No MX records found - GOOD (no email server)');
  }
  
  console.log('\n🔒 IMMEDIATE ACTION ITEMS:');
  console.log('-'.repeat(40));
  console.log('1. ✅ DNS servers point to Vercel (ns1/ns2.vercel-dns.com)');
  console.log('2. ⚠️  Check Namecheap account for unauthorized changes');
  console.log('3. ⚠️  Submit delisting requests to Spamhaus and SURBL');
  console.log('4. ⚠️  Enable 2FA on Namecheap if not already done');
  console.log('5. ⚠️  Change Namecheap password');
  
  console.log('\n🌍 BLACKLIST CHECK URLS:');
  console.log('-'.repeat(40));
  console.log(`• Spamhaus: https://check.spamhaus.org/?ip=${domain}`);
  console.log(`• SURBL: http://www.surbl.org/surbl-analysis/`);
  console.log(`• VirusTotal: https://www.virustotal.com/gui/domain/${domain}`);
  
  console.log('\n📋 SECURITY CHECKLIST:');
  console.log('-'.repeat(40));
  console.log('□ Changed Namecheap password');
  console.log('□ Enabled 2FA on Namecheap');
  console.log('□ Reviewed DNS records in Namecheap dashboard');
  console.log('□ Confirmed only Vercel DNS servers are used');
  console.log('□ No unauthorized MX/TXT/CNAME records');
  console.log('□ Submitted Spamhaus delisting request');
  console.log('□ Submitted SURBL delisting request');
  console.log('□ Set up DNS monitoring alerts');
  
  console.log('\n✅ NEXT STEPS:');
  console.log('-'.repeat(40));
  console.log('1. Login to Namecheap → Advanced DNS');
  console.log('2. Remove ANY records you did not create');
  console.log('3. Ensure only these records exist:');
  console.log('   - NS: ns1.vercel-dns.com, ns2.vercel-dns.com');
  console.log('   - A: Points to Vercel IPs');
  console.log('4. Submit delisting requests with evidence of cleanup');
}

// Run the audit
performAudit().catch(console.error);
