import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s · C. Abella",
    default: "Cryshel Mae Abella — Web2 Developer Intern",
  },
  description:
    "Internship portfolio of Cryshel Mae C. Abella, Web2 Developer Intern at Makerspace Innovhub, University of Eastern Pangasinan. Building polished web experiences with Next.js, Flutter, and Firebase.",
  keywords: ["Next.js", "Flutter", "Firebase", "MediTrack", "Makerspace Innovhub", "UEP", "Web Development", "Mobile Development", "Portfolio"],
  authors: [{ name: "Cryshel Mae C. Abella" }],
  creator: "Cryshel Mae C. Abella",
  publisher: "Cryshel Mae C. Abella",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cryshel-abella.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Cryshel Mae Abella — Web2 Developer Intern",
    description: "Internship portfolio showcasing web and mobile development projects at Makerspace Innovhub.",
    url: "https://cryshel-abella.vercel.app",
    siteName: "Cryshel Mae Abella Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Cryshel Mae C. Abella",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cryshel Mae Abella — Web2 Developer Intern",
    description: "Internship portfolio showcasing web and mobile development projects at Makerspace Innovhub.",
    images: ["/profile.jpg"],
    creator: "@cryshelabella",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/profile.jpg" type="image/jpeg" sizes="32x32" />
        <link rel="apple-touch-icon" href="/profile.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B6471" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light" />
        <link rel="canonical" href="https://cryshel-abella.vercel.app" />
        <meta name="format-detection" content="telephone=no" />
        <Script id="sw-registration" strategy="afterInteractive">
          {`if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js').catch(() => {}); }`}
        </Script>
      </head>
      <body className={`${cormorant.variable} ${dmSans.variable} min-h-screen flex flex-col`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-mauve text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        <Nav />
        <ErrorBoundary>
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  );
}
