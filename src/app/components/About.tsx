"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import ProfileImg from '../../utils/images/profile.png';
import Image from 'next/image';

const About = () => {
  return (
    <motion.section id="about" className='pt-24 max-w-7xl mx-auto'
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, delay: 0.2 }}>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold pb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent" 
        id="about-heading">
        About Me
      </motion.h2>
      <div className="mx-auto bg-gradient-to-br from-background-color2 to-gray-900 p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-gray-800">
        {/* Left Section - Image and Info */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3 p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm shadow-xl space-y-4 border border-gray-800">
          <div className="relative group">
            <Image 
              src={ProfileImg} 
              alt="Darpan Kanani" 
              width={160} 
              height={160} 
              className="rounded-full shadow-2xl border-2 border-yellow-400 object-cover mb-2 transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Darpan Kanani</h3>
          <p className="text-gray-300 text-sm leading-tight">
            <span className="font-semibold text-yellow-400">Experience:</span> 1.5+ years
          </p>
          <p className="text-white text-sm font-medium border-b border-gray-700 pb-3 w-full text-center md:text-left">
            Junior Software Engineer
            <span className="text-yellow-400 font-semibold block mt-1">@Dash Technologies</span>
          </p>
          <p className="text-gray-300 text-sm leading-tight">
            <span className="font-medium">B.Tech</span> •
            <span className="font-semibold text-yellow-400"> IIIT Vadodara</span>
          </p>
        </motion.div>

        {/* Right Section - Skills and Experience */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-left md:w-2/3 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-yellow-400/50 transition-colors duration-300">
              <p className="text-lg font-semibold text-yellow-400 mb-2">Experience</p>
              <p className="text-gray-300 leading-relaxed">Building scalable web applications with Spring Boot, .NET, Angular, and NextJs, focusing on performance and user experience.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-yellow-400/50 transition-colors duration-300">
              <p className="text-lg font-semibold text-yellow-400 mb-2">Backend Expertise</p>
              <p className="text-gray-300 leading-relaxed">Mastery in Java, C#, Spring Boot, and advanced database management with MongoDB & MySQL.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-yellow-400/50 transition-colors duration-300">
              <p className="text-lg font-semibold text-yellow-400 mb-2">Cloud & DevOps</p>
              <p className="text-gray-300 leading-relaxed">Expert in AWS services, implementing robust CI/CD pipelines, and modern deployment strategies.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-5 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-yellow-400/50 transition-colors duration-300">
              <p className="text-lg font-semibold text-yellow-400 mb-2">Problem Solving</p>
              <p className="text-gray-300 leading-relaxed">Dedicated to tackling complex algorithmic challenges and optimizing application performance for scalability.</p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4">
            <Link 
              href="https://github.com/Darpan3011" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/in/darpan-kanani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 border border-blue-500 hover:border-yellow-400/50 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About