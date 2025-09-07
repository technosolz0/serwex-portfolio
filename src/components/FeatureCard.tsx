// components/FeatureCard.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-soft text-center hover:shadow-glow transition-shadow"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-primary text-4xl mb-4 animate-bounce">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;