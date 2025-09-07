// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Added for animations

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  return (
    <motion.header 
      className="bg-white shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logo.png" alt="Serwex Logo" width={120} height={40} className="hover:scale-105 transition-transform" /> {/* Added hover scale */}
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/guide/users" className="hover:text-primary transition-colors">User Guide</Link>
          <Link href="/guide/vendors" className="hover:text-primary transition-colors">Vendor Guide</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="https://play.google.com/store/apps/details?id=com.serwex.user" target="_blank" className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors shadow-glow">Download Serwex</a>
          <a href="https://play.google.com/store/apps/details?id=com.serwex.partner" target="_blank" className="bg-secondary text-white px-4 py-2 rounded hover:bg-tertiary transition-colors shadow-glow">Download Partner</a>
        </div>
        <button className="md:hidden text-2xl hover:rotate-90 transition-transform" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </nav>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        className="md:hidden bg-white px-4 py-2 space-y-2 overflow-hidden"
      >
        <Link href="/" className="block hover:text-primary transition-colors">Home</Link>
        <Link href="/features" className="block hover:text-primary transition-colors">Features</Link>
        <Link href="/guide/users" className="block hover:text-primary transition-colors">User Guide</Link>
        <Link href="/guide/vendors" className="block hover:text-primary transition-colors">Vendor Guide</Link>
        <Link href="/about" className="block hover:text-primary transition-colors">About</Link>
        <Link href="/contact" className="block hover:text-primary transition-colors">Contact</Link>
        <Link href="/faq" className="block hover:text-primary transition-colors">FAQ</Link>
        <a href="https://play.google.com/store/apps/details?id=com.serwex.user" target="_blank" className="block bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors">Download Serwex</a>
        <a href="https://play.google.com/store/apps/details?id=com.serwex.partner" target="_blank" className="block bg-secondary text-white px-4 py-2 rounded hover:bg-tertiary transition-colors">Download Partner</a>
      </motion.div>
    </motion.header>
  );
};

export default Header;