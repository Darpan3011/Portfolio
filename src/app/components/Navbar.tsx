'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-background-color2 py-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="#" className="text-2xl font-bold text-white hover:text-yellow-400">Darpan Kanani</Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="nav-link text-gray-300 hover:text-yellow-400" data-offset="150">About</Link>
          <Link href="#experience" className="nav-link text-gray-300 hover:text-yellow-400" data-offset="150">Experience</Link>
          <Link href="#projects" className="nav-link text-gray-300 hover:text-yellow-400" data-offset="150">Projects</Link>
          <Link href="#contact" className="nav-link text-gray-300 hover:text-yellow-400" data-offset="150">Contact</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className={`text-white transition-all duration-900 ${isMenuOpen ? "rotate-90" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
              className={`h-6 w-6 transform transition-all duration-900 ${isMenuOpen ? "rotate-45" : ""}`}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-background-color2">
          <Link href="#about" className="nav-link text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>About</Link>
          <Link href="#experience" className="nav-link text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>Experience</Link>
          <Link href="#projects" className="nav-link text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>Projects</Link>
          <Link href="#contact" className="nav-link text-gray-300 hover:text-yellow-400" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
