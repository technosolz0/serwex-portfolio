// components/Footer.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing with email:', email);
      // You can add your email subscription logic here
      setEmail('');
    }
  };

  return (
    <footer className="bg-gradient-accent text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          aria-label="About Serwex"
        >
          <h4 className="font-bold mb-4">Serwex</h4>
          <p>Book trusted home services easily.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          aria-label="Footer Links"
        >
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          aria-label="Newsletter Subscription"
        >
          <h4 className="font-bold mb-4">Newsletter (Optional)</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col items-start">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full p-2 mb-2 text-text-dark rounded border border-tertiary focus:outline-none focus:border-accent"
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors shadow-soft"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <div className="text-center mt-8">
        &copy; 2025 Serwex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
