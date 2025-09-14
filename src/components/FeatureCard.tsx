// // components/FeatureCard.tsx
// import { ReactNode } from 'react';
// import { motion } from 'framer-motion';

// interface FeatureCardProps {
//   icon: ReactNode;
//   title: string;
//   description: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
//   return (
//     <motion.div 
//       className="bg-white p-6 rounded-lg shadow-soft text-center hover:shadow-glow transition-shadow"
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="text-primary text-4xl mb-4 animate-bounce">{icon}</div>
//       <h3 className="font-bold mb-2">{title}</h3>
//       <p>{description}</p>
//     </motion.div>
//   );
// };

// export default FeatureCard;



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
      className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background Gradient Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        layoutId="card-bg"
      />
      
      {/* Floating Orb Effect */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 group-hover:opacity-75 transition-all duration-500" />
      
      <div className="relative z-10 text-center">
        {/* Icon Container */}
        <motion.div 
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300"
          whileHover={{ 
            scale: 1.1, 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <span className="text-3xl filter drop-shadow-sm">{icon}</span>
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="text-xl font-bold text-black mb-4 group-hover:text-gray-900 transition-colors duration-300"
          layoutId="card-title"
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        <motion.p 
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
          layoutId="card-description"
        >
          {description}
        </motion.p>
        
        {/* Hover Arrow */}
        <motion.div
          className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -20 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-blue-500 font-semibold flex items-center gap-2">
            Learn More
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.div>
      </div>
      
      {/* Bottom Border Accent */}
      <motion.div
        className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"
      />
    </motion.div>
  );
};

export default FeatureCard;