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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          />
        </noscript>
        <meta name="theme-color" content="#8B6471" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light" />
        <link rel="canonical" href="https://cryshel-abella.vercel.app" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="modulepreload" href="/_next/static/chunks/main.js" />
        <link rel="prefetch" href="/work" />
        <link rel="prefetch" href="/logs" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring and optimization
              window.addEventListener('load', () => {
                // Only run performance monitoring in production
                if (window.location.hostname !== 'localhost') {
                  setTimeout(() => {
                    if ('performance' in window && 'getEntriesByType' in performance) {
                      const navigation = performance.getEntriesByType('navigation')[0];
                      if (navigation) {
                        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
                        console.log('Page load time:', loadTime, 'ms');

                        // Report to analytics if available
                        if (typeof gtag !== 'undefined') {
                          gtag('event', 'page_load_time', {
                            value: Math.round(loadTime),
                            custom_map: { metric1: 'page_load_time' }
                          });
                        }
                      }
                    }
                  }, 0);
                }
              });

              // Optimize loading
              window.addEventListener('DOMContentLoaded', () => {
                // Preload critical resources
                const criticalImages = document.querySelectorAll('img[loading="eager"]');
                criticalImages.forEach(img => {
                  const link = document.createElement('link');
                  link.rel = 'preload';
                  link.as = 'image';
                  link.href = img.src;
                  document.head.appendChild(link);
                });
              });

              // Service worker registration with better error handling
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('SW registered');
                    })
                    .catch(error => {
                      console.log('SW registration failed');
                    });
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
