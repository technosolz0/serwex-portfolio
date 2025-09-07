// app/privacy/page.tsx
import SEO from '@/components/SEO';
import PolicyTemplate from '@/components/PolicyTemplate';
import fs from 'fs';
import path from 'path';

export default function Privacy() {
  const content = fs.readFileSync(path.join(process.cwd(), 'content/privacy.md'), 'utf8');

  return (
    <>
      <SEO 
        title="Privacy Policy - Serwex" 
        description="Our privacy policy explains how we handle your data." 
      />
      <PolicyTemplate title="Privacy Policy" content={content} />
    </>
  );
}