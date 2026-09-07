import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorProvider } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tarunportfolio.com"),
  title: "Tarun A — UI/UX Designer",
  description:
    "Tarun A is a UI/UX Designer based in Chennai, India, creating user-centric digital experiences, interfaces and products.",
  keywords: [
    "Tarun A",
    "UI/UX Designer",
    "Product Designer",
    "Chennai Designer",
    "UX Case Studies",
    "Ride Dude UX",
    "FitPeo",
    "IRCTC Redesign",
    "Aprender",
    "Figma",
    "Design Systems",
    "Interaction Design"
  ],
  authors: [{ name: "Tarun A", url: "https://www.behance.net/tarun_a" }],
  creator: "Tarun A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarunportfolio.com",
    siteName: "Tarun A Portfolio",
    title: "Tarun A — UI/UX Designer",
    description:
      "Tarun A is a UI/UX Designer based in Chennai, India, creating user-centric digital experiences, interfaces and products.",
    images: [
      {
        url: "/images/tarun/portrait.png",
        width: 1200,
        height: 630,
        alt: "Tarun A — UI/UX Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun A — UI/UX Designer",
    description:
      "Designing digital experiences that make complexity feel simple. UI/UX Designer based in Chennai, India.",
    images: ["/images/tarun/portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tarun A",
    jobTitle: "UI/UX Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    email: "tarunoffic@gmail.com",
    telephone: "+918248936098",
    url: "https://www.behance.net/tarun_a",
    sameAs: [
      "https://www.linkedin.com/in/tarun-a-in/",
      "https://www.behance.net/tarun_a"
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F8F7F4] text-[#111111] selection:bg-accent selection:text-white">
        <CursorProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}
