import SEO from '@/components/SEO';
import PolicyTemplate from '@/components/PolicyTemplate';
import fs from 'fs';
import path from 'path';

export default function Refund() {
  // Load terms content from Markdown file
  const content = fs.readFileSync(path.join(process.cwd(), 'src/content/REFUND.md'), 'utf8');

  // JSON-LD for Organization (rich results)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Serwex',
    url: 'https://serwex.in', // Replace with actual domain
    description: 'Serwex connects users with trusted home service providers.',
  };

  return (
    <>
      <SEO
        title="Refund Policy - Serwex"
        description="Our refund policy for using the Serwex website and apps."
        image="/images/og-image.jpg" // Replace with actual image
        jsonLd={jsonLd} canonicalUrl={'https://serwex.in/refund'}      />
      <PolicyTemplate title="Refund Policy" content={content} />
    </>
  );
}