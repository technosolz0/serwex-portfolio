import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';
import PolicyTemplate from '@/components/PolicyTemplate';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function PartnerPrivacy() {
  const filePath = path.join(process.cwd(), 'src/content/partner-privacy.md');

  let content: string;
  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    console.error('Missing partner-privacy.md file:', err);
    return notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://serwex.in';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Serwex Partner',
    url: `${baseUrl}/partner/privacy`,
    description: 'Privacy Policy for technicians and service providers using the Serwex Partner app.',
  };

  return (
    <>
      <SEO
        title="Privacy Policy - Serwex Partner"
        description="Read the official Privacy Policy for the Serwex Partner app, explaining how partner data, location tracking, and payouts are managed."
        image="/images/og-image.jpg"
        canonicalUrl={`${baseUrl}/partner/privacy`}
        jsonLd={jsonLd}
      />
      <PolicyTemplate title="Serwex Partner Privacy Policy" content={content} />
    </>
  );
}
