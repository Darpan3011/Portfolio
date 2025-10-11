import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://darpan-portfolio.vercel.app"),
  title: "Darpan Kanani | Full Stack Developer",
  description: "Darpan Kanani - Full Stack Developer specializing in modern web technologies. Expert in React, Next.js, TypeScript, Node.js, Spring Boot, .NET, and cloud technologies. Building scalable applications with passion for clean code and user experience.",
  keywords: "Darpan Kanani, Full Stack Developer, Software Engineer, React, Next.js, TypeScript, Node.js, Spring Boot, .NET, AWS, MongoDB, MySQL, Modern Web Development, Portfolio",
  authors: [{ name: "Darpan Kanani" }],
  icons: '/favicon.ico',
  openGraph: {
    title: "Darpan Kanani | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies. Expert in React, Next.js, TypeScript, Node.js, Spring Boot, .NET, and cloud technologies.",
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
    title: "Darpan Kanani | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies. Expert in React, Next.js, TypeScript, Node.js, Spring Boot, .NET, and cloud technologies.",
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
          <Navbar/>
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
