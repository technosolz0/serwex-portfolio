// app/about/page.tsx
import React from 'react';
import path from 'path';
import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';

interface AboutPageProps {
  content: string;
}

// This is a Server Component by default
export default function About() {
  // Read markdown file from the filesystem synchronously (only server-side)
  const contentPath = path.join(process.cwd(), 'src/content/about.md');

  // Make sure file exists to avoid build errors
  let content = '';
  try {
    content = fs.readFileSync(contentPath, 'utf8');
  } catch (err) {
    console.error('Error reading about.md:', err);
    content = 'Content not available.';
  }

  return (
    <>
      <SEO
        title="About Serwex"
        description="Learn about our mission to make home services easy."
        canonicalUrl="https://yourdomain.com/about"
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactMarkdown className="prose mx-auto prose-headings:text-primary prose-a:text-accent">
              {content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </section>
    </>
  );
}
