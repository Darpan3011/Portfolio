"use client"

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Link from 'next/link'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:darpankanani3011@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <section
        id="contact" 
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
            <span className="section-label mb-3 block">05 / Contact</span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Big headline + contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
                  Let&apos;s build something{' '}
                  <span className="gradient-text">great</span>{' '}
                  together.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:darpankanani3011@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary border border-white/[0.06] hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">darpankanani3011@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://linkedin.com/in/darpan-kanani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary border border-white/[0.06] hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Connect professionally</div>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://github.com/Darpan3011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-secondary border border-white/[0.06] hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">GitHub</div>
                    <div className="text-sm text-muted-foreground">Check out my projects</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background-secondary rounded-2xl p-8 border border-white/[0.06] card-glow"
            >
              <h3 className="text-lg font-display font-bold mb-6 text-foreground">Send a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 bg-transparent text-foreground placeholder-muted/60 input-underline text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 bg-transparent text-foreground placeholder-muted/60 input-underline text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 bg-transparent text-foreground placeholder-muted/60 input-underline text-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 bg-transparent text-foreground placeholder-muted/60 input-underline text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-primary text-background px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-primary-hover transition-all duration-300 shadow-sm shadow-primary/20 hover:shadow-primary/30 group"
                >
                  Send Message
                  <svg className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Darpan Kanani. Built with Next.js
            </div>
            
            <div className="flex items-center gap-4">
              {[
                { href: "https://github.com/Darpan3011", label: "GitHub" },
                { href: "https://linkedin.com/in/darpan-kanani", label: "LinkedIn" },
                { href: "https://leetcode.com/u/Darpan301/", label: "LeetCode" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Contact