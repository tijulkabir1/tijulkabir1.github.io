import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";

// Social artwork is generated locally so the deployed site stays fully static.
const artwork = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#101010"/>
<rect x="835" width="365" height="630" fill="#1a1a1a"/>
<path d="M65 112h700M65 541h700" stroke="#383835"/>
<rect x="65" y="47" width="45" height="45" rx="2" fill="#30291f"/>
<text x="71" y="79" font-family="Consolas,monospace" font-size="25" letter-spacing="-2" fill="#f5f6f2">tk.</text>
<text x="129" y="75" font-family="Arial,sans-serif" font-size="19" fill="#edece8">Tijul Kabir Toha</text>
<text x="65" y="178" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" fill="#d8af73">STUDENT · BUILDER · CTF PLAYER</text>
<text x="60" y="283" font-family="Arial,sans-serif" font-size="65" letter-spacing="-2" fill="#edece8" font-weight="700">Tijul Kabir</text>
<text x="60" y="357" font-family="Arial,sans-serif" font-size="65" letter-spacing="-2" font-weight="700" fill="#d8af73">Toha.</text>
<text x="65" y="426" font-family="Arial,sans-serif" font-size="17" fill="#b6b3aa">CSE at PUST. Open-source tools. National hackathons &amp; CTFs.</text>
<text x="65" y="583" font-family="Arial,sans-serif" font-size="16" fill="#edece8">tijulkabir.me</text>
<text x="632" y="583" font-family="Arial,sans-serif" font-size="12" fill="#b6b3aa">PABNA, BANGLADESH</text>
<text x="881" y="100" font-family="Consolas,monospace" font-size="43" fill="#eae9dc">tk.</text>
<path d="M882 131h269M882 297h269M882 413h269" stroke="#49453d"/>
<text x="882" y="189" font-family="Arial,sans-serif" font-size="12" fill="#d8af73">EDUCATION</text>
<text x="882" y="225" font-family="Arial,sans-serif" font-size="24" fill="#f5f6f2">Computer Science</text>
<text x="882" y="258" font-family="Arial,sans-serif" font-size="24" fill="#f5f6f2">&amp; Engineering</text>
<text x="882" y="342" font-family="Arial,sans-serif" font-size="12" fill="#d8af73">UNIVERSITY</text>
<text x="882" y="379" font-family="Arial,sans-serif" font-size="20" fill="#f5f6f2">PUST · Year 2, Semester 2</text>
<text x="882" y="460" font-family="Arial,sans-serif" font-size="12" fill="#d8af73">LEADERSHIP</text>
<text x="882" y="497" font-family="Arial,sans-serif" font-size="19" fill="#f5f6f2">Team Lead, PUST_Intruders</text>
</svg>`;
await writeFile("public/og-image.svg", artwork);
await sharp(Buffer.from(artwork)).png().toFile("public/og-image.png");
const icon = await readFile("app/icon.svg");
await sharp(icon).resize(180, 180).png().toFile("app/apple-icon.png");
console.log("Generated social card and Apple icon.");
