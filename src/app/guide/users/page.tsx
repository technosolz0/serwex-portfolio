// app/guide/users/page.tsx
import SEO from '@/components/SEO';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import UserGuideContent from './UserGuideContent';

export default function UserGuide() {
  const content = fs.readFileSync(
    path.join(process.cwd(), 'src/content/guide-users.md'),
    'utf8'
  );

  return (
    <>
      <SEO
        title="User Guide for Serwex"
        description="Step-by-step guide to using the Serwex app for booking services."
        canonicalUrl="https://yourdomain.com/guide/users"
      />
      <UserGuideContent content={content} />
    </>
  );
}
