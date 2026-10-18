export const projects = [
  {
    "number": "02",
    "name": "NetForge",
    "discipline": "Systems engineering",
    "title": "A native engine for binary analysis.",
    "description": "A Rust CLI for composable byte transformations and binary triage: encoding, hashing, entropy, strings, PE inspection, and protocol framing.",
    "contribution": "Rewrote the original web tool as a native Rust CLI, with memory-mapped input, reusable buffers, property tests, and a fuzzing harness.",
    "stack": [
      "Rust",
      "Rayon",
      "Property testing"
    ],
    "href": "https://github.com/tijulkabir/netforge",
    "example": {
      "command": "netforge --input \"0x41, 0x42, 0x43\" from_hex",
      "output": "ABC"
    }
  },
  {
    "number": "03",
    "name": "rea-ctf",
    "discipline": "Reverse engineering",
    "title": "A toolkit for CTF reverse engineering.",
    "description": "A command-line workflow for inspection, decompilation, disassembly, string searches, and cross-references.",
    "contribution": "Built CTF workflows, Ghidra discovery, and pwntools/Z3 solver scaffolding around the upstream REA engine.",
    "stack": [
      "JavaScript",
      "Ghidra",
      "CLI design"
    ],
    "href": "https://github.com/tijulkabir/rea-ctf",
    "credit": "https://github.com/morluto/rea"
  },
  {
    "number": "04",
    "name": "FSociety Lab v2",
    "discipline": "Security education",
    "title": "A local lab for hands-on web security.",
    "description": "A local training application for reconnaissance, web exploitation, authentication testing, and traffic analysis.",
    "contribution": "Built the Node/Express training app with configurable scenarios, request logging, an integrated field manual, and Docker deployment.",
    "stack": [
      "Node.js",
      "Express",
      "SQLite",
      "Docker"
    ],
    "href": "https://github.com/tijulkabir/fsociety-lab-v2"
  }
];

// Retain the supplied 67th-place result in source until its event name is known; omit it from the public table.
export const competitionResults = [
  {
    "event": "EWU National Robofest 2026",
    "result": "16th nationally",
    "detail": "Represented PUST’s first-ever onsite national CTF team."
  },
  {
    "event": "Integrated Hawkers Initial CTF 2026",
    "result": "35th place",
    "detail": "1,057 points.",
    "recordPage": 5
  },
  {
    "event": "National CTF · PUST_Intruders",
    "result": "67th nationally",
    "detail": "1,186 points.",
    "eventNameVerified": false
  },
  {
    "event": "DIU Cyber Security Club National CTF",
    "result": "78th place",
    "detail": "620 points with Persistent Undergrad Security Team."
  },
  {
    "event": "CUET StealthFlags 2025",
    "result": "82nd nationally",
    "detail": "1,550 points with PUST_Intruders at Televerse 1.0."
  },
  {
    "event": "BDSec CTF 2026",
    "result": "129 / 545 teams",
    "detail": "Global result with Mayer_Doa Inc; reverse-engineering contributions, with all submitted RE solutions accepted.",
    "recordPage": 4
  },
  {
    "event": "BDSec CTF 2025",
    "result": "Participation",
    "detail": "Competed with PUST Intruders.",
    "recordPage": 3
  },
  {
    "event": "Meta Hacker Cup 2025",
    "result": "Round 1 qualifier",
    "detail": "International algorithmic programming competition.",
    "recordPage": 8
  }
];

export const engineeringDecisions = [
  {
    "title": "Delivery beyond a single connection.",
    "text": "Echo caches messages for reconnecting peers and compresses media to work within BLE’s bandwidth constraints. The application and direct-message layers build on upstream BLE transport.",
    "evidence": "Echo · intermittent connectivity",
    "href": "https://github.com/tijulkabir/echo"
  },
  {
    "title": "Reuse buffers between transformations.",
    "text": "NetForge memory-maps file input and alternates reusable pipeline buffers, limiting copying and repeated allocation when operations are chained.",
    "evidence": "NetForge · pipeline design",
    "href": "https://github.com/tijulkabir/netforge/blob/main/src/pipeline.rs"
  },
  {
    "title": "Keep investigation steps repeatable.",
    "text": "rea-ctf groups decompilation, disassembly, cross-references, and solver templates into a CLI workflow built around the upstream REA engine.",
    "evidence": "rea-ctf · analysis workflow",
    "href": "https://github.com/tijulkabir/rea-ctf"
  }
];
