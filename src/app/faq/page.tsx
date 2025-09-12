// app/faq/page.tsx
import SEO from '@/components/SEO';
import FAQAccordion from '@/components/FAQAccordion';
import fs from 'fs';
import path from 'path';
import { motion } from 'framer-motion';

export default function FAQ() {
  const content = fs.readFileSync(path.join(process.cwd(), 'content/faq.md'), 'utf8');
  const items = content.split('## ').slice(1).map(section => {
    const [question, ...answerParts] = section.split('\n').filter(Boolean);
    return { question, answer: answerParts.join('\n') };
  });

  return (
    <>
      <SEO 
        title="FAQ - Serwex"
        description="Answers to common questions about our apps." canonicalUrl={''}      />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <FAQAccordion items={items} />
        </div>
      </section>
    </>
  );
}