// =============================================================
// EDIT THIS FILE to update any content on the site.
// Add projects, history entries, skills, or reading shelf items
// here and the site updates automatically on next deploy.
// =============================================================

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  blurb: string;
  why: string;
  process: string;
  status: "live" | "building";
  icon: string;
  link?: string;
  instagram?: string;
  accent: "cream" | "sage" | "dark" | "blue";
  imagePlaceholder?: string; // decorative color used until you add a real image
};

export const projects: Project[] = [
  {
    id: "hueman-gallery",
    title: "Hueman Story Gallery",
    category: "React · Supabase · Vercel",
    summary: "A private gallery for photography clients",
    blurb:
      "A private gallery for clients of my photography business. They log in, browse their photos, and pick favorites without ever touching a Google Drive folder.",
    why:
      "I built this because I realized I could deploy something real for free myself. To be in a tech world and not use tech to make your own life easier is honestly a loss. Hueman Story is something I care about, so I wanted to give it something that felt professional and intentional, not just a shared link.",
    process:
      "Built with React, Supabase for the backend and auth, and deployed on Vercel. I designed password-protected albums, a swipeable lightbox for browsing, progressive photo upload, and a public showcase page for new visitors. The whole thing cost $0 to run.",
    status: "live",
    icon: "Image",
    link: "https://hueman-gallery.vercel.app/showcase",
    instagram: "https://instagram.com/hueman.story",
    accent: "cream",
    imagePlaceholder: "#E8DDD0",
  },
  {
    id: "nyikm-bot",
    title: "NYIKM Bot",
    category: "Telegram · Apps Script · Google Sheets",
    summary: "A personal spiritual progress tracker for a youth group",
    blurb:
      "A Telegram bot for my mandir's youth group that tracks sabha (assembly) attendance and spiritual progress. Each member has their own personal tracker they can check anytime.",
    why:
      "We had spreadsheets. So many spreadsheets. Going into each one to find someone's attendance or progress took forever, and honestly things got lost. I wanted something faster, more efficient, and actually friendly to use. Not everyone is comfortable with spreadsheets, but everyone is on Telegram.",
    process:
      "Built entirely in Google Apps Script with a Google Sheets backend, connected to the Telegram Bot API. The bot responds to commands like /attendance, /goals, and /status. Each member gets their own row in the sheet that updates in real time. I also added admin commands so coordinators can log entries without opening the sheet at all. I was genuinely figuring things out as I built it, the Telegram API docs became my best friend.",
    status: "live",
    icon: "Bot",
    accent: "sage",
    imagePlaceholder: "#C5D4B8",
  },
  {
    id: "phishguard",
    title: "PhishGuard",
    category: "Python · NLP · Security",
    summary: "Catching phishing attempts before they land",
    blurb:
      "A tool that analyzes emails and URLs for the signals that give away a phishing attempt, before anyone clicks anything they shouldn't.",
    why:
      "Phishing is still the most common way attacks succeed, not because people are careless but because the attempts keep getting smarter. I wanted to build something that actually explains why something looks suspicious, not just flag it.",
    process:
      "Currently in active development. Using Python with NLP techniques to analyze email headers, sender reputation, link structure, and language patterns. The goal is a clean output that non-technical people can actually read and act on.",
    status: "building",
    icon: "ShieldAlert",
    accent: "dark",
    imagePlaceholder: "#2A2A2A",
  },
  {
    id: "vuln-dashboard",
    title: "Web Vulnerability Scanner Dashboard",
    category: "Wapiti · Python · React",
    summary: "Turning scan output into something readable",
    blurb:
      "A dashboard that takes raw Wapiti scan output and turns it into a clean summary: what was found, how bad it is, and what to do about it.",
    why:
      "I ran real scans on real sites as part of coursework and the raw output is dense. I wanted something that makes triage faster and actually communicates risk clearly, not just a wall of text.",
    process:
      "Builds on hands-on scans I have already run, including XSS findings, outdated jQuery libraries, and missing security headers. Python parses the Wapiti HTML report, a React frontend displays findings sorted by severity. In progress.",
    status: "building",
    icon: "ScanSearch",
    accent: "blue",
    imagePlaceholder: "#C0CFEA",
  },
  {
    id: "honeypot-logger",
    title: "Honeypot Logger",
    category: "Python · Networking",
    summary: "Logging who knocks, and how",
    blurb:
      "A lightweight honeypot that logs connection attempts and basic attacker behavior: what ports get probed, what credentials get tried, how often.",
    why:
      "Reading about attackers in textbooks is one thing. Watching real scanning activity hit a system you set up yourself is another. I learn better by seeing it happen.",
    process:
      "Python-based listener on common ports, logging all interaction to a structured file. Next step is a simple dashboard to visualize the traffic patterns over time.",
    status: "building",
    icon: "Radar",
    accent: "dark",
    imagePlaceholder: "#1A1A1A",
  },
  {
    id: "packet-stories",
    title: "Packet Stories",
    category: "Wireshark · Python · Writing",
    summary: "Packet captures explained in plain English",
    blurb:
      "Turning raw packet captures into plain-English writeups: what happened, how I found it, and what it actually means for the people involved.",
    why:
      "Security findings are only useful if someone can understand them. I traced ARP spoofing, MITM attacks, and ICS traffic in lab work and realized the most interesting part was explaining it, not just finding it.",
    process:
      "Growing out of network forensics labs using Wireshark. I analyzed real PCAP files covering SSH reconnaissance, ARP poisoning, and industrial control protocol traffic. Now formalizing that into structured writeups with annotated screenshots.",
    status: "building",
    icon: "Network",
    accent: "sage",
    imagePlaceholder: "#D4DFC4",
  },
];

export type HistoryEntry = {
  id: string;
  role: string;
  org: string;
  period: string;
  icon: string;
  blurb: string;
};

export const history: HistoryEntry[] = [
  {
    id: "handshake",
    role: "AI Model Testing Intern",
    org: "Handshake AI",
    period: "2026",
    icon: "Bug",
    blurb:
      "I work across multiple AI evaluation projects, writing prompts and rubrics, reviewing model outputs across text, image, and audio, and specifically designing prompts meant to make models fail so we can find and fix the gaps. Less using AI, more stress-testing it.",
  },
  {
    id: "av-intern",
    role: "Photographer Intern, A&V",
    org: "BAPS Mandir",
    period: "2023 — now",
    icon: "Camera",
    blurb:
      "Documenting large-scale events across the Northeast: conventions, assemblies, health lectures, and walkathons. Working as part of a team to capture moments that actually communicate what happened, not just that it did.",
  },
  {
    id: "volunteer-coordinator",
    role: "Volunteer Coordinator",
    org: "BAPS Shri Swaminarayan Mandir",
    period: "2019 — now",
    icon: "Users",
    blurb:
      "Built community connections networking with 90+ participants during weekly events, managed communications for 300+ contacts, and recruited volunteers for nonprofit initiatives. Most of my early technical builds came from solving real problems here.",
  },
  {
    id: "kodewithklossy",
    role: "Scholar",
    org: "Kode With Klossy",
    period: "2020",
    icon: "Code",
    blurb:
      "Selected for the Kode With Klossy program, a competitive scholarship for young women learning to code. Where a lot of my early foundation in web development started.",
  },
  {
    id: "fireside-chat",
    role: "Video Editor, FireSide Chat",
    org: "myNetworkHer",
    period: "2023 — 2025",
    icon: "Video",
    blurb:
      "Edited 10+ podcast-style videos using Adobe Premiere Pro, turning raw Zoom recordings into polished content for STEM advocates. Boosted viewership 25% through creative editing choices.",
  },
  {
    id: "cybersecurity-degree",
    role: "BS Cybersecurity, in progress",
    org: "SUNY Canton",
    period: "2024 — 2027",
    icon: "ShieldCheck",
    blurb:
      "Junior standing, one year ahead of schedule. Labs have covered network forensics, web vulnerability scanning, penetration testing, and GRC policy analysis. Working toward CompTIA Security+.",
  },
];

export const stats = [
  { value: "3.89", label: "GPA · President's Honor List" },
  { value: "2027", label: "Graduating one year early" },
];

export const skills = [
  {
    category: "Security",
    items: ["Nmap", "Wireshark", "Wapiti", "OWASP ZAP", "Snort", "Kali Linux", "Ethical Hacking", "Phishing Analysis", "Packet Analysis", "Vulnerability Assessment", "Incident Response"],
  },
  {
    category: "Development",
    items: ["React", "Next.js", "TypeScript", "Python", "SQL", "HTML/CSS", "Google Apps Script", "Supabase", "Vercel"],
  },
  {
    category: "Systems & Tools",
    items: ["Linux", "Windows", "VMware", "Virtual Machines", "TCP/IP", "DNS", "Git"],
  },
  {
    category: "Creative",
    items: ["Darktable", "Adobe Premiere Pro", "DaVinci Resolve", "Candid Photography", "Content Strategy"],
  },
];

export const currentlyLearning = [
  { label: "CompTIA Security+", type: "cert", note: "In progress" },
  { label: "OWASP Top 10", type: "reading", note: "Deep dive" },
  { label: "Wireshark for Ethical Hacking", type: "course", note: "Active" },
  { label: "Python for Security Automation", type: "building", note: "Applying in PhishGuard" },
];

// ─── SECURITY ALERTS ───────────────────────────────────────────
// 15 alerts, graded easy / medium / advanced.
// Each visitor gets one at random, once per browser session.
// Add more by copying the object pattern below.
// ───────────────────────────────────────────────────────────────
export const securityAlerts = [
  // ── EASY (relatable, everyday language) ──────────────────────
  {
    level: "easy",
    title: "Your Password Was Found in a Data Breach",
    ip: "your account",
    detail: "A database containing 72 million leaked email-password combos resurfaced publicly in 2026. One of the entries matches credentials tied to this device.",
    funFact: "If you use the same password on more than one site, one breach can unlock everything. Attackers call this credential stuffing and it is almost entirely automated.",
    action: "Change your password",
  },
  {
    level: "easy",
    title: "Phishing Link Detected in Your Inbox",
    ip: "email client",
    detail: "A message claiming to be from your bank contains a link to a lookalike domain registered 3 days ago. The real site has been up for 11 years. Classic phishing setup.",
    funFact: "Phishing is still the number one way attackers get in. Not because people are careless but because the fake emails keep getting harder to spot.",
    action: "Report the email",
  },
  {
    level: "easy",
    title: "Public Wi-Fi Risk Detected",
    ip: "network: CoffeeShop_Free",
    detail: "You are connected to an open network with no encryption. Anyone else on this network can potentially read your unencrypted traffic. This includes forms, logins, and searches.",
    funFact: "Setting up a fake Wi-Fi hotspot with a convincing name takes about 5 minutes and $30 of hardware. Attackers do this in airports, cafes, and hotels routinely.",
    action: "Turn on your VPN",
  },
  {
    level: "easy",
    title: "Ransomware Knocked Out a School District",
    ip: "news: May 2026",
    detail: "In 2026, Instructure (the company behind Canvas) paid a ransom after hackers stole data on 275 million students and staff. The data included private messages. Paying did not stop the leak.",
    funFact: "Paying a ransom does not guarantee your data stays private. It just guarantees the attacker gets paid. The durable fix is encryption before the breach, not negotiation after.",
    action: "Learn about encryption",
  },
  {
    level: "easy",
    title: "Suspicious App Requesting Too Many Permissions",
    ip: "your phone",
    detail: "An app you installed last week is requesting access to your microphone, camera, contacts, and location. It is a flashlight app.",
    funFact: "App permissions are one of the most ignored security risks on phones. If a flashlight needs your contacts, something is wrong.",
    action: "Review app permissions",
  },
  // ── MEDIUM (a step up, but still clear) ──────────────────────
  {
    level: "medium",
    title: "Unauthorized Login Attempt via Credential Stuffing",
    ip: "185.220.101.34",
    detail: "847 failed login attempts in 3 minutes from a Tor exit node. The attacker is cycling through a leaked password list automatically. This is credential stuffing, not guessing.",
    funFact: "Credential stuffing attacks are fully automated. Attackers buy breach databases, feed them into a script, and let it run. One reused password is all it takes.",
    action: "Enable MFA now",
  },
  {
    level: "medium",
    title: "ARP Spoofing Detected on Your Network",
    ip: "10.0.0.1",
    detail: "Two devices are claiming to be the same gateway. One of them is lying. This is a classic man-in-the-middle setup where an attacker intercepts traffic between you and your router.",
    funFact: "ARP (Address Resolution Protocol) was designed in 1982 and has no authentication built in. It still works the same way today. Anyone on your local network can exploit it.",
    action: "Inspect your ARP table",
  },
  {
    level: "medium",
    title: "Outdated Software Flagged: jQuery 1.9.0",
    ip: "your browser",
    detail: "The site you just visited is running jQuery 1.9.0, which is vulnerable to CVE-2020-11022. This lets attackers inject and execute code through DOM manipulation. The fix has existed since 2020.",
    funFact: "Outdated JavaScript libraries are running on over 80% of websites. Most developers inherit old code and never audit it. The library that was safe when it shipped might not be safe today.",
    action: "Check your extensions",
  },
  {
    level: "medium",
    title: "Supply Chain Attack: Third-Party Token Compromised",
    ip: "OAuth token",
    detail: "In early 2026, attackers used compromised OAuth tokens from Drift to gain access to Salesforce environments at multiple companies. The breach started with a trusted third-party tool.",
    funFact: "Supply chain attacks have quadrupled in 5 years according to IBM. You can have perfect security and still get breached through a vendor you trust.",
    action: "Audit your OAuth apps",
  },
  {
    level: "medium",
    title: "XSS Payload Blocked in Query Parameter",
    ip: "203.0.113.99",
    detail: "A reflected XSS attempt was caught injecting a script tag into a URL parameter. The payload was trying to steal your session cookie using document.cookie and send it to a remote server.",
    funFact: "XSS has been on the OWASP Top 10 list since it was created in 2003. It keeps making the list because developers keep trusting user input without sanitizing it first.",
    action: "Check your CSP headers",
  },
  // ── ADVANCED (technical, the real stuff) ─────────────────────
  {
    level: "advanced",
    title: "DNS Tunneling Detected on Port 53",
    ip: "192.168.1.47",
    detail: "Unusually large DNS TXT record responses have been flagged. Data appears to be encoded in subdomains and exfiltrated through DNS queries. Firewalls do not block port 53. That is the point.",
    funFact: "DNS tunneling abuses the fact that almost every firewall lets DNS traffic through. Attackers encode stolen data in DNS queries and responses, turning a name-resolution protocol into a covert data channel.",
    action: "Run a DNS audit",
  },
  {
    level: "advanced",
    title: "Ransomware Group Targeting Telecoms: FCC Alert",
    ip: "network infrastructure",
    detail: "The FCC issued a 2026 alert after ransomware attacks on US telecoms quadrupled since 2021. Small-to-medium carriers are the primary targets because they have critical infrastructure but limited security teams.",
    funFact: "Ransomware groups are increasingly targeting infrastructure over consumer data because the pressure to restore services is higher, which means victims are more likely to pay.",
    action: "Read the FCC advisory",
  },
  {
    level: "advanced",
    title: "Zero-Day Exploited: CVE-2026-35273",
    ip: "Oracle systems",
    detail: "Oracle patched CVE-2026-35273 in June 2026 but has not confirmed whether it was exploited in the wild before the patch. ShinyHunters, a known threat actor group, is believed to be connected.",
    funFact: "A zero-day is a vulnerability that the vendor does not know about yet, or has not patched. Between discovery and patch, every system running that software is exposed with no defense available.",
    action: "Patch your Oracle systems",
  },
  {
    level: "advanced",
    title: "SAX Injection via SOAP Request Intercepted",
    ip: "localhost:8080",
    detail: "A malicious XML payload broke out of its intended tag structure to overwrite a user ID field in a SOAP request. Backend validated nothing. The attacker changed another user's password.",
    funFact: "XML injection attacks exploit applications that trust the structure of incoming data. If a server processes XML without strict parsing, an attacker can rewrite the request mid-flight. This is exactly what OWASP ZAP is built to catch.",
    action: "Validate your XML inputs",
  },
  {
    level: "advanced",
    title: "AI-Generated Phishing: Personalized at Scale",
    ip: "your inbox",
    detail: "A phishing campaign in 2026 used AI to generate emails personalized to each target using scraped LinkedIn data. The emails referenced real colleagues, recent projects, and accurate job titles. Detection rate: near zero.",
    funFact: "AI has made phishing cheaper, faster, and more convincing. The grammatical errors that used to give phishing away are gone. Security awareness training has not caught up yet.",
    action: "Verify before you click",
  },
];
