'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AppMockupProps {
  screenshots: string[];
}

const AppMockup: React.FC<AppMockupProps> = ({ screenshots }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const mockupVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              variants={mockupVariants}
              className="relative group"
              whileHover={{ 
                y: -20, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Phone Frame */}
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/10 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-500" />
                
                {/* Phone mockup container */}
                <div className="relative bg-gray-800 p-2 rounded-[2.5rem] shadow-2xl">
                  {/* Screen bezel */}
                  <div className="bg-black rounded-[2rem] p-1">
                    {/* Actual screen */}
                    <div className="relative bg-white rounded-[1.75rem] overflow-hidden aspect-[9/19.5] w-64 sm:w-72">
                      {/* Status bar */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[1.75rem] flex items-center justify-between px-4">
                        <div className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 border border-white rounded-sm"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* App screenshot */}
                      <div className="mt-6 h-full relative overflow-hidden">
                        <Image
                          src={screenshot}
                          alt={`App Screenshot ${index + 1}`}
                          fill
                          className="object-cover object-top"
                          unoptimized
                        />
                        
                        {/* Overlay gradient for better visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Home indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Volume buttons */}
                  <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-l-lg"></div>
                  <div className="absolute left-0 top-32 w-1 h-6 bg-gray-700 rounded-l-lg"></div>
                  <div className="absolute left-0 top-40 w-1 h-6 bg-gray-700 rounded-l-lg"></div>
                  
                  {/* Power button */}
                  <div className="absolute right-0 top-28 w-1 h-12 bg-gray-700 rounded-r-lg"></div>
                </div>

                {/* Floating elements around phone */}
                <motion.div
                  className="absolute -top-8 -right-8 w-6 h-6 bg-white/30 rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-4 h-4 bg-white/20 rounded-full"
                  animate={{
                    x: [-5, 5, -5],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </div>

              {/* App name labels */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {index === 0 ? 'Serwex User App' : 'Serwex Partner App'}
                </h3>
                <p className="text-white/70 text-sm">
                  {index === 0 ? 'Book trusted services instantly' : 'Manage your business effortlessly'}
                </p>
                
                {/* Download button */}
                <motion.a
                  href={index === 0 
                    ? "https://play.google.com/store/apps/details?id=com.serwex.user"
                    : "https://play.google.com/store/apps/details?id=com.serwex.partner"
                  }
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📱 Download Now
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional features showcase */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { icon: '🚀', title: 'Fast & Reliable', desc: 'Lightning quick bookings' },
            { icon: '🔒', title: 'Secure Payments', desc: 'Protected transactions' },
            { icon: '📊', title: 'Real-time Updates', desc: 'Live service tracking' },
            { icon: '🌟', title: 'Quality Assured', desc: 'Verified professionals' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
              <p className="text-white/70 text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppMockup;