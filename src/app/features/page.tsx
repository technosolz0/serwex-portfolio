import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';
import FeaturesClient from './FeaturesClient';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function Features() {
  let userFeaturesMd: string;
  let vendorFeaturesMd: string;

  try {
    userFeaturesMd = fs.readFileSync(
      path.join(process.cwd(), 'src/content/features-user.md'),
      'utf8'
    );
    vendorFeaturesMd = fs.readFileSync(
      path.join(process.cwd(), 'src/content/features-vendor.md'),
      'utf8'
    );
  } catch (err) {
    console.error('Missing features markdown files:', err);
    return notFound();
  }

  // Parse markdown into features
  const parseFeatures = (md: string) =>
    md
      .split('## ')
      .slice(1)
      .map((section) => {
        const [title, description] = section.split('\n').filter(Boolean);
        return { title, description, icon: '🛠️' }; // Replace with proper icons later
      });

  const userFeatures = parseFeatures(userFeaturesMd);
  const vendorFeatures = parseFeatures(vendorFeaturesMd);

  return (
    <>
      <SEO
        title="Features of Serwex and Serwex Partner"
        description="Discover all features for users and vendors in our home services apps."
        canonicalUrl="https://yourdomain.com/features"
      />
      <FeaturesClient userFeatures={userFeatures} vendorFeatures={vendorFeatures} />
    </>
  );
}
