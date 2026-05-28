"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfileImg from '../../utils/images/profile.png'
import LeetCodeIcon from '../../utils/images/leetcode.png'
import GeeksforGeeksIcon from '../../utils/images/geeksforgeeks.svg'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const roles = [
    "Backend Developer",
    "Software Engineer",
    "Spring Boot Expert",
    "Problem Solver"
  ]

  useEffect(() => {
    const currentWord = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  })

  const nameLetters = "Darpan Kanani".split("")

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      
      {/* Subtle radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 hidden md:block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-background-secondary rounded-full text-sm font-medium text-muted-foreground border border-white/[0.06]">
                <span className="relative flex h-2 w-2">
                  <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for work
              </span>
            </motion.div>

            {/* Name with character animation */}
            <div className="hidden md:block mb-6">
              <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight">
                <span className="inline-block whitespace-nowrap gradient-text mr-4">
                  {"Darpan".split("").map((letter, index) => (
                    <motion.span
                      key={`first-${index}`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
                <span className="inline-block whitespace-nowrap text-foreground">
                  {"Kanani".split("").map((letter, index) => (
                    <motion.span
                      key={`last-${index}`}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + (6 + index) * 0.04,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </div>

            {/* Mobile name - simpler */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:hidden text-5xl font-display font-bold mb-4 pt-16"
            >
              <span className="gradient-text">Darpan</span>{' '}
              <span className="text-foreground">Kanani</span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-xl lg:text-2xl font-medium text-muted-foreground mb-4 font-display">
                <span className="text-foreground/60">I&apos;m a </span>
                <span className="text-primary">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[2px] h-6 bg-primary ml-0.5 align-middle"
                  />
                </span>
              </div>
              <p className="text-base lg:text-lg text-muted-foreground/80 max-w-lg leading-relaxed">
                Passionate about building robust, scalable backend systems and APIs. 
                Specializing in Java, Spring Boot, and database optimization.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-background rounded-xl font-semibold text-sm hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 group"
              >
                View My Work
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-foreground rounded-xl font-semibold text-sm border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all duration-300 group"
              >
                Get In Touch
                <svg className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex gap-3 justify-center lg:justify-start mt-8"
            >
              {[
                { href: "https://github.com/Darpan3011", label: "GitHub", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )},
                { href: "https://linkedin.com/in/darpan-kanani", label: "LinkedIn", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )},
                { href: "https://leetcode.com/u/Darpan301/", label: "LeetCode", icon: (
                  <div className="w-5 h-5 relative">
                    <Image src={LeetCodeIcon} alt="LeetCode" fill className="object-contain" sizes="20px" />
                  </div>
                )},
                { href: "https://www.geeksforgeeks.org/user/darpan_kanani/", label: "GFG", icon: (
                  <div className="w-5 h-5 relative">
                    <Image src={GeeksforGeeksIcon} alt="GeeksforGeeks" fill className="object-contain" sizes="20px" />
                  </div>
                )}
              ].map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/[0.06] border border-transparent hover:border-white/[0.08] transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-[60px] scale-110" />
              
              {/* Image container - rounded rectangle shape */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-[2.5rem] overflow-hidden border border-white/[0.08] shadow-2xl">
                <Image
                  src={ProfileImg}
                  alt="Darpan Kanani"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              </div>

              {/* Floating badge - experience */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-6 px-4 py-2.5 bg-background-secondary/90 backdrop-blur-sm rounded-xl border border-white/[0.08] shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">⚡</span>
                  <div>
                    <div className="text-xs text-muted-foreground">Experience</div>
                    <div className="text-sm font-semibold text-foreground">1.5+ Years</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge - tech */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -right-6 px-4 py-2.5 bg-background-secondary/90 backdrop-blur-sm rounded-xl border border-white/[0.08] shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">💻</span>
                  <div>
                    <div className="text-xs text-muted-foreground">Stack</div>
                    <div className="text-sm font-semibold text-primary">Java & Spring</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/60 tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-4 h-4 text-muted-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
