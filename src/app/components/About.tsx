"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import ProfileImg from '../../utils/images/profile.png';
import Image from 'next/image';

const About = () => {
  return (
    <motion.section id="about" className="bg-gray-950"
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
        <h2 className="text-4xl font-semibold pb-6" id="about-heading">About Me</h2>
        <div className="mx-auto bg-gray-800 px-8 py-14 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          {/* Left Section - Image and Info */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left w-1/3">
            <Image src={ProfileImg} alt="Darpan Kanani" width={160} height={160} className="rounded-full shadow-lg mb-4" />
            <h3 className="text-2xl font-bold">Darpan Kanani</h3>
            <p className="text-gray-400 text-sm"><strong>Experience:</strong> 1.5+ years</p>
            <p className="text-gray-400 text-sm">Junior Software Engineer at Dash Technologies</p>
          </div>
          {/* Right Section - Skills and Experience */}
          <div className="text-left w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-gray-300">
              <div>
                <p className="text-lg font-semibold text-yellow-400">Experience</p>
                <p>Hands-on experience in building scalable web applications with .NET, Angular, and React.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-yellow-400">Backend Expertise</p>
                <p>Proficient in Node.js, Express.js, Spring Boot, and database management using MongoDB & MySQL.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-yellow-400">Cloud & DevOps</p>
                <p>Skilled in AWS services, CI/CD pipelines, and deployment strategies.</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-yellow-400">Problem Solving</p>
                <p>Passionate about algorithmic challenges and optimizing application performance.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="/Darpan_Kanani.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-400 transition-all">
                View Resume
              </a>
              <Link href="https://github.com/Darpan3011" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all">
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/darpan-kanani" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-all">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

  )
}

export default About