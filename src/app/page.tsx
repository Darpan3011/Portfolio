"use client";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

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
    
    <div className="py-24 flex flex-col gap-28">
      <About/>  
      <Experience />
      <Projects />
      <Contact/>
    </div>
  );
}
