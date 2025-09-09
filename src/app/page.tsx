// app/page.tsx (Home Page)
"use client"
import SEO from '@/components/SEO';
import FeatureCard from '@/components/FeatureCard';
import AppMockup from '@/components/AppMockup';
import { motion } from 'framer-motion';

export default function Home() {
  const jsonLd = {
    "@type": "WebSite",
    name: "Serwex",
    url: "https://yourdomain.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourdomain.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO 
        title="Serwex — Book trusted home services in minutes" 
        description="Find trusted technicians, compare prices, and book with real ratings. For service providers, Serwex_Partner makes managing bookings and prices easy." 
        jsonLd={jsonLd} 
      />
      <motion.section 
        className="hero hero-bg gradient-primary text-white py-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Serwex — Book trusted home services in minutes
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Find trusted technicians, compare prices, and book with real ratings. For service providers, Serwex_Partner makes managing bookings and prices easy.
          </motion.p>
          <motion.div 
            className="space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://play.google.com/store/apps/details?id=com.serwex.user" target="_blank" className="bg-white text-primary px-6 py-3 rounded hover:bg-accent hover:text-white transition-colors shadow-glow">Download Serwex (Users)</a>
            <a href="https://play.google.com/store/apps/details?id=com.serwex.partner" target="_blank" className="bg-white text-secondary px-6 py-3 rounded hover:bg-tertiary hover:text-white transition-colors shadow-glow">Download Serwex_Partner (Vendors)</a>
          </motion.div>
        </div>
      </motion.section>
      <section className="features py-12">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Quick Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon="📱" title="Register Easily" description="Sign up in seconds." />
            {/* Add more with animations inherited */}
          </div>
        </div>
      </section>
      <section className="screenshots py-12 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            App Screenshots
          </motion.h2>
          <AppMockup screenshots={['/images/mockup-user.png', '/images/mockup-vendor.png']} />
        </div>
      </section>
      <section className="testimonials py-12">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by Users
          </motion.h2>
          {/* Enhanced testimonial with motion */}
          <motion.p 
            className="text-center text-lg italic"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >&quot;Great app for booking services!&quot; - Happy User
          </motion.p>
        </div>
      </section>
    </>
  );
}