import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s · Cryshel Mae Abella",
    default: "Cryshel Mae Abella — Web2 Developer Intern",
  },
  description:
    "Internship portfolio of Cryshel Mae C. Abella, Web2 Developer Intern at Makerspace Innovhub, University of Eastern Pangasinan.",
  keywords: ["Next.js", "Flutter", "Firebase", "MediTrack", "Makerspace Innovhub", "UEP"],
  authors: [{ name: "Cryshel Mae C. Abella" }],
  openGraph: {
    siteName: "Cryshel Mae Abella",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
