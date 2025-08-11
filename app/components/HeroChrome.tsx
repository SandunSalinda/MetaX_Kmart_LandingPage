// app/components/HeroChrome.tsx - CHROME-OPTIMIZED VERSION
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { Facebook01Icon, WhatsappIcon, Mail02Icon } from 'hugeicons-react';

export default function HeroChrome() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [alertPosition, setAlertPosition] = useState('out');
  const emailInputRef = useRef<HTMLInputElement>(null);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNotifyMeClick = () => {
    const email = emailInputRef.current?.value;

    if (!email || !isValidEmail(email)) {
      setShowError(true);
      setShowSuccess(false);
      setAlertPosition('in');
      setTimeout(() => setAlertPosition('out'), 3000);
      setTimeout(() => setShowError(false), 3500);
      return;
    }

    setShowError(false);
    setShowSuccess(true);
    
    if (emailInputRef.current) {
      emailInputRef.current.value = '';
    }

    setAlertPosition('in');
    setTimeout(() => {
      setAlertPosition('out');
    }, 3000);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3500);
  };

  return (
    <section className="chrome-section relative flex min-h-[70vh] sm:min-h-[calc(100vh-68px)] w-full flex-col items-center justify-start pt-8 sm:justify-center px-4 py-4 text-center sm:py-12 md:py-16 lg:py-28 xl:py-32 2xl:py-40 4xl:py-64 mb-4 sm:mb-20 md:mb-28">

      {/* Success alert message */}
      {showSuccess && (
        <div className={`fixed top-20 right-0 z-50 transform transition-transform duration-500 ${alertPosition === 'in' ? 'translate-x-0' : 'translate-x-full'} bg-green-500 text-white px-6 py-3 rounded-l-lg shadow-xl chrome-text-fix`}>
          You have been added to the list!
        </div>
      )}

      {/* Error alert message */}
      {showError && (
        <div className={`fixed top-20 right-0 z-50 transform transition-transform duration-500 ${alertPosition === 'in' ? 'translate-x-0' : 'translate-x-full'} bg-red-500 text-white px-6 py-3 rounded-l-lg shadow-xl chrome-text-fix`}>
          Please enter a valid email address.
        </div>
      )}

      {/* SINGLE BACKGROUND IMAGE APPROACH - All products in one positioned image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Desktop Version - Single composite image */}
        <div className="hidden sm:block relative w-full h-full">
          <Image
            src="/products-composite-desktop.png"
            alt="Product showcase"
            fill
            className="object-contain chrome-image-fix"
            style={{
              objectPosition: 'center center',
              transform: 'scale(1) translateZ(0)',
            }}
            priority
          />
        </div>
        
        {/* Mobile Version - Simplified single image */}
        <div className="block sm:hidden relative w-full h-full">
          <Image
            src="/products-composite-mobile.png"
            alt="Product showcase"
            fill
            className="object-contain chrome-image-fix"
            style={{
              objectPosition: 'center center',
              transform: 'scale(1) translateZ(0)',
            }}
            priority
          />
        </div>
      </div>

      {/* Main Content Block - Chrome Optimized */}
      <div className="chrome-container relative z-20 mx-auto flex w-full flex-col items-center justify-center px-4 sm:px-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mt-4 sm:mt-0">

        {/* Tagline - Chrome Fixed */}
        <div 
          className="chrome-text-fix inline-flex items-center justify-center gap-1 rounded-full border border-gray-800 px-3 py-2 text-xs sm:text-sm md:text-base text-center"
          style={{ fontSize: 'clamp(10px, 2.5vw, 16px)' }}
        >
          <span className="font-medium text-gray-800 leading-tight whitespace-nowrap">
            <span className="block sm:hidden">Trending Products • Right at Your Fingertips.</span>
            <span className="hidden sm:block">Trending Products • Affordable Prices • Right at Your Fingertips.</span>
          </span>
        </div>

        {/* Content spacing */}
        <div className="mt-4 sm:mt-8 flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Main Heading - Chrome Fixed */}
          <h1 
            className="chrome-text-fix font-bold text-gray-800 leading-tight text-center"
            style={{ 
              fontSize: 'clamp(32px, 8vw, 80px)',
              lineHeight: '1.1'
            }}
          >
            <span className="block sm:hidden max-w-sm mx-auto">Powering Up Something Exciting</span>
            <span className="hidden sm:block">Powering Up<br />Something Exciting</span>
          </h1>

          {/* Subheading - Chrome Fixed */}
          <p 
            className="chrome-text-fix font-normal text-gray-600 text-center leading-relaxed max-w-md sm:max-w-xl mx-auto"
            style={{ 
              fontSize: 'clamp(14px, 3vw, 24px)',
              lineHeight: '1.5'
            }}
          >
            <span className="block sm:hidden">We are going to launch our website very soon. Stay tuned for an all-new online shopping experience</span>
            <span className="hidden sm:block">We are going to launch our website very soon.<br />Stay tuned for an all-new online shopping experience</span>
          </p>
        </div>

        {/* Email Input and Notify Me Button - Chrome Fixed */}
        <div 
          className="chrome-container mt-6 sm:mt-12 flex w-full max-w-sm sm:max-w-md items-center rounded-full bg-white p-1 shadow-lg"
          style={{ 
            minHeight: 'clamp(40px, 8vw, 60px)'
          }}
        >
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Enter your email"
            className="chrome-text-fix flex-1 min-w-0 rounded-full px-4 text-gray-600 outline-none bg-transparent"
            style={{ 
              fontSize: 'clamp(12px, 3vw, 16px)',
              height: 'clamp(36px, 7vw, 56px)'
            }}
            aria-label="Enter your email address for notifications"
          />
          <button
            onClick={handleNotifyMeClick}
            className="chrome-text-fix flex-shrink-0 flex items-center justify-center gap-2 rounded-full bg-gray-800 px-4 py-2 text-white transition-colors duration-200 hover:bg-red-500 focus:outline-none whitespace-nowrap"
            style={{ 
              fontSize: 'clamp(10px, 2.5vw, 14px)',
              height: 'clamp(36px, 7vw, 56px)',
              minWidth: 'clamp(80px, 20vw, 120px)'
            }}
            aria-label="Notify Me"
          >
            <span className="font-medium">Notify Me</span>
            <Image src="/arrow.svg" alt="Arrow" width={12} height={12} className="chrome-image-fix" />
          </button>
        </div>

      </div>

      {/* Social Media Icons - Chrome Fixed */}
      <div 
        className="chrome-container absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 inline-flex items-center justify-center gap-3 sm:gap-4 z-20"
      >
        <Link 
          href="https://www.facebook.com/share/12L2oSJptNF/" 
          target="_blank" 
          className="chrome-container flex items-center justify-center rounded-2xl bg-gray-800 p-2 sm:p-3 transition-all duration-200 hover:scale-110 focus:outline-none"
          style={{ 
            width: 'clamp(36px, 8vw, 48px)',
            height: 'clamp(36px, 8vw, 48px)'
          }}
        >
          <Facebook01Icon size={20} color="#ffffff" />
        </Link>
        <Link 
          href="https://whatsapp.com" 
          target="_blank" 
          className="chrome-container flex items-center justify-center rounded-2xl bg-gray-800 p-2 sm:p-3 transition-all duration-200 hover:scale-110 focus:outline-none"
          style={{ 
            width: 'clamp(36px, 8vw, 48px)',
            height: 'clamp(36px, 8vw, 48px)'
          }}
        >
          <WhatsappIcon size={20} color="#ffffff" />
        </Link>
        <Link 
          href="mailto:info@example.com" 
          className="chrome-container flex items-center justify-center rounded-2xl bg-gray-800 p-2 sm:p-3 transition-all duration-200 hover:scale-110 focus:outline-none"
          style={{ 
            width: 'clamp(36px, 8vw, 48px)',
            height: 'clamp(36px, 8vw, 48px)'
          }}
        >
          <Mail02Icon size={20} color="#ffffff" />
        </Link>
      </div>
    </section>
  );
}
