// app/features/page.tsx
import SEO from '@/components/SEO';
import FeatureCard from '@/components/FeatureCard';
import fs from 'fs';
import path from 'path';
import { motion } from 'framer-motion';
// import ReactMarkdown from 'react-markdown'; // Not needed if parsing to cards

export default function Features() {
  const userFeaturesMd = fs.readFileSync(path.join(process.cwd(), 'content/features-user.md'), 'utf8');
  const vendorFeaturesMd = fs.readFileSync(path.join(process.cwd(), 'content/features-vendor.md'), 'utf8');

  // Parse markdown to array of features
  const parseFeatures = (md: string) => md.split('## ').slice(1).map(section => {
    const [title, description] = section.split('\n').filter(Boolean);
    return { title, description, icon: '🛠️' }; // Placeholder icons; customize per feature
  });

  const userFeatures = parseFeatures(userFeaturesMd);
  const vendorFeatures = parseFeatures(vendorFeaturesMd);

  return (
    <>
      <SEO 
        title="Features of Serwex and Serwex Partner" 
        description="Discover all features for users and vendors in our home services apps." 
      />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-3xl font-bold text-center mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            App Features
          </motion.h1>
          <motion.h2 
            className="text-2xl font-bold mb-4 text-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            For Users (Serwex)
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {userFeatures.map((feat, idx) => (
              <FeatureCard key={idx} icon={feat.icon} title={feat.title} description={feat.description} />
            ))}
          </div>
          <motion.h2 
            className="text-2xl font-bold mb-4 text-secondary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            For Vendors (Serwex Partner)
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vendorFeatures.map((feat, idx) => (
              <FeatureCard key={idx} icon={feat.icon} title={feat.title} description={feat.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}