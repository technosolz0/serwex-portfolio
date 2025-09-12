'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface AppMockupProps {
  screenshots: string[];
}

const AppMockup: React.FC<AppMockupProps> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="relative flex justify-center items-center">
      <button onClick={handlePrev} className="absolute left-0 text-3xl hover:text-accent">{"<"}</button>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={screenshots[currentIndex]}
          alt={`App screenshot ${currentIndex + 1}`}
          width={300}
          height={600}
          className="rounded-lg shadow-glow"
          unoptimized
        />
      </motion.div>
      <button onClick={handleNext} className="absolute right-0 text-3xl hover:text-accent">{">"}</button>
    </div>
  );
};

// Export as dynamic component with SSR disabled
export default dynamic(() => Promise.resolve(AppMockup), { ssr: false });