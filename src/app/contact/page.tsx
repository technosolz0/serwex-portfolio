// app/contact/page.tsx
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us - Serwex" 
        description="Get in touch with us for any questions about Serwex or Serwex_Partner." 
      />
      <section className="py-12 bg-bg-light">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-3xl font-bold text-center mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <motion.div 
              className="space-y-4"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg">Phone: +91-123-4567890 (placeholder)</p>
              <p className="text-lg">Email: support@serwex.com (placeholder)</p>
              <p className="text-lg">Address: HQ, City, India (placeholder)</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}