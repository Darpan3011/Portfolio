"use client"

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import React, { useRef, useEffect, useState } from 'react'

const CountUp = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const About = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section
      id="about"
      className="section-padding"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-3 block">01 / About</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A passionate Backend Developer with 1.5+ years of experience building robust, scalable server-side applications.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 - Current Role (spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-background-secondary rounded-2xl p-8 border border-white/[0.06] card-glow group"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-3xl">🎯</span>
              <span className="text-xs font-medium text-muted-foreground bg-white/[0.04] px-3 py-1 rounded-full">Current</span>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">Software Development Engineer 1</h3>
            <p className="text-primary font-semibold text-lg mb-3">Star Health and Allied Insurance</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building scalable backend systems with Spring Boot, Java, and database optimization for enterprise-grade applications.
            </p>
          </motion.div>

          {/* Card 2 - Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background-secondary rounded-2xl p-8 border border-white/[0.06] card-glow group"
          >
            <span className="text-3xl block mb-6">🎓</span>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">Education</h3>
            <p className="text-primary font-semibold mb-1">IIIT Vadodara</p>
            <p className="text-sm text-muted-foreground">B.Tech</p>
          </motion.div>

          {/* Card 3 - Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-background-secondary rounded-2xl p-8 border border-white/[0.06] card-glow group"
          >
            <span className="text-3xl block mb-6">🔧</span>
            <h3 className="text-lg font-display font-bold text-foreground mb-2">Expertise</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Java, Spring Boot, REST APIs, database design & performance optimization
            </p>
          </motion.div>

          {/* Stats Row - spans full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-4 bg-background-secondary rounded-2xl p-8 border border-white/[0.06] card-glow"
          >
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                  {isInView ? <CountUp target={1} suffix=".5+" /> : '0'}
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center border-x border-white/[0.06]">
                <div className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                  {isInView ? <CountUp target={10} suffix="+" /> : '0'}
                </div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                  {isInView ? <CountUp target={15} suffix="+" /> : '0'}
                </div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-4 flex flex-wrap gap-3"
          >
            <Link
              href="https://github.com/Darpan3011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-background-secondary text-foreground rounded-xl text-sm font-medium border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <svg className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-foreground transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/darpan-kanani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-primary text-background rounded-xl text-sm font-semibold hover:bg-primary-hover transition-all duration-300 shadow-sm shadow-primary/20"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About