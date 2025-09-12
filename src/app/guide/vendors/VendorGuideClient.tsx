'use client';

import SEO from '@/components/SEO';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import remarkGfm from 'remark-gfm';

export default function VendorGuideClient({ content }: { content: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Serwex',
    url: baseUrl,
    description: 'Serwex connects users with trusted home service providers.',
  };

  return (
    <>
      <SEO
        title="Vendor Guide for Serwex"
        description="Step-by-step guide for vendors to manage services and bookings on the Serwex Partner app."
        image="/images/og-image.jpg"
        canonicalUrl={`${baseUrl}/guide/vendors`}
        jsonLd={jsonLd}
      />
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-bold text-center text-primary mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Vendor Guide: Getting Started with Serwex Partner
          </motion.h1>
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactMarkdown
              className="prose prose-lg mx-auto prose-headings:text-primary prose-li:list-decimal prose-a:text-blue-600 hover:prose-a:underline"
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </section>
    </>
  );
}
