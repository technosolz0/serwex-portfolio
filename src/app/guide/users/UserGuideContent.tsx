// app/guide/users/UserGuideContent.tsx
"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function UserGuideContent({ content }: { content: string }) {
  return (
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
          <ReactMarkdown className="prose mx-auto prose-li:list-decimal prose-headings:text-primary">
            {content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </section>
  );
}
