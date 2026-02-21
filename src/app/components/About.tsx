"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <motion.section
      id="about"
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
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions and solving complex problems
          </p>
        </motion.div>

        <div className="w-full">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Darpan Kanani</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A passionate Backend Developer with 1.5+ years of experience building robust, scalable server-side applications.
                I specialize in Java, Spring Boot, and database optimization, with expertise in creating high-performance APIs and microservices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-xl p-6 hover:bg-card-hover transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎯</span>
                  <h4 className="text-lg font-semibold text-primary">Current Role</h4>
                </div>
                <p className="text-muted-foreground">
                  Junior Software Engineer at <span className="text-primary font-semibold">Dash Technologies Inc.</span>
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-xl p-6 hover:bg-card-hover transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🎓</span>
                  <h4 className="text-lg font-semibold text-primary">Education</h4>
                </div>
                <p className="text-muted-foreground">
                  B.Tech from <span className="text-primary font-semibold">IIIT Vadodara</span>
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-xl p-6 hover:bg-card-hover transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">⚡</span>
                  <h4 className="text-lg font-semibold text-primary">Experience</h4>
                </div>
                <p className="text-muted-foreground">
                  Building scalable backend systems with Spring Boot, Java, and database optimization
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-xl p-6 hover:bg-card-hover transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🔧</span>
                  <h4 className="text-lg font-semibold text-primary">Expertise</h4>
                </div>
                <p className="text-muted-foreground">
                  Java, Spring Boot, REST APIs, database design, and performance optimization
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="https://github.com/Darpan3011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-card text-white rounded-xl hover:bg-card-hover transition-all duration-300 border border-border group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>

              <Link
                href="https://linkedin.com/in/darpan-kanani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-hover transition-all duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Quick Facts</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">1.5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About