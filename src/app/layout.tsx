import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://darpan-portfolio.vercel.app"),
  title: "Darpan Kanani | Java Full Stack Developer",
  description: "Darpan Kanani - Java Full Stack Developer specializing in modern web technologies. Expert in Java, Spring Boot, Redis, MySQL, React, Next.js, TypeScript, .NET, and cloud technologies. Building scalable applications with passion for clean code and user experience.",
  keywords: "Darpan Kanani, Java Full Stack Developer, Software Engineer, Java, Spring Boot, Redis, MySQL, React, Next.js, TypeScript, .NET, AWS, MongoDB, Modern Web Development, Portfolio",
  authors: [{ name: "Darpan Kanani" }],
  icons: '/favicon.ico',
  openGraph: {
    title: "Darpan Kanani | Java Full Stack Developer",
    description: "Java Full Stack Developer specializing in modern web technologies. Expert in Java, Spring Boot, Redis, MySQL, React, Next.js, TypeScript, .NET, and cloud technologies.",
    url: "https://darpan-portfolio.vercel.app/",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Darpan Kanani Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darpan Kanani | Java Full Stack Developer",
    description: "Java Full Stack Developer specializing in modern web technologies. Expert in Java, Spring Boot, Redis, MySQL, React, Next.js, TypeScript, .NET, and cloud technologies.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className="font-sans antialiased bg-background">
        <div className="min-h-screen animated-bg">
          <Navbar />
          <main className="relative z-10">{children}</main>
        </div>
        <GoogleAnalytics gaId="G-D0VPY295FJ" />
      </body>
    </html>
  );
}
