// app/components/Footer.tsx
import React from 'react';
import Image from 'next/image'; // Import Image for the logo

export default function Footer() {
  return (
    // Main Footer Container - Full width, rose background
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
          <Image
            src="/rocket.png"
            alt="Rocket icon"
            width={12}
            height={12}
            className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" // Responsive icon, prevent shrinking
            priority
          />
          <span className="font-['Inter'] text-sm sm:text-base font-normal text-white text-center leading-tight whitespace-nowrap">
            Full Online Experience Launching Soon!
          </span>
        </div>

      </div>

    </footer>
  );
}