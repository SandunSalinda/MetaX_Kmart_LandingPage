// app/layout.tsx
// Make sure this file exists at app/layout.tsx (or src/app/layout.tsx if you chose src/)

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Import the additional Google Fonts from your design
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

import "./globals.css"; // Keep this import for your global styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'], // Use weights from your Figma design/plugin output
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans', // This variable name must be consistent
});

// Configure Inter
const inter = Inter({
  weight: ['300', '400', '500', '600'], // Use weights from your Figma design/plugin output
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // This variable name must be consistent
});

export const metadata: Metadata = {
  title: "K Mart - Your Ultimate Shopping Destination in Sri Lanka",
  description: "Discover the best electronics, gadgets, and accessories at K Mart. Located in Kebithigollewa, Sri Lanka. Quality products, great prices, and excellent service.",
  icons: {
    icon: '/favicon-kmart.png',
    shortcut: '/favicon-kmart.png',
    apple: '/favicon-kmart.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply all font variables to the <html> tag
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}