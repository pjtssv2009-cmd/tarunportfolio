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
  metadataBase: new URL("https://tarun-amber.vercel.app"),
  title: "Tarun A | UI/UX & Product Designer | Chennai, India",
  description:
    "Tarun A is a UI/UX and Product Designer based in Chennai, India, specializing in web and mobile products, UX research, interaction design, Figma design systems, prototyping, and digital experiences.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Digital Product Designer",
    "Mobile App Designer",
    "Web Designer",
    "Figma Designer",
    "UX Research",
    "Interaction Design",
    "Design Systems",
    "SaaS Product Designer",
    "Chennai UI/UX Designer",
    "Product Designer India"
  ],
  authors: [{ name: "Tarun A", url: "https://www.behance.net/tarun_a" }],
  creator: "Tarun A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarun-amber.vercel.app",
    siteName: "Tarun A — UI/UX & Product Designer Portfolio",
    title: "Tarun A | UI/UX & Product Designer | Chennai, India",
    description:
      "Tarun A is a UI/UX and Product Designer based in Chennai, India, specializing in web and mobile products, UX research, interaction design, Figma design systems, prototyping, and digital experiences.",
    images: [
      {
        url: "/images/tarun/portrait.png",
        width: 1200,
        height: 630,
        alt: "Tarun A, UI/UX and Product Designer based in Chennai, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun A | UI/UX & Product Designer | Chennai, India",
    description:
      "Designing intuitive digital products that solve real user and business problems. UI/UX & Product Designer based in Chennai, India.",
    images: ["/images/tarun/portrait.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
    jobTitle: "UI/UX & Product Designer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "India",
    },
    email: "tarunoffic@gmail.com",
    telephone: "+918248936098",
    url: "https://tarun-amber.vercel.app",
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
