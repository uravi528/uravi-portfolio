// =============================================================
// EDIT THIS FILE to update any content on the site.
// Add projects, history entries, skills, or reading shelf items
// here and the site updates automatically on next deploy.
// =============================================================

export type TerminalLine = {
  text: string;
  type?: "cmd" | "ok" | "warn" | "info"; // cmd = typed command, ok/warn = status, info = muted note
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  blurb: string;
  why: string;
  process: string;
  results: string;
  resultsBullets?: string[]; // optional structured version of results, takes priority over `results` on the detail page
  pullQuote?: string; // optional bold callout line shown in the "why" section
  terminalLines: TerminalLine[]; // powers the animated "how it came together" log
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
    year: "2025–2026",
    title: "Hueman Story Gallery",
    category: "React · Supabase · Vercel",
    summary: "A private gallery for photography clients",
    blurb:
      "A private gallery for clients of my photography business. They log in, browse their photos, and pick favorites without ever touching a Google Drive folder.",
    why:
      "I built this because I realized I could deploy something real for free myself. To be in a tech world and not use tech to make your own life easier is honestly a loss. Hueman Story is something I care about, so I wanted to give it something that felt professional and intentional, not just a shared link.",
    process:
      "Built with React, Supabase for the backend and auth, and deployed on Vercel. I designed password-protected albums, a swipeable lightbox for browsing, progressive photo upload, and a public showcase page for new visitors. The whole thing cost $0 to run.",
    results:
      "Live and in active use by real Hueman Story clients. Every shoot now gets its own private, password-protected gallery instead of a shared Drive folder, and the public showcase page has become the first thing new clients see when they check out the business.",
    terminalLines: [
      { text: "npx create-react-app hueman-gallery", type: "cmd" },
      { text: "supabase init && supabase start", type: "cmd" },
      { text: "auth configured, storage buckets live", type: "ok" },
      { text: "building password-protected albums...", type: "cmd" },
      { text: "lightbox + progressive upload wired", type: "ok" },
      { text: "vercel --prod", type: "cmd" },
      { text: "deployed — $0/mo", type: "ok" },
    ],
    status: "live",
    icon: "Image",
    link: "https://hueman-gallery.vercel.app/showcase",
    instagram: "https://instagram.com/hueman.story",
    accent: "cream",
    imagePlaceholder: "#E8DDD0",
  },
  {
    id: "nyikm-bot",
    year: "2024–2026",
    title: "NYIKM Bot",
    category: "Telegram · Apps Script · Google Sheets",
    summary: "A personal spiritual progress tracker for a youth group",
    blurb:
      "A Telegram bot for my mandir's youth group that tracks sabha (assembly) attendance and spiritual progress. Each member has their own personal tracker they can check anytime.",
    why:
      "We had spreadsheets. So many spreadsheets. Going into each one to find someone's attendance or progress took forever, and honestly things got lost. I wanted something faster, more efficient, and actually friendly to use. Not everyone is comfortable with spreadsheets, but everyone is on Telegram.",
    pullQuote: "Bots are the new spreadsheet.",
    process:
      "Built entirely in Google Apps Script with a Google Sheets backend, connected to the Telegram Bot API. The bot responds to commands like /attendance, /goals, and /status. Each member gets their own row in the sheet that updates in real time. I also added admin commands so coordinators can log entries without opening the sheet at all. I was genuinely figuring things out as I built it, the Telegram API docs became my best friend.",
    results:
      "In daily use by my mandir's Kishori/Yuvati Mandal.",
    resultsBullets: [
      "Efficiency — coordinators find anyone's attendance or progress in seconds instead of digging through shared spreadsheets.",
      "Integrity — one row per member, one source of truth, instead of duplicate sheets quietly drifting out of sync.",
      "Real-time updates — every /attendance or /status check reflects the moment it happened, not last week's copy.",
      "Adoption — friendlier than a spreadsheet, so members who'd never open Sheets actually check their own progress.",
    ],
    terminalLines: [
      { text: "clasp create --type standalone", type: "cmd" },
      { text: "connecting Telegram Bot API...", type: "cmd" },
      { text: "webhook registered", type: "ok" },
      { text: "wiring Google Sheets backend...", type: "cmd" },
      { text: "column mapping broke on rewrite", type: "warn" },
      { text: "rebuilt row sync, per-member tracking live", type: "ok" },
      { text: "admin commands added for coordinators", type: "ok" },
    ],
    status: "live",
    icon: "Bot",
    accent: "sage",
    imagePlaceholder: "#C5D4B8",
  },
  {
    id: "phishguard",
    year: "2026",
    title: "PhishGuard",
    category: "Python · NLP · Security",
    summary: "Catching phishing attempts before they land",
    blurb:
      "A tool that analyzes emails and URLs for the signals that give away a phishing attempt, before anyone clicks anything they shouldn't.",
    why:
      "Phishing is still the most common way attacks succeed, not because people are careless but because the attempts keep getting smarter. I wanted to build something that actually explains why something looks suspicious, not just flag it.",
    process:
      "Currently in active development. Using Python with NLP techniques to analyze email headers, sender reputation, link structure, and language patterns. The goal is a clean output that non-technical people can actually read and act on.",
    results:
      "Currently at v4: IP geolocation, ASN lookup, and signature-based matching are working, with an optional Claude API fallback for ambiguous cases. Next milestone is a cleaner report output for non-technical users.",
    terminalLines: [
      { text: "python analyze.py suspicious_email.eml", type: "cmd" },
      { text: "parsing headers + sender reputation...", type: "cmd" },
      { text: "scanning link structure and language patterns...", type: "cmd" },
      { text: "3 phishing signals flagged", type: "warn" },
      { text: "v4: added ASN lookup + Claude fallback", type: "ok" },
      { text: "next: cleaner report output", type: "info" },
    ],
    status: "building",
    icon: "ShieldAlert",
    accent: "dark",
    imagePlaceholder: "#2A2A2A",
  },
  {
    id: "vuln-dashboard",
    year: "2026",
    title: "Web Vulnerability Scanner Dashboard",
    category: "Wapiti · Python · React",
    summary: "Turning scan output into something readable",
    blurb:
      "A dashboard that takes raw Wapiti scan output and turns it into a clean summary: what was found, how bad it is, and what to do about it.",
    why:
      "I ran real scans on real sites as part of coursework and the raw output is dense. I wanted something that makes triage faster and actually communicates risk clearly, not just a wall of text.",
    process:
      "Builds on hands-on scans I have already run, including XSS findings, outdated jQuery libraries, and missing security headers. Python parses the Wapiti HTML report, a React frontend displays findings sorted by severity. In progress.",
    results:
      "Real scan data is already flowing through the parser, sorted by severity. Still finishing the frontend so findings read clearly for someone triaging risk, not just someone who already knows what a CVE is.",
    terminalLines: [
      { text: "wapiti -u target --format html", type: "cmd" },
      { text: "parsing scan output...", type: "cmd" },
      { text: "found: reflected XSS, outdated jQuery 1.9.0", type: "warn" },
      { text: "missing security headers detected", type: "warn" },
      { text: "sorting findings by severity...", type: "cmd" },
      { text: "frontend triage view — in progress", type: "info" },
    ],
    status: "building",
    icon: "ScanSearch",
    accent: "blue",
    imagePlaceholder: "#C0CFEA",
  },
  {
    id: "honeypot-logger",
    year: "2025",
    title: "Honeypot Logger",
    category: "Python · Networking",
    summary: "Logging who knocks, and how",
    blurb:
      "A lightweight honeypot that logs connection attempts and basic attacker behavior: what ports get probed, what credentials get tried, how often.",
    why:
      "Reading about attackers in textbooks is one thing. Watching real scanning activity hit a system you set up yourself is another. I learn better by seeing it happen.",
    process:
      "Python-based listener on common ports, logging all interaction to a structured file. Next step is a simple dashboard to visualize the traffic patterns over time.",
    results:
      "The listener is capturing real connection attempts across common ports right now. Next step is turning that structured log into a dashboard so patterns over time are visible at a glance, not buried in a text file.",
    terminalLines: [
      { text: "python listener.py --ports common", type: "cmd" },
      { text: "listening on 22, 23, 80, 443, 3389...", type: "cmd" },
      { text: "connection attempt logged", type: "ok" },
      { text: "credential probe logged", type: "ok" },
      { text: "writing to structured log file...", type: "cmd" },
      { text: "next: traffic pattern dashboard", type: "info" },
    ],
    status: "building",
    icon: "Radar",
    accent: "dark",
    imagePlaceholder: "#1A1A1A",
  },
  {
    id: "packet-stories",
    year: "2025",
    title: "Packet Stories",
    category: "Wireshark · Python · Writing",
    summary: "Packet captures explained in plain English",
    blurb:
      "Turning raw packet captures into plain-English writeups: what happened, how I found it, and what it actually means for the people involved.",
    why:
      "Security findings are only useful if someone can understand them. I traced ARP spoofing, MITM attacks, and ICS traffic in lab work and realized the most interesting part was explaining it, not just finding it.",
    process:
      "Growing out of network forensics labs using Wireshark. I analyzed real PCAP files covering SSH reconnaissance, ARP poisoning, and industrial control protocol traffic. Now formalizing that into structured writeups with annotated screenshots.",
    results:
      "Several real PCAP traces are already analyzed and written up in plain language, including ARP poisoning and SSH recon. Turning those into a consistent, annotated format is the current focus.",
    terminalLines: [
      { text: "wireshark -k -i eth0", type: "cmd" },
      { text: "capturing live traffic...", type: "cmd" },
      { text: "ARP poisoning pattern detected", type: "warn" },
      { text: "SSH reconnaissance traced", type: "warn" },
      { text: "annotating pcap with findings...", type: "cmd" },
      { text: "writing up in plain English", type: "ok" },
    ],
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

