"use client";

import React, { useState } from "react";
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

  const categories = ["all", "backend", "frontend"];

  const getProjectCategory = (title: string) => {
    const lower = title.toLowerCase();

    // Frontend-related
    if (
      lower.includes("angular") ||
      lower.includes("react") ||
      lower.includes("next") ||
      lower.includes("frontend") ||
      lower.includes("mern")
    ) {
      return "frontend";
    }

    // Backend-related
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
      lower.includes("mern") // MERN counts for both backend & frontend
    ) {
      return "backend";
    }

    return "backend"; // default
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    const category = getProjectCategory(project.title);

    // MERN should appear in both frontend & backend
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

  return (
    <>
      <motion.section
        id="projects"
        className="section-padding"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured</span> Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work and the technologies I&apos;ve been
              exploring
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                  activeFilter === category
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:bg-card-hover hover:text-white border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${activeFilter}-${project.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden hover:bg-card-hover transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-48 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(project.img)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                        {getProjectCategory(project.title)}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="mb-4">
                      <p
                        className={`text-muted-foreground leading-relaxed ${
                          isExpanded(project.title) ? "" : "line-clamp-3"
                        }`}
                      >
                        {project.desc}
                      </p>
                      {project.desc.length > 100 && (
                        <button
                          onClick={() => toggleExpanded(project.title)}
                          className="mt-2 text-primary hover:text-primary-hover text-sm font-medium transition-colors duration-300"
                        >
                          {isExpanded(project.title) ? "Read less" : "Read more"}
                        </button>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {getTechStack(project.title).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card text-xs font-medium rounded-lg border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-hover transition-all duration-300 font-semibold group"
                      >
                        View Project
                        <svg
                          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>

                      <button
                        onClick={() => setSelectedImage(project.img)}
                        className="px-4 py-3 bg-card text-white rounded-xl hover:bg-card-hover transition-all duration-300 border border-border group"
                      >
                        <svg
                          className="w-5 h-5 group-hover:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Enlarged Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300 z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="max-h-[90vh] overflow-auto rounded-2xl shadow-2xl border-2 border-border">
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