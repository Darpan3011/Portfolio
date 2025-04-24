"use client"

import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <motion.section 
      id="contact" 
      className="py-24 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold pb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>

      <div className="mx-auto bg-gradient-to-br from-background-color2 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-800">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below!
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="mailto:darpankanani3011@gmail.com"
              className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-yellow-400/50 group"
            >
              <svg 
                className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Email
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="https://linkedin.com/in/darpan-kanani" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-all duration-300 border border-blue-500 hover:border-yellow-400/50 group"
            >
              <svg 
                className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-gray-400 text-sm"
        >
          <p>Looking forward to hearing from you!</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact