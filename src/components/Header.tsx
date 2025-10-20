// // // components/Header.tsx

// // "use client";
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { useState } from 'react';
// // import { motion } from 'framer-motion'; // Added for animations

// // const Header: React.FC = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const menuVariants = {
// //     hidden: { opacity: 0, height: 0 },
// //     visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
// //   };

// //   return (
// //     <motion.header 
// //       className="bg-white shadow-md sticky top-0 z-50"
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ duration: 0.5 }}
// //     >
// //       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
// //         <Link href="/">
// //           <Image src="/images/logo.png" alt="Serwex Logo" width={120} height={40} className="hover:scale-105 transition-transform" unoptimized   /> {/* Added hover scale */}
// //         </Link>
// //         <div className="hidden md:flex space-x-6">
// //           <Link href="" className="hover:text-primary transition-colors">Home</Link>
// //           <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
// //           <Link href="/guide/users" className="hover:text-primary transition-colors">User Guide</Link>
// //           <Link href="/guide/vendors" className="hover:text-primary transition-colors">Vendor Guide</Link>
// //           <Link href="/about" className="hover:text-primary transition-colors">About</Link>
// //           <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
// //           <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
// //         </div>
// //         <div className="hidden md:flex space-x-4">
// //           <a href="https://play.google.com/store/apps/details?id=com.serwex.user" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors shadow-glow">Download Serwex</a>
// //           <a href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner" target="_blank" className="bg-secondary text-white px-4 py-2 rounded hover:bg-tertiary transition-colors shadow-glow">Download Partner</a>
// //         </div>
// //         <button className="md:hidden text-2xl hover:rotate-90 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>
// //           ☰
// //         </button>
// //       </nav>
// //       <motion.div
// //         variants={menuVariants}
// //         initial="hidden"
// //         animate={isMenuOpen ? "visible" : "hidden"}
// //         className="md:hidden bg-white px-4 py-2 space-y-2 overflow-hidden"
// //       >
// //         <Link href="/" className="block hover:text-primary transition-colors">Home</Link>
// //         <Link href="/features" className="block hover:text-primary transition-colors">Features</Link>
// //         <Link href="/guide/users" className="block hover:text-primary transition-colors">User Guide</Link>
// //         <Link href="/guide/vendors" className="block hover:text-primary transition-colors">Vendor Guide</Link>
// //         <Link href="/about" className="block hover:text-primary transition-colors">About</Link>
// //         <Link href="/contact" className="block hover:text-primary transition-colors">Contact</Link>
// //         <Link href="/faq" className="block hover:text-primary transition-colors">FAQ</Link>
// //         <a href="https://play.google.com/store/apps/details?id=com.serwex.user" target="_blank" className="block bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors">Download Serwex</a>
// //         <a href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner" target="_blank" className="block bg-secondary text-white px-4 py-2 rounded hover:bg-tertiary transition-colors">Download Partner</a>
// //       </motion.div>
// //     </motion.header>
// //   );
// // };

// // export default Header;


// "use client";
// import Link from 'next/link';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 20;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuVariants = {
//     hidden: { 
//       opacity: 0, 
//       height: 0,
//       transition: { duration: 0.3, ease: "easeInOut" }
//     },
//     visible: { 
//       opacity: 1, 
//       height: 'auto',
//       transition: { duration: 0.3, ease: "easeInOut" }
//     },
//   };

//   const navItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.1, duration: 0.3 }
//     })
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/features", label: "Features" },
//     { href: "/guide/users", label: "User Guide" },
//     { href: "/guide/vendors", label: "Vendor Guide" },
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//     { href: "/faq", label: "FAQ" }
//   ];

//   return (
//     <motion.header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
//           : 'bg-white shadow-md'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/" className="group">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="relative"
//             >
//               <Image 
//                 src="/images/logo.png" 
//                 alt="Serwex Logo" 
//                 width={120} 
//                 height={40} 
//                 className="transition-all duration-300 group-hover:brightness-110" 
//                 unoptimized   
//               />
//               <motion.div
//                 className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
//                 layoutId="logo-bg"
//                 transition={{ duration: 0.2 }}
//               />
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.div
//                 key={item.href}
//                 custom={index}
//                 variants={navItemVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 <Link 
//                   href={item.href} 
//                   className="relative text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium group"
//                 >
//                   {item.label}
//                   <motion.div
//                     className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"
//                   />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Desktop CTA Buttons */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <motion.a 
//               href="https://play.google.com/store/apps/details?id=com.serwex.user" 
//               target="_blank" 
//               className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
//               whileHover={{ scale: 1.05, y: -1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 📱 Download Serwex
//               </span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               />
//             </motion.a>
            
//             <motion.a 
//               href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner" 
//               target="_blank" 
//               className="relative bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group overflow-hidden"
//               whileHover={{ scale: 1.05, y: -1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 🤝 Join Partner
//               </span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               />
//             </motion.a>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button 
//             className="lg:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <motion.div
//               className="w-6 h-0.5 bg-gray-600 absolute transition-all duration-300"
//               animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
//             />
//             <motion.div
//               className="w-6 h-0.5 bg-gray-600 absolute transition-all duration-300"
//               animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
//             />
//             <motion.div
//               className="w-6 h-0.5 bg-gray-600 absolute transition-all duration-300"
//               animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
//             />
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               variants={menuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md mt-4 rounded-2xl shadow-xl border border-gray-100"
//             >
//               <div className="px-6 py-4 space-y-4">
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.href}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Link 
//                       href={item.href} 
//                       className="block text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-50"
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   </motion.div>
//                 ))}
                
//                 <div className="pt-4 border-t border-gray-200 space-y-3">
//                   <motion.a 
//                     href="https://play.google.com/store/apps/details?id=com.serwex.user" 
//                     target="_blank" 
//                     className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:from-blue-600 hover:to-blue-700 shadow-lg"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     onClick={() => setIsMenuOpen(false)}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     📱 Download Serwex
//                   </motion.a>
                  
//                   <motion.a 
//                     href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner" 
//                     target="_blank" 
//                     className="block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:from-purple-600 hover:to-purple-700 shadow-lg"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                     onClick={() => setIsMenuOpen(false)}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     🤝 Join as Partner
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </motion.header>
//   );
// };

// export default Header;




"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/guide/users", label: "User Guide" },
    { href: "/guide/vendors", label: "Vendor Guide" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-tertiary"
          : "bg-white shadow-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src="/images/logo.png"
                alt="Serwex Logo"
                width={120}
                height={40}
                className="transition-all duration-300 group-hover:brightness-110"
                unoptimized
              />
              <motion.div
                className="absolute -inset-2 bg-gradient-accent2 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                layoutId="logo-bg"
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  className="relative text-gray-700 hover:text-primary transition-colors duration-300 font-medium group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.serwex.user"
              target="_blank"
              className="btn-primary relative group flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">📱 Download Serwex</span>
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner"
              target="_blank"
              className="btn-secondary relative group flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">🤝 Join Partner</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-gray-600 absolute transition-all duration-300"
              animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-gray-600 absolute transition-all duration-300"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-gray-600 absolute transition-all duration-300"
              animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md mt-4 rounded-2xl shadow-xl border border-tertiary"
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-primary transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-yellow-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 border-t border-tertiary space-y-3">
                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.serwex.user"
                    target="_blank"
                    className="block btn-primary text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📱 Download Serwex
                  </motion.a>

                  <motion.a
                    href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner"
                    target="_blank"
                    className="block btn-secondary text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🤝 Join as Partner
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;