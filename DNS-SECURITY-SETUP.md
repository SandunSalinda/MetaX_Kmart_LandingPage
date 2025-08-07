DOMAIN SECURITY IMPLEMENTATION GUIDE
=====================================

## DNS RECORDS TO ADD IN NAMECHEAP

### 1. SPF Record (CRITICAL - Prevents Email Abuse)
Record Type: TXT
Name: @ (root domain)
Value: v=spf1 -all
TTL: 300

This tells email servers: "This domain does NOT send email"

### 2. DMARC Record (Additional Protection)
Record Type: TXT  
Name: _dmarc
Value: v=DMARC1; p=reject; rua=mailto:dmarc@kmartlk.com
TTL: 300

### 3. Verification Records (Optional)
Record Type: TXT
Name: @
Value: "kmartlk-security-verified-2025"
TTL: 300

## STEPS TO IMPLEMENT:

1. Login to Namecheap
2. Go to Domain List → Manage → Advanced DNS
3. Add the TXT records above
4. Verify current records match only:
   - NS: ns1.vercel-dns.com, ns2.vercel-dns.com  
   - A: Vercel IPs only
   - TXT: Only the security records above

## CURRENT FORM STATUS:
✅ Form neutralized - no email collection
✅ No network requests
✅ No data storage  
✅ Visual feedback only
✅ Security comments added

## BLACKLIST REMOVAL:
Submit to:
- Spamhaus: https://check.spamhaus.org/
- SURBL: http://www.surbl.org/surbl-analysis/

Explain: "Domain was compromised, now secured with SPF -all record, no email functionality"
