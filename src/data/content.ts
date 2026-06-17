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

export const securityAlerts = [
  {
    title: "Suspicious DNS Query Detected",
    ip: "192.168.1.47",
    detail: "Your device attempted to resolve a domain flagged for C2 communication. Outbound traffic on port 443 has been logged.",
    funFact: "DNS-based attacks are used in over 91% of malware campaigns. Attackers love DNS because most firewalls leave it wide open.",
    action: "Run a DNS audit",
  },
  {
    title: "ARP Spoofing Attempt Detected",
    ip: "10.0.0.1",
    detail: "A duplicate IP address has been detected on your local network. Two MAC addresses are claiming the same gateway. Classic man-in-the-middle setup.",
    funFact: "ARP has no authentication. It was designed in 1982 when the internet was a friendly place. It still works exactly the same way.",
    action: "Inspect your ARP table",
  },
  {
    title: "Unauthorized Login Attempt",
    ip: "185.220.101.34",
    detail: "SSH brute force detected on port 22. 847 failed attempts in the last 3 minutes from a Tor exit node. Credential stuffing in progress.",
    funFact: "The most common SSH password tried by attackers is still 'root'. The second most common is '123456'.",
    action: "Disable password auth",
  },
  {
    title: "Outdated jQuery Detected",
    ip: "your browser",
    detail: "jQuery 1.9.0 is running on a site you just visited. It is vulnerable to CVE-2020-11022, allowing untrusted code execution through DOM manipulation.",
    funFact: "Outdated JavaScript libraries are found on over 80% of websites. Most developers don't know they're running them.",
    action: "Check your extensions",
  },
  {
    title: "XSS Payload Intercepted",
    ip: "203.0.113.99",
    detail: "A reflected cross-site scripting attempt was blocked in a query parameter. The payload tried to steal your session cookie via document.cookie.",
    funFact: "XSS is consistently in the OWASP Top 10 and has been since the list started in 2003. It is still one of the most underestimated vulnerabilities.",
    action: "Check your CSP headers",
  },
];
