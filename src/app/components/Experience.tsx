"use client"

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { experiences } from '@/static/Experience';

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-padding"
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
          <span className="section-label mb-3 block">03 / Experience</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            My professional journey and the impact I&apos;ve made along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex gap-8 group"
              >
                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0 mt-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-background-secondary border border-white/[0.08] group-hover:border-primary/30 transition-all duration-500 flex items-center justify-center shadow-lg overflow-hidden">
                    <Image
                      src={exp.logo[0]}
                      alt={exp.title}
                      width={32}
                      height={32}
                      className="object-contain w-7 h-7 md:w-8 md:h-8"
                    />
                  </div>
                  {/* Active glow */}
                  <div className="absolute inset-0 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-background-secondary rounded-2xl p-6 md:p-8 border border-white/[0.06] border-l-2 border-l-primary/20 group-hover:border-l-primary/60 card-glow transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-5">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-base font-semibold text-primary/80 mb-2">{exp.position}</p>
                      <span className="inline-flex px-3 py-1 bg-white/[0.04] text-muted-foreground text-xs font-medium rounded-full border border-white/[0.06]">
                        {exp.date}
                      </span>
                    </div>
                    {exp.link != null && (
                      <Link
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 lg:mt-0 inline-flex items-center px-4 py-2 text-xs font-medium text-muted-foreground hover:text-primary bg-white/[0.03] hover:bg-primary/[0.06] rounded-lg border border-white/[0.06] hover:border-primary/20 transition-all duration-300"
                      >
                        Visit
                        <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    )}
                  </div>

                  {exp.desc.length > 0 && (
                    <div className="space-y-3">
                      {exp.desc.map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary/60 mt-2.5 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience