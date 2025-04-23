import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://darpan-portfolio.vercel.app"),
  title: "Darpan Kanani | Software Engineer",
  description: "Darpan Kanani - Software Engineer skilled in .NET, Angular, React, Next.js, TypeScript, Node.js, Express.js, Spring Boot, AWS, MongoDB, MySQL, C#, Java, and Tailwind CSS. Explore my portfolio and projects.",
  keywords: "Darpan Kanani, Software Engineer, Full Stack Developer, .NET, Angular, React, Next.js, TypeScript, Node.js, Express.js, Spring Boot, AWS, MongoDB, MySQL, C#, Java, Tailwind CSS, Portfolio",
  authors: [{ name: "Darpan Kanani" }],
  icons: '/favicon.ico',
  openGraph: {
    title: "Darpan Kanani | Software Engineer",
    description: "Darpan Kanani - Software Engineer skilled in .NET, Angular, React, Next.js, TypeScript, Node.js, Express.js, Spring Boot, AWS, MongoDB, MySQL, C#, Java, and Tailwind CSS. Explore my portfolio and projects.",
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
    description: "Explore my portfolio showcasing skills in .NET, Angular, React, Next.js, TypeScript, Node.js, Express.js, Spring Boot, AWS, MongoDB, MySQL, C#, Java, and Tailwind CSS.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className}`}>
      <body>
        <Navbar/>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
