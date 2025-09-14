import fs from "fs/promises";
import path from "path";
import SEO from "@/components/SEO";
import AboutClient from "./AboutClient"; // Client component

export default async function AboutPage() {
  const contentPath = path.join(process.cwd(), "src/content/about.md");
  let content = "";

  try {
    content = await fs.readFile(contentPath, "utf8");
  } catch (err) {
    console.error("Error reading about.md:", err);
    content = "Content not available.";
  }

  return (
    <>
      <SEO
        title="About Serwex"
        description="Learn about our mission to make home services easy."
        canonicalUrl="https://serwex.in/about"
      />
      <AboutClient content={content} />
    </>
  );
}
