"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BOOT_LOGS = [
  "Initializing Kernel...",
  "Loading Developer Profile [Darpan Kanani]...",
  "Mounting Experience...",
  "Mounting Projects...",
  "Compiling Skills...",
  "Verifying Dependencies...",
  "Starting Services...",
  "ACCESS GRANTED."
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < BOOT_LOGS.length) {
      const timeout = setTimeout(() => {
        setLogs((prev) => [...prev, BOOT_LOGS[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 200 + 200); // Random delay between 200-400ms

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      className="boot-screen"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ flex: 1 }} />
      <div>
        <div className="terminal-line" style={{ marginBottom: 20 }}>SYSTEM BOOTING...</div>
        {logs.map((log, index) => (
          <div key={index} className="terminal-line">
            &gt; {log}
          </div>
        ))}
        {currentIndex < BOOT_LOGS.length && (
          <div className="terminal-line">
            &gt; <span className="cursor" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
