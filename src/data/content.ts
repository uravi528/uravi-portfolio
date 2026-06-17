// =============================================================
// THIS IS THE FILE YOU EDIT TO ADD/CHANGE CONTENT.
// No need to touch any component files for new projects or
// history entries — just add objects to the arrays below.
// =============================================================

export type Project = {
  id: string;
  title: string;
  category: string; // short tag shown on the card, e.g. "React · Supabase · Vercel"
  summary: string; // one line shown on the card itself
  blurb: string; // longer text shown in the modal when clicked
  status: "live" | "building";
  icon: string; // lucide-react icon name, see ProjectCard for the map
  link?: string; // optional external link (e.g. live site / github)
  accent: "cream" | "sage" | "dark" | "blue"; // card color theme
};

export const projects: Project[] = [
  {
    id: "hueman-gallery",
    title: "Hueman Story Gallery",
    category: "React · Supabase · Vercel",
    summary: "A private gallery for photography clients",
    blurb:
      "A private gallery for clients of my photography business — they log in, browse their photos, and pick favorites. Built so clients actually enjoy reviewing their shoot instead of digging through a Google Drive folder. Includes password-protected albums, progressive photo upload, a swipeable lightbox, and a public sneak-peek page for new visitors.",
    status: "live",
    icon: "Image",
    link: "https://hueman-gallery.vercel.app",
    accent: "cream",
  },
  {
    id: "nyikm-bot",
    title: "NYIKM Bot",
    category: "Telegram · Apps Script · Sheets",
    summary: "A tracker for spiritual progress",
    blurb:
      "A Telegram bot for my mandir's (temple's) youth group. It tracks sabha (assembly) attendance and spiritual progress over time, with a Google Sheets backend so the data stays easy to review and update.",
    status: "live",
    icon: "Bot",
    accent: "sage",
  },
  {
    id: "phishguard",
    title: "PhishGuard",
    category: "Phishing detection",
    summary: "Spotting phishing attempts before they land",
    blurb:
      "A tool focused on detecting phishing attempts — analyzing emails and links for the signals that give away a scam. Currently in active development as part of my offensive-security portfolio work.",
    status: "building",
    icon: "ShieldAlert",
    accent: "dark",
  },
  {
    id: "vuln-dashboard",
    title: "Web Vulnerability Scanner Dashboard",
    category: "Wapiti · Python",
    summary: "Turning scan output into something readable",
    blurb:
      "A dashboard that takes raw output from tools like Wapiti and turns it into a clean, readable summary — what was found, how severe it is, and what to do about it. Builds on hands-on scans I've already run (XSS findings, outdated libraries, missing security headers) and aims to make that kind of triage faster and less manual.",
    status: "building",
    icon: "ScanSearch",
    accent: "blue",
  },
  {
    id: "honeypot-logger",
    title: "Honeypot Logger",
    category: "Network security",
    summary: "Logging who knocks, and how",
    blurb:
      "A lightweight honeypot that logs connection attempts and basic attacker behavior — what ports get probed, what gets tried, how often. A hands-on way to see real scanning activity instead of just reading about it.",
    status: "building",
    icon: "Radar",
    accent: "dark",
  },
  {
    id: "packet-stories",
    title: "Packet Stories",
    category: "Wireshark · Python",
    summary: "Packet captures, explained in plain English",
    blurb:
      "Turning raw packet captures into plain-English writeups: what happened, how I found it, and what it means. Grew out of network forensics labs where I traced ARP spoofing, MITM attacks, and reconnaissance activity through Wireshark — formalizing that process into something shareable.",
    status: "building",
    icon: "Network",
    accent: "sage",
  },
];

export type HistoryEntry = {
  id: string;
  role: string;
  org: string;
  period: string;
  icon: string; // lucide-react icon name, see HistoryItem for the map
  blurb: string; // shown when expanded/clicked
};

export const history: HistoryEntry[] = [
  {
    id: "handshake",
    role: "AI Model Testing Intern",
    org: "Handshake AI",
    period: "2026",
    icon: "Bug",
    blurb:
      "I work across multiple AI evaluation projects — writing prompts and rubrics, reviewing model outputs across text, image, and audio, and specifically designing prompts meant to make models fail so we can find and fix the gaps. It's less 'using AI' and more stress-testing it: figuring out where it breaks so it gets safer and more reliable.",
  },
  {
    id: "av-intern",
    role: "Photographer Intern, A&V",
    org: "BAPS Mandir",
    period: "2023 — now",
    icon: "Camera",
    blurb:
      "Documenting large-scale events across the Northeast — conventions, assemblies, health lectures, and walkathons — with attention to storytelling, not just coverage. Working as part of a team to capture moments that actually communicate what happened.",
  },
  {
    id: "volunteer-coordinator",
    role: "Volunteer Coordinator",
    org: "BAPS Shri Swaminarayan Mandir",
    period: "2019 — now",
    icon: "Users",
    blurb:
      "Built community connections by networking with 90+ participants during weekly assemblies and events, managed communications for 300+ contacts, and recruited volunteers for nonprofit initiatives. This is also where most of my early technical builds came from — bots, trackers, and content systems made to solve real day-to-day problems.",
  },
  {
    id: "fireside-chat",
    role: "Video Editor, FireSide Chat",
    org: "myNetworkHer",
    period: "2023 — 2025",
    icon: "Video",
    blurb:
      "Edited 10+ podcast-style videos using Adobe Premiere Pro, turning raw Zoom recordings into polished content. Boosted viewership by 25% through creative editing choices, working alongside STEM advocates to help amplify stories supporting women in STEM.",
  },
  {
    id: "cybersecurity-degree",
    role: "BS Cybersecurity, in progress",
    org: "SUNY Canton",
    period: "2024 — 2027",
    icon: "ShieldCheck",
    blurb:
      "Junior-year standing, one year ahead of schedule. Coursework and labs have covered network forensics (Wireshark, ARP spoofing/MITM detection), web vulnerability scanning (Wapiti, OWASP ZAP), penetration testing fundamentals (Kali Linux, Nmap), and GRC/policy analysis. Working toward CompTIA Security+.",
  },
];

export const stats = [
  { value: "3.89", label: "GPA · President's Honor List" },
  { value: "2027", label: "Graduating one year early" },
];
