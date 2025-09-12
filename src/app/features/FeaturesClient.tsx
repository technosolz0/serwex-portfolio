'use client';

import { motion } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function FeaturesClient({
  userFeatures,
  vendorFeatures,
}: {
  userFeatures: Feature[];
  vendorFeatures: Feature[];
}) {
  return (
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
            <FeatureCard
              key={idx}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
            />
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
            <FeatureCard
              key={idx}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

