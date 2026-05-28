'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#experience', text: 'Experience' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled 
          ? 'w-auto' 
          : 'w-auto'
      }`}
    >
      <div className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
        scrolled
          ? 'bg-background-secondary/80 backdrop-blur-xl border border-white/[0.06] shadow-2xl'
          : 'bg-background-secondary/50 backdrop-blur-md border border-white/[0.04]'
      }`}>
        {/* Monogram Logo */}
        <Link 
          href="#" 
          className="flex items-center justify-center w-9 h-9 rounded-full border border-primary/30 bg-primary/10 text-primary font-display font-bold text-sm mr-2 hover:bg-primary/20 transition-all duration-300 flex-shrink-0"
        >
          DK
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`nav-link relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-background bg-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              data-offset="150"
            >
              {link.text}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Link
            href="#contact"
            className="nav-link ml-2 inline-flex items-center px-5 py-2 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 transition-all duration-300 flex-shrink-0"
          >
            Let&apos;s Talk
            <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="p-2 text-foreground hover:text-primary transition-all duration-300 rounded-full"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-5 w-5"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - bottom sheet style */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              style={{ top: '-1rem', left: '-50vw', width: '200vw' }}
              onClick={toggleMenu}
            />
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-3 bg-background-secondary/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-4">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                    >
                      <Link 
                        href={link.href} 
                        className={`nav-link block px-4 py-3 rounded-xl transition-all duration-300 text-base font-medium ${
                          activeSection === link.href.substring(1)
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
                        }`}
                        onClick={toggleMenu}
                      >
                        {link.text}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                    className="pt-3 mt-2 border-t border-white/[0.06]"
                  >
                    <Link
                      href="#contact"
                      className="nav-link inline-flex items-center justify-center w-full px-6 py-3 bg-primary text-background rounded-xl font-semibold text-sm transition-all duration-300"
                      onClick={toggleMenu}
                    >
                      Let&apos;s Talk
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
