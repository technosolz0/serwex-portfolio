// components/Footer.tsx
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-accent text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h4 className="font-bold mb-4">Serwex</h4>
          <p>Book trusted home services easily.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h4 className="font-bold mb-4">Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-accent transition-colors">Terms</Link></li>
            <li><Link href="/guide/users" className="hover:text-accent transition-colors">App Guide - Users</Link></li>
            <li><Link href="/guide/vendors" className="hover:text-accent transition-colors">App Guide - Vendors</Link></li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h4 className="font-bold mb-4">Newsletter (Optional)</h4>
          <input type="email" placeholder="Your email" className="w-full p-2 mb-2 text-text-dark rounded border border-tertiary focus:outline-none focus:border-accent" />
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors shadow-soft">Subscribe</button>
        </motion.div>
      </div>
      <div className="text-center mt-8">
        &copy; 2025 Serwex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;