import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';
import PolicyTemplate from '@/components/PolicyTemplate';

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour for ISR

export default async function Privacy() {
  const filePath = path.join(process.cwd(), 'src/content/privacy.md');

  let content: string;
  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    console.error('Missing privacy.md file:', err);
    return notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com';
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
        title="Privacy Policy - Serwex"
        description="Our privacy policy explains how we handle your data when using Serwex and Serwex Partner apps."
        image="/images/og-image.jpg"
        canonicalUrl={`${baseUrl}/privacy`}
        jsonLd={jsonLd}
      />
      <PolicyTemplate title="Privacy Policy" content={content} />
    </>
  );
}