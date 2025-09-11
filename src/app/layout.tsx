// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionConfig } from "framer-motion"; // Added for global animation config

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Serwex - Home Services Apps",
  description: "Book trusted home services with Serwex for users and manage bookings with Serwex Partner for vendors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={inter.className}>
        <MotionConfig reducedMotion="user"> {/* Respect user motion preferences */}
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}