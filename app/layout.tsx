import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type Theme = "light" | "dark" | "system";

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="text-xl font-bold">Portfolio</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
            <ThemeToggle />
          </nav>
        </header>
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
