"use client"

import { motion } from 'framer-motion'
import React from 'react'

const Contact = () => {
  return (
    <motion.section id="contact" className="bg-[#1a1945] text-center rounded-lg py-24 my-24"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
        <motion.h2 
        className="text-5xl font-extrabold text-white mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Get in Touch
      </motion.h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Feel free to reach out via email or LinkedIn for collaborations!
        </p>
        <motion.a whileHover={{ scale: 1.05 }} href="mailto:darpankanani3011@gmail.com"
          className="inline-block mt-4 bg-yellow-500 text-gray-900 px-6 py-3 rounded-md text-xl hover:bg-yellow-400 transition-all">
          Send Me an Email
        </motion.a>
      </motion.section>
  )
}

export default Contact