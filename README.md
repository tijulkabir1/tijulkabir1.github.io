# Tijul Kabir Toha — Portfolio

A personal portfolio for a CSE undergraduate at PUST (Year 2, Semester 2): selected engineering projects, national hackathons, CTF leadership, ongoing practice, and a searchable credential library.

The visual direction pairs a dark charcoal background and clear typography with warm amber accents and neutral charcoal panels, monospace labels, and a subtle technical texture. The copy keeps a student-builder voice. The header uses the owner’s supplied portrait, presented with a CSS crop; the original photo is preserved as `public/tijul-kabir.jpeg`.

## Run locally

```sh
npm ci
npm run dev
```

For the deployable static build:

```sh
npm run build
npm run preview
```

The production preview runs at `http://127.0.0.1:4173`. Set `PORT` to use another port. `npm start` also serves the built `out/` directory. Stop the preview with Ctrl+C.

## Maintain the content

- `app/page.js`: introduction, Echo case study, hackathon highlights, education, platform snapshot, and contact.
- `app/data/profile.js`: secondary projects, recorded CLI output, competition records, and concrete engineering decisions.
- `app/data/certificates.json`: credential title, issuer, date, type, category, original PDF page, preview, and verification link when provided.
- `public/certificates/`: optimized WebP previews and the unchanged original PDF collection.
- `app/components/CertificateGallery.js`: three selected credentials, a collapsed archive of the remaining 16, category filters, search, six-at-a-time archive browsing, and accessible document previews.
- `app/components/Navbar.js`: responsive navigation with keyboard dismissal.
- `app/globals.css` and `app/components/CertificateGallery.module.css`: visual system and responsive styles.
- `app/layout.js`: self-hosted Inter font, metadata, canonical URL, and structured profile data.

Main content is static HTML. Search, document previews, navigation, and email copying hydrate in the browser. Certificate images load lazily; the 13.4 MB original PDF is requested only when a visitor opens or downloads it. Native dialogs support document versions, Escape, focus return, and body-scroll restoration. Reduced-motion preferences disable transitions and smooth scrolling.

## Content and source notes

The featured projects are Echo, NetForge, rea-ctf, and FSociety Lab v2. NetForge’s displayed hex-normalisation example was executed from the repository source and returned `ABC`. Echo links to its published Android release; its repository currently has no app screenshots, so the portfolio retains an architecture diagram. Project contribution summaries separate application work from upstream components. Echo credits the upstream bitchat-android BLE transport; rea-ctf credits the upstream REA engine. NetForge is described as a native Rust CLI.

The July Hackathon result follows the owner’s clarification: Echo placed first in engineering score and fourth overall. The PSTU Top 50 finalist and national CTF results follow the supplied activity records. Platform figures are snapshots: TryHackMe top 1%, capability score 72, highest streak 452 days, and Sapphire league; Codeforces 300+ problems solved; CodeChef 2 stars. They are not live feeds.

The collection contains 19 distinct credentials from 20 PDF pages. Meta Hacker Cup pages 7 and 8 show conflicting Round 1 ranks; both versions remain accessible without choosing one rank. PSTU’s logo and certificate body disagree on the year; the body year is used with a source note. The GeeksforGeeks bootcamp is undated. Certifications, course completions, competition achievements, and participation documents retain their individual types.

An unnamed 67th-place CTF result remains in source but is excluded from the public table until the event is identified. Original certificate links are added where supplied; PSTU’s participation document is labelled as participation evidence.

The source snapshot before this overhaul was backed up outside the repository. Existing credential files and source notes were preserved.

## Branding

```sh
npm run brand
```

Regenerates the static social preview image and portrait icons from `public/tijul-kabir.jpeg`. Outputs include an embedded-photo SVG, a 16/32/48/64px favicon, and the 180px Apple icon. The source portrait is unchanged.

## Deployment

Next.js exports to `out/`. The existing GitHub Pages workflow builds and deploys that directory on pushes to `main`. `public/CNAME` retains `tijulkabir.me`. This overhaul is local; it has not been committed, pushed, or deployed.

The preview server binds to loopback and requires no external service. No contact form backend or server API is required.

## Validation

The production export passes. Desktop and phone layouts were visually reviewed. Browser checks cover category filters, search, empty results, multiple document versions, keyboard dismissal, focus return, and body-scroll restoration. The credential assets and exported metadata are checked locally before handoff.
