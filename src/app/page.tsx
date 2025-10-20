"use client";
import SEO from "@/components/SEO";
import FeatureCard from "@/components/FeatureCard";
import AppMockup from "@/components/AppMockup";
import { motion } from "framer-motion";
import "./globals.css";

export default function Home() {
  const jsonLd = {
    "@type": "WebSite",
    name: "Serwex",
    url: "https://serwex.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://serwex.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const features = [
    {
      icon: "📱",
      title: "Register Easily",
      description:
        "Sign up in seconds with a seamless onboarding process and smart verification.",
    },
    {
      icon: "🔧",
      title: "Find Technicians",
      description:
        "Connect with trusted professionals for all your home needs instantly.",
    },
    {
      icon: "💰",
      title: "Compare Prices",
      description:
        "Get transparent pricing and choose the best deal with detailed breakdowns.",
    },
    {
      icon: "⭐",
      title: "Real Ratings",
      description:
        "Book with confidence using verified user reviews and authentic feedback.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Serwex transformed how I find home services. The quality and reliability are outstanding!",
      author: "Karan Gupta",
      role: "Homeowner",
      avatar: "K",
    },
    {
      quote:
        "The app is incredibly intuitive and saved me both time and money. Highly recommended!",
      author: "Aman Shaikh",
      role: "Business Owner",
      avatar: "A",
    },
    {
      quote:
        "Best home services platform I&apos;ve used. Quick bookings and professional service every time!",
      author: "Priya Sharma",
      role: "Working Professional",
      avatar: "P",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Users", icon: "👥" },
    { number: "500+", label: "Verified Technicians", icon: "🛠️" },
    { number: "15+", label: "Service Categories", icon: "📋" },
    { number: "4.8", label: "App Rating", icon: "⭐" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <SEO
        title="Serwex — Book Trusted Home Services in Minutes"
        description="Find trusted technicians, compare prices, and book with real ratings. For service providers, Serwex Partner makes managing bookings and prices effortless."
        jsonLd={jsonLd}
        canonicalUrl="https://serwex.in"
      />

      {/* Hero Section */}
      <motion.section
        className="hero relative overflow-hidden bg-gradient-primary text-white py-20 md:py-28 lg:py-36 min-h-screen flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                🚀 India&apos;s Leading Home Services Platform
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-white"
            >
              Serwex
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-white/90">
                Trusted Home Services in Minutes
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90"
            >
              Experience the future of home services. Connect with verified
              technicians, get transparent pricing, and book instantly with real
              user ratings. For vendors, manage your business effortlessly with
              Serwex Partner.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
            >
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.serwex.user"
                target="_blank"
                className="btn-primary relative group flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">📱 Download Serwex</span>
                <motion.span className="group-hover:translate-x-1 transition-transform">
                  →
                </motion.span>
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner"
                target="_blank"
                className="btn-secondary relative group flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">🤝 Join as Partner</span>
                <motion.span className="group-hover:translate-x-1 transition-transform">
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="features py-24 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
              ✨ Why Choose Serwex?
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient-primary">
              Built for Your Convenience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience seamless home services with cutting-edge features
              designed for modern living.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="screenshots py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              📱 Experience the App
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Designed for Perfection
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our intuitive interface crafted for both users and service
              providers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AppMockup
              screenshots={["/images/mockup-user.png", "/images/mockup-vendor.png"]}
            />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="testimonials py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-yellow-100 text-primary rounded-full text-sm font-semibold mb-4">
              💬 User Stories
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient-primary">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from real people who trust Serwex for their home
              service needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.author}
                      </h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>

                  <blockquote className="text-gray-700 text-lg italic leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta py-24 bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Home Services Experience?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied customers who&apos;ve made the smart
              switch to Serwex.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.serwex.user"
                target="_blank"
                className="btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🚀</span>
                Get Started Today
              </motion.a>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.serwex.serwex_partner"
                target="_blank"
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💼</span>
                Join as Partner
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
