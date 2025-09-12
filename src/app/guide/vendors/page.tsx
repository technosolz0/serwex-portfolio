import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import VendorGuideClient from './VendorGuideClient';

export const dynamic = 'force-static';
export const revalidate = 3600;

const VENDOR_GUIDE_PATH = path.join(process.cwd(), 'src/content/guide-vendors.md');

export default async function VendorGuide() {
  let content: string;

  try {
    content = await fs.readFile(VENDOR_GUIDE_PATH, 'utf8');
  } catch {
    return notFound();
  }

  return <VendorGuideClient content={content} />;
}
