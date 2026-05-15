import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ErrorBoundary } from "@/components/ErrorBoundary";

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
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#8B6471" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light" />
        <link rel="canonical" href="https://cryshel-abella.vercel.app" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: 'DM Sans', system-ui, sans-serif; line-height: 1.7; background: radial-gradient(circle at top left, #fffaf7 0%, #f7efe8 45%, #f4ebe6 100%); color: #2C2220; }
            .hero-section { padding: 3rem 0; }
            .hero-title { font-size: 2.5rem; font-family: 'Cormorant Garamond', serif; margin: 0 0 1rem; }
            .hero-desc { font-size: 1.125rem; color: #5A4A47; max-width: 40rem; }
            .btn-primary { background: #8B6471; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; display: inline-block; }
            .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
          `
        }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              window.addEventListener('load', () => {
                if ('performance' in window && 'getEntriesByType' in performance) {
                  const navigation = performance.getEntriesByType('navigation')[0];
                  if (navigation) {
                    // Log performance metrics for debugging
                    console.log('Page load time:', navigation.loadEventEnd - navigation.fetchStart, 'ms');
                  }
                }
              });

              // Defer non-critical scripts
              window.addEventListener('DOMContentLoaded', () => {
                // Lazy load non-critical components
                const lazyElements = document.querySelectorAll('[data-lazy]');
                lazyElements.forEach(el => {
                  el.classList.remove('hidden');
                });
              });

              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
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
