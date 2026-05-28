"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/static/Project";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<
    typeof projects[0]["img"] | null
  >(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [exceedsThreeLines, setExceedsThreeLines] = useState<Set<string>>(new Set());
  const descRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

  const categories = ["all", "backend", "frontend"];

  const getProjectCategory = (title: string) => {
    const lower = title.toLowerCase();

    if (
      lower.includes("angular") ||
      lower.includes("react") ||
      lower.includes("next") ||
      lower.includes("frontend") ||
      lower.includes("mern")
    ) {
      return "frontend";
    }

    if (
      lower.includes("spring") ||
      lower.includes("java") ||
      lower.includes(".net") ||
      lower.includes("jpa") ||
      lower.includes("mysql") ||
      lower.includes("security") ||
      lower.includes("backend") ||
      lower.includes("api") ||
      lower.includes("blockchain") ||
      lower.includes("websocket") ||
      lower.includes("chat") ||
      lower.includes("mern")
    ) {
      return "backend";
    }

    return "backend";
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    const category = getProjectCategory(project.title);

    if (
      activeFilter === "frontend" &&
      (category === "frontend" || project.title.toLowerCase().includes("mern"))
    ) {
      return true;
    }
    if (
      activeFilter === "backend" &&
      (category === "backend" || project.title.toLowerCase().includes("mern"))
    ) {
      return true;
    }

    return category === activeFilter;
  });

  const getTechStack = (title: string) => {
    const techs: string[] = [];
    const lower = title.toLowerCase();

    if (lower.includes("spring")) techs.push("Spring Boot");
    if (lower.includes("java")) techs.push("Java");
    if (lower.includes(".net")) techs.push(".NET Core");
    if (lower.includes("c#")) techs.push("C#");
    if (lower.includes("jwt")) techs.push("JWT");
    if (lower.includes("security")) techs.push("Spring Security");
    if (lower.includes("sql")) techs.push("SQL");
    if (lower.includes("jpa")) techs.push("JPA");
    if (lower.includes("blockchain")) techs.push("Blockchain");
    if (lower.includes("websocket")) techs.push("WebSocket");
    if (lower.includes("angular")) techs.push("Angular");
    if (lower.includes("react")) techs.push("React");
    if (lower.includes("next")) techs.push("Next.js");
    if (lower.includes("mern")) techs.push("MERN");
    if (lower.includes("mongodb")) techs.push("MongoDB");
    if (lower.includes("mysql")) techs.push("MySQL");
    if (lower.includes("redis")) techs.push("Redis");
    if (lower.includes("lua")) techs.push("Lua");

    return techs;
  };

  const toggleExpanded = (projectTitle: string) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectTitle)) {
        newSet.delete(projectTitle);
      } else {
        newSet.add(projectTitle);
      }
      return newSet;
    });
  };

  const isExpanded = (projectTitle: string) => {
    return expandedProjects.has(projectTitle);
  };

  useEffect(() => {
    const checkLineCount = () => {
      const newExceedsThreeLines = new Set<string>();

      Object.entries(descRefs.current).forEach(([title, element]) => {
        if (element) {
          const styles = window.getComputedStyle(element);
          const lineHeight = parseFloat(styles.lineHeight) || parseFloat(styles.fontSize) * 1.5;
          const maxHeight = lineHeight * 3;

          const clone = element.cloneNode(true) as HTMLElement;
          const elementWidth = element.offsetWidth;
          clone.style.position = 'absolute';
          clone.style.visibility = 'hidden';
          clone.style.height = 'auto';
          clone.style.maxHeight = 'none';
          clone.style.width = `${elementWidth}px`;
          clone.style.webkitLineClamp = 'none';
          clone.style.display = 'block';
          clone.className = clone.className.replace('line-clamp-3', '');

          element.parentElement?.appendChild(clone);
          const fullHeight = clone.offsetHeight;
          element.parentElement?.removeChild(clone);

          if (fullHeight > maxHeight) {
            newExceedsThreeLines.add(title);
          }
        }
      });

      setExceedsThreeLines(newExceedsThreeLines);
    };

    const timeoutId = setTimeout(checkLineCount, 100);
    window.addEventListener('resize', checkLineCount);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkLineCount);
    };
  }, [activeFilter, filteredProjects]);

  // Split: first project as featured, rest as grid
  const featuredProject = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  return (
    <>
      <section
        id="projects"
        className="section-padding"
      >
        <div className="container mx-auto px-4">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="section-label mb-3 block">04 / Projects</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A showcase of my recent work and the technologies I&apos;ve been exploring.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${activeFilter === category
                  ? "bg-primary text-background shadow-sm shadow-primary/20"
                  : "bg-background-secondary text-muted-foreground hover:text-foreground border border-white/[0.06] hover:border-white/[0.1]"
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Project */}
          {featuredProject && (
            <motion.div
              key={`featured-${activeFilter}-${featuredProject.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="bg-background-secondary rounded-2xl overflow-hidden border border-white/[0.06] card-glow group">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                    <Image
                      src={featuredProject.img}
                      alt={featuredProject.title}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover cursor-pointer group-hover:scale-[1.03] transition-transform duration-700"
                      onClick={() => setSelectedImage(featuredProject.img)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background-secondary/80 via-transparent to-transparent opacity-0 md:opacity-100" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-background rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-primary/60 uppercase tracking-wider">
                        {getProjectCategory(featuredProject.title)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {featuredProject.title}
                    </h3>

                    <div className="mb-6">
                      <p
                        ref={(el) => { descRefs.current[featuredProject.title] = el; }}
                        className={`text-muted-foreground leading-relaxed text-sm ${isExpanded(featuredProject.title) ? "" : "line-clamp-3"}`}
                      >
                        {featuredProject.desc}
                      </p>
                      {exceedsThreeLines.has(featuredProject.title) && (
                        <button
                          onClick={() => toggleExpanded(featuredProject.title)}
                          className="mt-2 text-primary hover:text-primary-hover text-xs font-medium transition-colors duration-300"
                        >
                          {isExpanded(featuredProject.title) ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {getTechStack(featuredProject.title).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/[0.04] text-xs font-medium rounded-lg border border-white/[0.06] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href={featuredProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-primary text-background px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-hover transition-all duration-300 shadow-sm shadow-primary/20 group/btn"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>

                      <button
                        onClick={() => setSelectedImage(featuredProject.img)}
                        className="px-3 py-2.5 bg-white/[0.04] text-muted-foreground rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {gridProjects.map((project, index) => (
                <motion.div
                  key={`${activeFilter}-${project.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-background-secondary rounded-2xl overflow-hidden border border-white/[0.06] card-glow group flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-44 object-cover cursor-pointer group-hover:scale-[1.05] transition-transform duration-500 grayscale group-hover:grayscale-0"
                      onClick={() => setSelectedImage(project.img)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 bg-background/70 backdrop-blur-sm text-muted-foreground rounded-full text-xs font-medium border border-white/[0.08]">
                        {getProjectCategory(project.title)}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                      {project.title}
                    </h3>

                    <div className="mb-4">
                      <p
                        ref={(el) => { descRefs.current[project.title] = el; }}
                        className={`text-muted-foreground leading-relaxed text-sm ${isExpanded(project.title) ? "" : "line-clamp-3"}`}
                      >
                        {project.desc}
                      </p>
                      {exceedsThreeLines.has(project.title) && (
                        <button
                          onClick={() => toggleExpanded(project.title)}
                          className="mt-1.5 text-primary hover:text-primary-hover text-xs font-medium transition-colors duration-300"
                        >
                          {isExpanded(project.title) ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {getTechStack(project.title).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-white/[0.03] text-[11px] font-medium rounded border border-white/[0.06] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto pt-2">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center bg-white/[0.06] text-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary hover:text-background transition-all duration-300 border border-white/[0.06] hover:border-primary group/btn"
                      >
                        View Project
                        <svg className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>

                      <button
                        onClick={() => setSelectedImage(project.img)}
                        className="px-3 py-2.5 bg-white/[0.04] text-muted-foreground rounded-xl border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground transition-all duration-300 flex-shrink-0"
                        title="View Image"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="max-h-[85vh] overflow-auto rounded-2xl border border-white/[0.08]">
                <Image
                  src={selectedImage}
                  alt="Project Screenshot"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;