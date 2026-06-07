"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BootSequence from './BootSequence';

export default function Shell({ children }: { children: React.ReactNode }) {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <AnimatePresence>
      {isBooting ? (
        <BootSequence key="boot" onComplete={() => setIsBooting(false)} />
      ) : (
        <motion.div
          key="shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="devos-shell"
        >
          {/* ── Top Header Bar ── */}
          <header className="devos-header">
            {/* Left: identity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 700, letterSpacing: 2 }}>DARPAN KANANI</span>
              <span style={{ opacity: 0.3 }}>|</span>
              <span style={{ opacity: 0.7 }}>Software Engineer</span>
              <span style={{ opacity: 0.3 }}>|</span>
              <span style={{ color: 'var(--accent-color)', opacity: 0.8, fontSize: 10 }}>PORTFOLIO OS v2.0</span>
            </div>
            {/* Center: hint */}
            <div style={{ fontSize: 10, opacity: 0.6, letterSpacing: 1 }}>
              TYPE A COMMAND IN THE TERMINAL ↓ &nbsp;·&nbsp; TRY: <span style={{ color: 'var(--accent-color)' }}>projects</span>, <span style={{ color: 'var(--accent-color)' }}>experience</span>, <span style={{ color: 'var(--accent-color)' }}>education</span>, <span style={{ color: 'var(--accent-color)' }}>certifications</span>, <span style={{ color: 'var(--accent-color)' }}>help</span>
            </div>
            {/* Right: status + time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-color)', display: 'inline-block', boxShadow: '0 0 6px var(--accent-color)' }} />
                ONLINE
              </span>
              <span style={{ opacity: 0.5 }}>{new Date().toLocaleTimeString()}</span>
            </div>
          </header>
          
          <main className="devos-main-grid">
            {children}
          </main>
          
          <footer style={{
            height: 24, borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', padding: '0 16px',
            fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)',
            background: 'var(--bg-panel)'
          }}>
            <span>darpan@devos:~ — <span style={{ color: 'var(--accent-color)' }}>Portfolio OS</span></span>
            <span>USE THE <span style={{ color: 'var(--accent-color)' }}>TERMINAL</span> IN CENTER PANEL &nbsp;·&nbsp; TRY: <span style={{ color: 'var(--accent-color)' }}>projects</span>, <span style={{ color: 'var(--accent-color)' }}>experience</span>, <span style={{ color: 'var(--accent-color)' }}>skills</span>, <span style={{ color: 'var(--accent-color)' }}>education</span>, <span style={{ color: 'var(--accent-color)' }}>certifications</span></span>
            <span style={{ opacity: 0.4 }}>DRAG DIVIDERS TO RESIZE PANELS</span>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
