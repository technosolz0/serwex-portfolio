import SEO from '@/components/SEO';
import PolicyTemplate from '@/components/PolicyTemplate';
import fs from 'fs';
import path from 'path';

export default function Terms() {
  // Load terms content from Markdown file
  const content = fs.readFileSync(path.join(process.cwd(), 'content/terms.md'), 'utf8');

  // JSON-LD for Organization (rich results)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Serwex',
    url: 'https://yourdomain.com', // Replace with actual domain
    description: 'Serwex connects users with trusted home service providers.',
  };

  return (
    <>
      <SEO
        title="Terms & Conditions - Serwex"
        description="Our terms and conditions for using the Serwex website and apps."
        image="/images/og-image.jpg" // Replace with actual image
        jsonLd={jsonLd} canonicalUrl={''}      />
      <PolicyTemplate title="Terms & Conditions" content={content} />
    </>
  );
}