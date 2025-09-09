// app/not-found.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-6xl font-bold mb-4 text-primary"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        404
      </motion.h1>
      <p className="text-xl mb-8">Page not found. Let&apos;s get you back home.</p>
      <Link href="/" className="bg-primary text-white px-6 py-3 rounded hover:bg-accent transition-colors shadow-glow">Go to Home</Link>
    </motion.div>
  );
}