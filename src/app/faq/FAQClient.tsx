'use client';

import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion';

export default function FAQClient({ items }: { items: { question: string; answer: string }[] }) {
  return (
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
  );
}
