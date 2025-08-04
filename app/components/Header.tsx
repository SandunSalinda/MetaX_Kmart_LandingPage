// app/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true); // Controls visibility (opacity)
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false); // Controls background/shadow
  const [isAtVeryTop, setIsAtVeryTop] = useState(true); // Controls transparent state at scrollY 0
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controls mobile menu
  const lastScrollY = useRef(0); // To track scroll direction

  useEffect(() => {
    const headerHeight = 68; // Approximate height of your header
    const heroThreshold = 400; // Adjust this based on when you want the header to vanish (e.g., half of hero)

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHasScrolledPastHero(currentScrollY > heroThreshold);

      if (currentScrollY > lastScrollY.current && currentScrollY > headerHeight) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true);
      }

      setIsAtVeryTop(currentScrollY === 0);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or on links
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const headerBgClass = isAtVeryTop ? 'bg-transparent' : 'bg-white shadow-sm';
  const headerVisibilityClass = showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none';

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${headerBgClass} ${headerVisibilityClass}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">

        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-1">
          <Image
            src="/kmart logo.svg"
            alt="Kmart Logo"
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile, visible on tablet and up */}
        <nav className="hidden md:flex items-center gap-6">
          {/* About Link */}
          <Link
            href="#about-us"
            className="text-base font-medium text-[var(--color-neutral-800)] transition-colors duration-200 hover:text-[var(--color-rose-500)]"
          >
            About
          </Link>

          {/* Contact Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-us');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2.5 rounded-[60px] bg-[#FC5154] px-4 py-2 transition-colors duration-200 hover:bg-[var(--color-rose-600)]"
          >
            <span className="text-base font-medium text-white font-['Plus_Jakarta_Sans']">Contact</span>
          </button>
        </nav>

        {/* Mobile Hamburger Menu Button - Visible only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-[var(--color-neutral-800)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[var(--color-neutral-800)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[var(--color-neutral-800)] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full right-0 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
        <nav className="py-2">
          {/* About Link */}
          <Link
            href="#about-us"
            onClick={handleLinkClick}
            className="block px-4 py-3 text-base font-medium text-[var(--color-neutral-800)] transition-colors duration-150 hover:bg-gray-50"
          >
            About
          </Link>

          {/* Divider */}
          <div className="mx-4 border-t border-gray-100"></div>

          {/* Contact Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-us');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
              handleLinkClick();
            }}
            className="block w-full text-left px-4 py-3 text-base font-medium text-[#FC5154] transition-colors duration-150 hover:bg-gray-50"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
