import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';
import PolicyTemplate from '@/components/PolicyTemplate';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default async function PartnerTerms() {
  const filePath = path.join(process.cwd(), 'src/content/partner-terms.md');

  let content: string;
  try {
    content = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    console.error('Missing partner-terms.md file:', err);
    return notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://serwex.in';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Serwex Partner',
    url: `${baseUrl}/partner/terms`,
    description: 'Terms and Conditions for service providers and partners using the Serwex Partner app.',
  };

  return (
    <>
      <SEO
        title="Terms & Conditions - Serwex Partner"
        description="Official Terms and Conditions for technicians, service providers, and vendors using the Serwex Partner app."
        image="/images/og-image.jpg"
        canonicalUrl={`${baseUrl}/partner/terms`}
        jsonLd={jsonLd}
      />
      <PolicyTemplate title="Serwex Partner Terms & Conditions" content={content} />
    </>
  );
}
