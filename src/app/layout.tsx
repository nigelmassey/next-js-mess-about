import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Personal Website",
  description: "Professional portfolio showcasing projects and skills",
  keywords: "portfolio, developer, designer, web development",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio - Personal Website",
    description: "Professional portfolio showcasing projects and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <footer className="bg-muted py-8 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
