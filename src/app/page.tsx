"use client";
import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const SectionDivider = () => (
  <div className="section-divider" />
);

export default function Home() {

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetSection = targetId ? document.getElementById(targetId) : null;
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll<HTMLAnchorElement>(".nav-link").forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  
  return (
    <div className="relative">
      <Hero />
      <SectionDivider />
      <About />  
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
    </div>
  );
}
