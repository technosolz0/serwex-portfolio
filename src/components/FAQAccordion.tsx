"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";


interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ✅ FIX: declare transform outside JSX
  const glowBackground = useTransform([mouseX, mouseY], ([x, y]) =>
    `radial-gradient(300px circle at ${x}px ${y}px, rgba(251, 191, 36, 0.15), transparent 50%)`
  );

  // Filter items
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 relative">
      {/* ... your background + header + search + filter code unchanged ... */}

      {/* FAQ Items */}
      <div className="space-y-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseMove={handleMouseMove}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: glowBackground }} // ✅ using top-level transform
              />

              {/* ... rest of your accordion button, answer, animations ... */}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ... rest of code unchanged (results counter + floating button) ... */}
    </div>
  );
};

export default FAQAccordion;
