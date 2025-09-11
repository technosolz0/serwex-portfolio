// app/guide/users/page.tsx
import SEO from '@/components/SEO';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function UserGuide() {
  const content = fs.readFileSync(path.join(process.cwd(), 'content/guide-users.md'), 'utf8');

  return (
    <>
      <SEO 
        title="User Guide for Serwex"
        description="Step-by-step guide to using the Serwex app for booking services." canonicalUrl={''}      />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            How to Use Serwex (Users)
          </motion.h1>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactMarkdown className="prose mx-auto prose-li:list-decimal prose-headings:text-primary">{content}</ReactMarkdown>
            {/* Add animated images if needed */}
          </motion.div>
        </div>
      </section>
    </>
  );
}