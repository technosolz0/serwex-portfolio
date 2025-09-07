"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = "/images/og-image.jpg",
  jsonLd,
}) => {
  const pathname = usePathname();
  const canonicalUrl = `https://yourdomain.com${pathname}`; // Replace with actual domain

  return (
    <>
      {/* Standard SEO tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Locale */}
      <meta name="locale" content="en_IN" />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Example: Analytics placeholder (GDPR consent required) */}
      {/* <Script src="https://your-analytics-script.js" strategy="afterInteractive" /> */}
    </>
  );
};

export default SEO;
