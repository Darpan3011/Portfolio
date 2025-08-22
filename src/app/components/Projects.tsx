"use client"

import React, { useState } from 'react'
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from '@/static/Project';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <>
      <motion.section id="projects" className='pt-24 max-w-7xl mx-auto'
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6, delay: 0.2 }}>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold pb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Projects
        </motion.h2>
        <div className="mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-background-color2 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 hover:border-yellow-400/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group w-full md:w-1/2"
                >
                  <div className="h-80 w-full overflow-hidden rounded-xl shadow-xl border-2 border-gray-800">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      width={500} 
                      height={300}
                      className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300" 
                      onClick={() => setSelectedImage(project.img.src)}
                    />
                  </div>
                  
                </motion.div>
                <div className="text-left w-full md:w-1/2">
                  <motion.h3 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-gray-300 mt-4 leading-relaxed"
                  >
                    {project.desc}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6"
                  >
                    <Link 
                      href={project.link} 
                      target='_blank' 
                      className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50 group"
                    >
                      View Project
                      <svg 
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
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
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors duration-300 z-10"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="max-h-[90vh] overflow-auto rounded-2xl shadow-2xl border-2 border-gray-800">
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
  )
}

export default Projects