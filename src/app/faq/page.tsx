import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import SEO from '@/components/SEO';
import FAQClient from './FAQClient';

export const dynamic = 'force-static';
export const revalidate = 3600;

export default function FAQ() {
  let content: string;

  try {
    content = fs.readFileSync(
      path.join(process.cwd(), 'src/content/faq.md'),
      'utf8'
    );
  } catch (err) {
    console.error('Missing faq.md file:', err);
    return notFound();
  }

  const items = content
    .split('## ')
    .slice(1)
    .map((section) => {
      const [question, ...answerParts] = section.split('\n').filter(Boolean);
      return { question, answer: answerParts.join('\n') };
    });

  return (
    <>
      <SEO
        title="FAQ - Serwex"
        description="Answers to common questions about our apps."
        canonicalUrl="https://serwex.in/faq"
      />
      <FAQClient items={items} />
    </>
  );
}
