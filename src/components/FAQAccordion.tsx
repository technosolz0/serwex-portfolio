// components/FAQAccordion.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div 
          key={index} 
          className="border rounded overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button className="w-full p-4 text-left font-bold hover:bg-tertiary transition-colors" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.question}
          </button>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: openIndex === index ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            {openIndex === index && <p className="p-4">{item.answer}</p>}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;