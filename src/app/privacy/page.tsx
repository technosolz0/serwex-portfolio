import SEO from '@/components/SEO';
import PolicyTemplate from '@/components/PolicyTemplate';
import fs from 'fs';
import path from 'path';

export default function Privacy() {
  // Load privacy policy content from Markdown file
  const content = fs.readFileSync(path.join(process.cwd(), 'content/privacy.md'), 'utf8');

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
        title="Privacy Policy - Serwex"
        description="Our privacy policy explains how we handle your data when using Serwex and Serwex_Partner apps."
        image="/images/og-image.jpg" // Replace with actual image
        jsonLd={jsonLd}
      />
      <PolicyTemplate title="Privacy Policy" content={content} />
    </>
  );
}