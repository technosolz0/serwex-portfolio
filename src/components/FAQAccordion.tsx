// // components/FAQAccordion.tsx
// "use client";
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// interface FAQAccordionProps {
//   items: FAQItem[];
// }

// const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <div className="space-y-4">
//       {items.map((item, index) => (
//         <motion.div 
//           key={index} 
//           className="border rounded overflow-hidden"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.1 }}
//         >
//           <button className="w-full p-4 text-left font-bold hover:bg-tertiary transition-colors" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
//             {item.question}
//           </button>
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: openIndex === index ? 'auto' : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {openIndex === index && <p className="p-4">{item.answer}</p>}
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default FAQAccordion;
"use client";
import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, Sparkles, Filter, X, Star } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  searchable?: boolean;
  categories?: string[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  items, 
  searchable = true, 
  categories = [] 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Filter items based on search query and category
  const filteredItems = items.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 relative">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-amber-200/30 via-yellow-100/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-radial from-orange-200/30 via-amber-100/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-full mb-8 shadow-2xl relative overflow-hidden"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <HelpCircle className="w-12 h-12 text-white relative z-10" />
          
          {/* Floating particles around icon */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/60 rounded-full"
              animate={{
                x: [0, Math.cos(i * Math.PI / 3) * 40],
                y: [0, Math.sin(i * Math.PI / 3) * 40],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: '50%',
                top: '50%'
              }}
            />
          ))}
        </motion.div>
        
        <motion.h2 
          className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Frequently Asked Questions ✨
        </motion.h2>
        
        <motion.p 
          className="text-xl text-amber-700/80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Find answers to common questions about our magical services and get instant help!
        </motion.p>
      </motion.div>

      {/* Search and Filter Section */}
      {(searchable || categories.length > 0) && (
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {/* Search Bar */}
          {searchable && (
            <div className="relative max-w-2xl mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-3xl blur-lg opacity-0 transition-opacity duration-500"
                animate={isSearchFocused ? { opacity: 1, scale: 1.02 } : {}}
              />
              <div className="relative">
                <motion.div
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-amber-500"
                  animate={isSearchFocused ? { scale: 1.1, rotate: 15 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Search className="w-6 h-6" />
                </motion.div>
                
                <motion.input
                  type="text"
                  placeholder="Search your questions... 🔍"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-16 pr-16 py-5 text-lg border-2 border-amber-200 rounded-3xl focus:border-amber-400 focus:outline-none bg-gradient-to-r from-white/90 to-amber-50/60 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl focus:shadow-2xl focus:scale-[1.02]"
                />
                
                <AnimatePresence>
                  {searchQuery && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0, rotate: 90 }}
                      onClick={clearSearch}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-700 transition-colors p-1 hover:bg-amber-100 rounded-full"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Search suggestions */}
              <AnimatePresence>
                {isSearchFocused && searchQuery === '' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200 p-4 z-50"
                  >
                    <div className="text-sm text-amber-600 mb-2 font-medium">💡 Popular searches:</div>
                    <div className="flex flex-wrap gap-2">
                      {['pricing', 'app download', 'services', 'support'].map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => setSearchQuery(suggestion)}
                          className="px-3 py-1 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full text-sm transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div
                className="flex items-center space-x-2 text-amber-700 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Filter className="w-5 h-5" />
                <span>Filter by:</span>
              </motion.div>
              
              <motion.button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 border-2 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-amber-400 shadow-lg shadow-amber-400/30 scale-105'
                    : 'bg-white/80 text-amber-700 border-amber-200 hover:bg-amber-50 hover:border-amber-300 shadow-lg'
                }`}
                whileHover={{ scale: selectedCategory === 'all' ? 1.05 : 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                ⭐ All Categories
              </motion.button>
              
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-500 border-2 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-amber-400 shadow-lg shadow-amber-400/30 scale-105'
                      : 'bg-white/80 text-amber-700 border-amber-200 hover:bg-amber-50 hover:border-amber-300 shadow-lg'
                  }`}
                  whileHover={{ scale: selectedCategory === category ? 1.05 : 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  ✨ {category}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* No Results Message */}
      <AnimatePresence>
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-20"
          >
            <div className="bg-gradient-to-br from-amber-50/80 via-yellow-50/60 to-orange-50/80 backdrop-blur-sm p-12 rounded-3xl border-2 border-amber-200/50 shadow-2xl max-w-2xl mx-auto">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6"
              >
                <Search className="w-20 h-20 text-amber-400 mx-auto" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Oops! No questions found 🤔
              </h3>
              <p className="text-amber-700 text-lg leading-relaxed mb-6">
                We couldn't find any questions matching your search. Try different keywords or browse all categories!
              </p>
              
              {(searchQuery || selectedCategory !== 'all') && (
                <motion.button
                  onClick={clearSearch}
                  className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✨ Clear All Filters
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-400/10 to-orange-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: useTransform(
                    [mouseX, mouseY],
                    ([x, y]) => 
                      `radial-gradient(300px circle at ${x}px ${y}px, rgba(251, 191, 36, 0.15), transparent 50%)`
                  )
                }}
              />
              
              <div className="relative bg-gradient-to-br from-white/90 via-amber-50/30 to-yellow-50/40 backdrop-blur-sm border-2 border-amber-200/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-amber-300/70">
                
                {/* Question Button */}
                <motion.button
                  className="w-full p-8 text-left flex justify-between items-center group-hover:bg-amber-50/40 transition-all duration-300"
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex-1 pr-6">
                    <motion.h3 
                      className="font-bold text-xl text-amber-800 group-hover:text-amber-900 transition-colors mb-2"
                      animate={openIndex === index ? { color: "#92400e" } : {}}
                    >
                      {item.question}
                    </motion.h3>
                    
                    {item.category && (
                      <motion.span
                        className="inline-flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-amber-200 to-yellow-200 text-amber-800 text-sm font-bold rounded-full border border-amber-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-3 h-3" />
                        <span>{item.category}</span>
                      </motion.span>
                    )}
                  </div>
                  
                  <motion.div
                    className="flex-shrink-0 ml-4"
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-sm"
                        animate={openIndex === index ? { scale: 1.5, opacity: 1 } : { scale: 1, opacity: 0 }}
                      />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
                        <ChevronDown className="w-6 h-6" />
                      </div>
                    </div>
                  </motion.div>
                </motion.button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <motion.div
                          className="border-t-2 border-amber-200/50 pt-6 relative"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {/* Decorative elements */}
                          <div className="absolute -top-3 left-8">
                            <motion.div
                              className="w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                              <Sparkles className="w-3 h-3 text-white" />
                            </motion.div>
                          </div>
                          
                          <motion.div
                            className="text-amber-700 leading-relaxed text-lg pl-8 whitespace-pre-line"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            {item.answer}
                          </motion.div>
                          
                          {/* Helpful indicator */}
                          <motion.div
                            className="flex items-center justify-end mt-6 space-x-2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <span className="text-amber-600 text-sm font-medium">Was this helpful?</span>
                            <motion.button
                              className="text-amber-500 hover:text-amber-600 p-1"
                              whileHover={{ scale: 1.2, rotate: 15 }}
                              whileTap={{ scale: 0.8 }}
                            >
                              👍
                            </motion.button>
                            <motion.button
                              className="text-amber-500 hover:text-amber-600 p-1"
                              whileHover={{ scale: 1.2, rotate: -15 }}
                              whileTap={{ scale: 0.8 }}
                            >
                              👎
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating particles on hover */}
              <AnimatePresence>
                {openIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 200],
                          y: [0, (Math.random() - 0.5) * 200],
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                        className="absolute w-2 h-2 bg-amber-400 rounded-full blur-sm"
                        style={{
                          left: Math.random() * 100 + '%',
                          top: Math.random() * 100 + '%'
                        }}
                      />
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Results Counter */}
      {(searchQuery || selectedCategory !== 'all') && filteredItems.length > 0 && (
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100/80 to-yellow-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-200 shadow-lg">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium">
              Showing {filteredItems.length} of {items.length} questions ✨
            </span>
          </div>
        </motion.div>
      )}

      {/* Floating Help Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 text-white rounded-full shadow-2xl hover:shadow-amber-500/50 z-50 flex items-center justify-center group overflow-hidden"
        whileHover={{ 
          scale: 1.1, 
          rotate: 15,
          boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)"
        }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <HelpCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
        
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 border-2 border-white/50 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </div>
  );
};

export default FAQAccordion;