"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import ProfileImg from '../../utils/images/profile.png';
import Image from 'next/image';

const About = () => {
  return (
    <motion.section id="about"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
      <h2 className="text-4xl font-semibold pb-6" id="about-heading">About Me</h2>
      <div className="mx-auto bg-background-color2 px-8 py-14 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
        {/* Left Section - Image and Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3 p-4 rounded-lg bg-background-color3 shadow-md space-y-3">
          <Image src={ProfileImg} alt="Darpan Kanani" width={160} height={160} className="rounded-full shadow-lg border-2 border-gray-300 object-cover mb-2"/>
          <h3 className="text-3xl font-extrabold text-white">Darpan Kanani</h3>
          <p className="text-gray-300 text-sm leading-tight">
            <span className="font-semibold text-white">Experience:</span> 1.5+ years
          </p>
          <p className="text-white text-sm font-medium border-b border-gray-700 pb-2">
            Junior Software Engineer
            <span className="text-gray-300 font-semibold"> @Dash Technologies</span>
          </p>
          <p className="text-gray-300 text-sm leading-tight">
            <span className="font-medium">B.Tech</span> •
            <span className="font-semibold text-white"> Indian Institute of Information Technology, Vadodara</span>
          </p>
        </div>

        {/* Right Section - Skills and Experience */}
        <div className="text-left md:w-2/3 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-gray-300">
            <div>
              <p className="text-lg font-semibold text-yellow-400">Experience</p>
              <p>Hands-on experience in building scalable web applications with Spring Boot, .NET, Angular and NextJs.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-yellow-400">Backend Expertise</p>
              <p>Proficient in Java, C#, Spring Boot, and database management using MongoDB & MySQL.</p>
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