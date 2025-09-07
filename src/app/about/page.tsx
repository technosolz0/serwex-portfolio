// app/about/page.tsx
import SEO from '@/components/SEO';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function About() {
  const content = fs.readFileSync(path.join(process.cwd(), 'content/about.md'), 'utf8');

  return (
    <>
      <SEO 
        title="About Serwex" 
        description="Learn about our mission to make home services easy." 
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
            <ReactMarkdown className="prose mx-auto prose-headings:text-primary prose-a:text-accent">{content}</ReactMarkdown>
          </motion.div>
        </div>
      </section>
    </>
  );
}