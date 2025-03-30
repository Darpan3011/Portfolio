"use client"

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { experiences } from '@/static/Experience';

const Experience = () => {
  return (
    <motion.section id="experience" className='pt-24'
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
    <h2 className="text-4xl font-semibold pb-4">Experience</h2>
    <div className="mx-auto space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-background-color2 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <Image src={exp.logo[0]} alt={exp.title} width={50} height={50} />
            <div>
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-gray-400 text-sm">{exp.position} | {exp.date}</p>
            </div>
          </div>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
            {exp.desc.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {exp.wordDone.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
            {exp.wordDone.map((work, i) => (
              <Link key={i} href={work.url} target='_blank' className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-all shadow-md">
                {work.title}
              </Link>              
            ))}
          </div>
          
          )}
        </div>
      ))}
    </div>
  </motion.section>
  )
}

export default Experience