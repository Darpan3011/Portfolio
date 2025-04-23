"use client"

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { experiences } from '@/static/Experience';

const Experience = () => {
  return (
    <motion.section id="experience" className='pt-24 max-w-7xl'
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, delay: 0.2 }}>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold pb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-background-color2 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800 hover:border-yellow-400/50 transition-colors duration-300">
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group">
                <Image 
                  src={exp.logo[0]} 
                  alt={exp.title} 
                  width={60} 
                  height={60} 
                  className="shadow-xl group-hover:scale-105" 
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{exp.title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  <span className="text-yellow-400 font-semibold">{exp.position}</span> | {exp.date}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-6 text-gray-300 space-y-3 mt-6">
              {exp.desc.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="leading-relaxed">
                  {point}
                </motion.li>
              ))}
            </ul>
            {exp.wordDone.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-wrap gap-4">
                {exp.wordDone.map((work, i) => (
                  <Link 
                    key={i} 
                    href={work.url} 
                    target='_blank' 
                    className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50">
                    {work.title}
                  </Link>              
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Experience