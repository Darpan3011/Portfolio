"use client"

import React, { useState } from 'react'
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from '@/static/Project';

const Projects = () => {

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    
  return (
    <>
     <motion.section id="projects"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
        <h2 className="text-4xl font-semibold mb-6">Projects</h2>
        <div className="mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div key={index} className="bg-background-color2 p-8 rounded-lg shadow-lg hover:scale-105 transition transform duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Image src={project.img} alt={project.title} width={500} className="rounded-md cursor-pointer" onClick={() => setSelectedImage(project.img.src)} />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 mt-2">{project.desc}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link href={project.link} target='_blank' className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-all">
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Enlarged Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <Image src={selectedImage} alt="Project Screenshot" width={800} height={500} className="rounded-lg shadow-lg" />
        </div>
      )}
  </>
  )
}

export default Projects