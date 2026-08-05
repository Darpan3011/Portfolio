import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darpan-portfolio.vercel.app"),
  title: "Darpan Kanani | Developer OS",
  description: "Darpan Kanani - Developer Operating System Portfolio. Java Full Stack Developer specializing in modern web technologies.",
  keywords: "Darpan Kanani, Developer OS, Software Engineer, Java, Spring Boot, React, Next.js, System Architecture",
  authors: [{ name: "Darpan Kanani" }],
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
        <GoogleAnalytics gaId="G-D0VPY295FJ" />
        <Analytics />
      </body>
    </html>
  );
}
