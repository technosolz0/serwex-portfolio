


"use client"
import SEO from '@/components/SEO';
import FeatureCard from '@/components/FeatureCard';
import AppMockup from '@/components/AppMockup';
import { motion } from 'framer-motion';
import './globals.css';

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

  const features = [
    { icon: "📱", title: "Register Easily", description: "Sign up in seconds with a seamless onboarding process." },
    { icon: "🔧", title: "Find Technicians", description: "Connect with trusted professionals for all your home needs." },
    { icon: "💰", title: "Compare Prices", description: "Get transparent pricing and choose the best deal." },
    { icon: "⭐", title: "Real Ratings", description: "Book with confidence using verified user reviews." }
  ];

  const testimonials = [
    { quote: "Serwex made finding a reliable technician so easy!", author: "Jane D." },
    { quote: "The app is intuitive and saved me time and money.", author: "Mark S." }
  ];

  return (
    <>
      <SEO 
        title="Serwex — Book Trusted Home Services in Minutes"
        description="Find trusted technicians, compare prices, and book with real ratings. For service providers, Serwex Partner makes managing bookings and prices effortless."
        jsonLd={jsonLd}
        canonicalUrl="https://yourdomain.com"
      />
      <motion.section 
        className="hero bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16 md:py-24 lg:py-32 text-center min-h-[80vh] flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Serwex — Trusted Home Services in Minutes
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover trusted technicians, compare prices, and book instantly with real user ratings. Vendors, manage bookings effortlessly with Serwex Partner.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <a 
              href="https://play.google.com/store/apps/details?id=com.serwex.user" 
              target="_blank" 
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Download Serwex (Users)
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.serwex.partner" 
              target="_blank" 
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-100 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Download Serwex Partner (Vendors)
            </a>
          </motion.div>
        </div>
      </motion.section>

      <section className="features py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Serwex?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FeatureCard 
                  icon={feature.icon} 
                  title={feature.title} 
                  description={feature.description} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="screenshots py-16 bg-gradient-to-br from-purple-500 to-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Explore the App
          </motion.h2>
          <AppMockup screenshots={['/images/mockup-user.png', '/images/mockup-vendor.png']} />
        </div>
      </section>

      <section className="testimonials py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Users Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-lg italic text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                <p className="text-sm font-semibold text-gray-800">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}