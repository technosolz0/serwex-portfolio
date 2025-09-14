"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing with email:", email);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-accent text-white py-12 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="font-bold text-lg mb-4 text-gradient-primary">Serwex</h4>
          <p className="text-sm">Book trusted home services easily.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          aria-label="Footer Links"
        >
          <h4 className="font-bold text-lg mb-4 text-gradient-primary">Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-yellow-200 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-200 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-yellow-200 transition-colors">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-yellow-200 transition-colors">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/guide/users" className="hover:text-yellow-200 transition-colors">
                App Guide - Users
              </Link>
            </li>
            <li>
              <Link href="/guide/vendors" className="hover:text-yellow-200 transition-colors">
                App Guide - Vendors
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
          aria-label="Newsletter Subscription"
        >
          <h4 className="font-bold text-lg mb-4 text-gradient-primary">Newsletter</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col items-start">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="input-enhanced w-full p-2 mb-2"
              aria-label="Email Address"
              autoComplete="off"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <div className="text-center mt-8 text-sm">
        &copy; 2025 Serwex. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;