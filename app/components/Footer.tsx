// app/components/Footer.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import Image for the logo
import { Rocket01Icon, ArrowUp01Icon } from 'hugeicons-react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button when user scrolls down more than one screen height
      setShowBackToTop(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-20 z-50 flex h-8 w-8 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[var(--color-rose-500)] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[var(--color-neutral-800)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neutral-800)] focus:ring-offset-2"
          aria-label="Back to top"
        >
          <ArrowUp01Icon size={24} color="#ffffff" className="sm:w-4 sm:h-4" />
        </button>
      )}

      {/* Main Footer Container - Full width, rose background */}
      <footer className="relative flex min-h-[140px] sm:min-h-[160px] w-full flex-col items-center justify-center bg-[#FC5154]"> {/* Responsive height */}

      {/* Content Wrapper - Centers content within max-width */}
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-3 sm:gap-4 py-8 sm:py-10 px-4">

        {/* K Mart Logo - Responsive sizing */}
        <div className="inline-flex items-center justify-center gap-1">
          <Image
            src="/kmart logo white.svg" 
            alt="Kmart Logo"
            width={120} 
            height={31} 
            className="h-8 sm:h-9 w-auto" // Responsive logo size
            priority
          />
        </div>

        {/* Launch Message - Responsive text, single line on all devices */}
        <div className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2">
          <Rocket01Icon size={24} color="#ffffff" />
          <span className="font-['Inter'] text-sm sm:text-base font-normal text-white text-center leading-tight whitespace-nowrap">
            Full Online Experience Launching Soon!
          </span>
        </div>

      </div>

    </footer>
    </>
  );
}