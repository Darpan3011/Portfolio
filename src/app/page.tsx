"use client";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function Home() {

  useEffect(() => {
    const handleSmoothScroll = (e:any) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  
  return (
    
    <div className="py-24 flex flex-col gap-32">
      <About/>  
      <Experience />
      <Projects />
      <Contact/>
    </div>
  );
}
