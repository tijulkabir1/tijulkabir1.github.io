import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const title = "Tijul Kabir Toha | Security & Systems Engineering";
const description =
  "Tijul Kabir Toha, CSE undergraduate at PUST. Selected work in security, reverse engineering, and system design, with national hackathon results and CTF leadership.";
const profiles = [
  "https://github.com/tijulkabir",
  "https://linkedin.com/in/tijulkabir1",
  "https://youtube.com/@bytefroster",
  "https://tryhackme.com/p/tijulkabir",
  "https://codeforces.com/profile/tijulkabir1",
  "https://www.codechef.com/users/tijulkabir",
];
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://tijulkabir.me/#website",
      url: "https://tijulkabir.me",
      name: title,
      description,
      inLanguage: "en",
      publisher: { "@id": "https://tijulkabir.me/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://tijulkabir.me/#person",
      name: "Tijul Kabir Toha",
      alternateName: "Froster",
      url: "https://tijulkabir.me",
      description,
      sameAs: profiles,
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Pabna University of Science & Technology",
      },
      knowsAbout: [
        "Cybersecurity",
        "Capture The Flag",
        "Software Engineering",
        "System Design",
        "Reverse Engineering",
        "Competitive Programming",
      ],
      nationality: { "@type": "Country", name: "Bangladesh" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://tijulkabir.me/#profile",
      url: "https://tijulkabir.me",
      name: title,
      mainEntity: { "@id": "https://tijulkabir.me/#person" },
      dateModified: "2026-10-19",
      inLanguage: "en",
    },
  ],
};
export const metadata = {
  metadataBase: new URL("https://tijulkabir.me"),
  title,
  description,
  applicationName: "Tijul Kabir — Portfolio",
  authors: [{ name: "Tijul Kabir Toha", url: "https://tijulkabir.me" }],
  keywords: [
    "Tijul Kabir Toha",
    "Froster",
    "cybersecurity portfolio",
    "CTF",
    "security researcher",
    "PUST",
    "Bangladesh",
    "NetForge",
  ],
  alternates: { canonical: "https://tijulkabir.me" },
  manifest: "/manifest.json",
  openGraph: {
    title,
    description,
    url: "https://tijulkabir.me",
    siteName: "Tijul Kabir Toha",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tijul Kabir Toha — Student, Builder & CTF Player.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  formatDetection: { telephone: false, address: false },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
