"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, -100, 0],
          y: [0, 100, 50, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 right-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, -70, 70, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-[15%] w-4 h-4 bg-blue-500/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-[20%] w-3 h-3 bg-indigo-500/30 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-40 left-[25%] w-2 h-2 bg-purple-500/30 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Decorative circles */}
      <svg
        className="absolute top-1/3 left-10 w-32 h-32 text-blue-500/10"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      <svg
        className="absolute bottom-1/4 right-20 w-24 h-24 text-indigo-500/10"
        viewBox="0 0 100 100"
      >
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(15 50 50)" />
        <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(30 50 50)" />
      </svg>

      {/* Light rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: 'conic-gradient(from 90deg at 50% 0%, transparent 0deg, rgba(59, 130, 246, 0.05) 60deg, transparent 120deg)',
          }}
        />
      </div>
    </div>
  );
}

