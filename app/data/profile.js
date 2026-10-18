export const projects = [
  { number: "02", name: "NetForge", discipline: "Systems engineering", title: "A native engine for binary analysis.", description: "A Rust CLI for composable byte transformations and binary triage: encoding, hashing, entropy, strings, PE inspection, and protocol framing.", detail: "Memory-mapped input, reusable buffers, parallel analysis, property-based tests, and a fuzzing harness.", stack: ["Rust", "Rayon", "Property testing"], href: "https://github.com/tijulkabir/netforge" },
  { number: "03", name: "rea-ctf", discipline: "Reverse engineering", title: "A toolkit for CTF reverse engineering.", description: "A dedicated command-line workflow for inspection, decompilation, disassembly, string searches, and cross-references.", detail: "Ghidra discovery and pwntools/Z3 solver templates, extending the upstream REA analysis engine.", stack: ["JavaScript", "Ghidra", "CLI design"], href: "https://github.com/tijulkabir/rea-ctf", credit: "https://github.com/morluto/rea" },
  { number: "04", name: "FSociety Lab v2", discipline: "Security education", title: "A local lab for hands-on web security.", description: "A local training application for reconnaissance, web exploitation, authentication testing, and traffic analysis.", detail: "Configurable scenarios, request logging, an integrated field manual, and a containerised local deployment.", stack: ["Node.js", "Express", "SQLite", "Docker"], href: "https://github.com/tijulkabir/fsociety-lab-v2" },
];

export const competitionResults = [
  { event: "EWU National Robofest 2026", result: "16th nationally", detail: "Represented PUST’s first-ever onsite national CTF team." },
  { event: "Integrated Hawkers Initial CTF 2026", result: "35th place", detail: "1,057 points." },
  { event: "National CTF · PUST_Intruders", result: "67th nationally", detail: "1,186 points." },
  { event: "DIU Cyber Security Club National CTF", result: "78th place", detail: "620 points with Persistent Undergrad Security Team." },
  { event: "CUET StealthFlags 2025", result: "82nd nationally", detail: "1,550 points with PUST_Intruders at Televerse 1.0." },
  { event: "BDSec CTF 2026", result: "129 / 545 teams", detail: "Global result with Mayer_Doa Inc; reverse-engineering contributions, with all submitted RE solutions accepted." },
  { event: "BDSec CTF 2025", result: "Participation", detail: "Competed with PUST Intruders." },
  { event: "Meta Hacker Cup 2025", result: "Round 1 qualifier", detail: "International algorithmic programming competition." },
];

export const approaches = [
  { title: "Start with the system.", text: "Understand the requirements, boundaries, and failure modes before choosing an implementation.", evidence: "Architecture & system design" },
  { title: "Design for constraints.", text: "Account for unreliable connectivity, resource limits, and data handling alongside the main functionality.", evidence: "Offline communication & Rust tooling" },
  { title: "Investigate the details.", text: "Use reverse engineering and practical security analysis to understand behaviour beneath the interface.", evidence: "Binary analysis & national CTFs" },
  { title: "Make work reproducible.", text: "Keep code, testing, and technical notes close to the decisions they support.", evidence: "Property tests, CI & published writeups" },
];
