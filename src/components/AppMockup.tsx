// components/AppMockup.tsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface AppMockupProps {
  screenshots: string[]; // Array of image paths
}

const AppMockup: React.FC<AppMockupProps> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="relative flex justify-center items-center">
      <button onClick={handlePrev} className="absolute left-0 text-3xl hover:text-accent">&lt;</button>
      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={screenshots[currentIndex]} alt={`App screenshot ${currentIndex + 1}`} width={300} height={600} className="rounded-lg shadow-glow" />
      </motion.div>
      <button onClick={handleNext} className="absolute right-0 text-3xl hover:text-accent">&gt;</button>
    </div>
  );
};

export default AppMockup;