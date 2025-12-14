import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Verify this path matches src/components/Footer.tsx
import { MotionConfig } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serwex - Home Services Apps",
  description: "Book trusted home services with Serwex for users and manage bookings with Serwex Partner for vendors.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="flex-1 pt-20 pb-8">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
