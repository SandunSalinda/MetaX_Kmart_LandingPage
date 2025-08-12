'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Facebook01Icon, WhatsappIcon, Mail02Icon } from 'hugeicons-react';

export default function Hero() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [alertPosition, setAlertPosition] = useState('out');
  const [isChrome, setIsChrome] = useState(false);
  const [isDetected, setIsDetected] = useState(false); // Prevent re-detection
  const emailInputRef = useRef<HTMLInputElement>(null);

  // Stable Chrome detection that runs only once
  useEffect(() => {
    if (!isDetected) {
      const userAgent = navigator.userAgent.toLowerCase();
      const isChromeBrowser = userAgent.includes('chrome') && !userAgent.includes('edg');
      setIsChrome(isChromeBrowser);
      setIsDetected(true);
    }
  }, [isDetected]);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Stable callback to prevent re-renders
  const handleNotifyMeClick = useCallback(() => {
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
  }, []);

  // Memoized class name to prevent changes during re-renders - STABILIZED
  const sectionClassName = React.useMemo(() => {
    return `relative flex min-h-[70vh] sm:min-h-[calc(100vh-68px)] w-full flex-col items-center justify-start pt-8 sm:justify-center px-4 py-4 text-center sm:py-12 md:py-16 lg:py-28 xl:py-32 2xl:py-40 4xl:py-64 mb-8 sm:mb-20 md:mb-28 ${isChrome ? 'chrome-hero chrome-hero-stable' : ''}`;
  }, [isChrome]);

  // Memoized image container style to prevent re-renders - PREVENTS JUMPING
  const imageContainerStyle = React.useMemo(() => ({
    backfaceVisibility: 'hidden' as const,
    WebkitBackfaceVisibility: 'hidden' as const,
    willChange: 'transform' as const,
    transformStyle: 'preserve-3d' as const,
  }), []);

  return (
    <section className={sectionClassName}>

      {/* Main Content Block */}
      <div className="relative z-20 mx-auto flex w-full flex-col items-center justify-center px-8 sm:px-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 4xl:max-w-[1600px] mt-4 sm:mt-0">

        {/* Tagline */}
        <div className="inline-flex items-center justify-center gap-1 2xl:gap-2 rounded-[60px] 4xl:rounded-[120px] outline outline-1 4xl:outline-2 outline-offset-[-1px] 4xl:outline-offset-[-2px] outline-[var(--color-neutral-800)] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-4 text-center chrome-tagline">
          <span className="font-body font-medium text-[var(--color-neutral-800)] text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base 4xl:text-[24px] leading-tight whitespace-nowrap">
            <span className="block sm:hidden">Trending Products • Right at Your Fingertips.</span>
            <span className="hidden sm:block">Trending Products • Affordable Prices • Right at Your Fingertips.</span>
          </span>
        </div>

        {/* Content spacing */}
        <div className="mt-2 sm:mt-2 md:mt-2 lg:mt-2 2xl:mt-2 flex flex-col items-center justify-center gap-4 sm:gap-4 md:gap-5 2xl:gap-12s">
          {/* Main Heading */}
          <h1 className="font-heading text-[var(--color-neutral-800)] leading-tight text-center chrome-heading text-[42px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 4xl:text-[140px]" style={{ fontWeight: '650' }}>
            <span className="block sm:hidden max-w-sm mx-auto" style={{ fontWeight: '650' }}>Powering Up Something Exciting</span>
            <span className="hidden sm:block" style={{ fontWeight: '600' }}>Powering Up<br />Something Exciting</span>
          </h1>

          {/* Subheading */}
          <p className="font-body font-normal text-[var(--color-neutral-500)] text-center leading-relaxed chrome-subheading text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-[48px]">
            <span className="block sm:hidden max-w-sm mx-auto">We are going to launch our website very soon. Stay tuned for an all-new online shopping experience</span>
            <span className="hidden sm:block max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 4xl:max-w-[1200px] mx-auto">We are going to launch our website very soon.<br />Stay tuned for an all-new online shopping experience</span>
          </p>
        </div>

        {/* Email Input and Notify Me Button */}
        <div className="mt-4 sm:mt-8 md:mt-10 lg:mt-12 2xl:mt-24 flex w-full max-w-[340px] sm:max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-2xl 4xl:max-w-[1024px] items-center rounded-[60px] 2xl:rounded-[120px] bg-[var(--color-white)] p-1.5 sm:p-2 md:p-2.5 lg:p-3 2xl:p-4 4xl:p-6 shadow-[0_4px_18px_0_rgba(0,0,0,0.13)] 2xl:shadow-[0_8px_36px_0_rgba(0,0,0,0.13)] chrome-email-container">
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-0 h-[36px] sm:h-[36px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] 4xl:h-[88px] rounded-[60px] 2xl:rounded-[120px] px-3 sm:px-3 md:px-4 2xl:px-8 text-[14px] sm:text-xs md:text-sm xl:text-base 2xl:text-xl 4xl:text-[28px] font-normal text-[var(--color-zinc-600)] outline-none bg-transparent mr-1.5 sm:mr-1.5 md:mr-2 2xl:mr-4"
            aria-label="Enter your email address for notifications"
          />
          <button
            onClick={handleNotifyMeClick}
            className="flex-shrink-0 flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2 4xl:gap-4 rounded-[60px] 2xl:rounded-[120px] bg-[var(--color-neutral-800)] px-2 sm:px-2.5 md:px-3 lg:px-4 2xl:px-6 4xl:px-10 h-[36px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] 4xl:h-[88px] transition-colors duration-200 hover:bg-[var(--color-rose-500)] focus:outline-none focus:ring-2 2xl:focus:ring-4 focus:ring-[var(--color-neutral-800)] focus:ring-offset-2 2xl:focus:ring-offset-4 whitespace-nowrap"
            aria-label="Notify Me"
          >
            <span className="font-heading text-[11px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl 4xl:text-[28px] font-medium text-[var(--color-white)] leading-none">Notify Me</span>
            <Image src="/arrow.svg" alt="Arrow" width={12} height={12} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 4xl:w-12 4xl:h-12" />
          </button>
        </div>

        {/* Notification Container - Right below email section */}
        <div className="mt-4 relative z-50 min-h-[40px] flex items-center justify-center">
          {/* Success alert message */}
          {showSuccess && (
            <div className={`transform transition-all duration-500 ${alertPosition === 'in' ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-0 scale-95'} bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-xl text-sm sm:text-base font-medium whitespace-nowrap`}>
               You have been added to the list!
            </div>
          )}

          {/* Error alert message */}
          {showError && (
            <div className={`transform transition-all duration-500 ${alertPosition === 'in' ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-0 scale-95'} bg-red-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-xl text-sm sm:text-base font-medium whitespace-nowrap`}>
               Please enter a valid email address.
            </div>
          )}
        </div>

      </div>

      {/* Mobile Images Row - Inline layout for mobile only */}
      <div className="absolute bottom-[-5%] left-[48%] transform -translate-x-1/2 flex items-center justify-center gap-[-3] sm:hidden z-0">
        {/* JBL Speaker */}
        <div className="w-[120px] h-[120px] flex-shrink-0"
             style={{ 
               transform: 'rotate(10deg)',
               backfaceVisibility: 'hidden',
               WebkitBackfaceVisibility: 'hidden'
             }}>
          <Image
            src="/jbl card.png"
            alt="Speaker on yellow background"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Center Gimbal */}
        <div className="w-[135px] h-[145px] flex-shrink-0"
             style={{ 
               transform: 'rotate(-11deg)',
               backfaceVisibility: 'hidden',
               WebkitBackfaceVisibility: 'hidden'
             }}>
          <Image
            src="/gimble card.png"
            alt="Gimbal on green background"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Ring Light */}
        <div className="w-[94px] h-[94px] flex-shrink-0"
             style={{ 
               transform: 'rotate(-5.5deg)',
               backfaceVisibility: 'hidden',
               WebkitBackfaceVisibility: 'hidden'
             }}>
          <Image
            src="/ringlight card.png"
            alt="Ring light on red background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Desktop/Tablet Images - Hidden on mobile */}
      
      {/* Item 1: Top-Left (Headphones) - STABILIZED */}
      <div className="absolute left-[5%] top-[12%] 
                      w-[90px] h-[90px]
                      sm:w-[100px] sm:h-[100px] sm:left-[8%] sm:top-[10%] 
                      md:w-[130px] md:h-[130px] md:left-[12%] md:top-[15%] 
                      lg:w-[190px] lg:h-[190px] lg:left-[15%] lg:top-[12%] 
                      xl:w-[230px] xl:h-[230px] xl:left-[16%] 
                      2xl:w-[330px] 2xl:h-[330px] 2xl:left-[20%] 2xl:top-[8%] 
                      4xl:w-[1020px] 4xl:h-[1020px] 4xl:left-[20%] 4xl:top-[6%]
                      z-0 hidden sm:block chrome-hero-image-1"
           style={{ 
             transform: 'rotate(-9.08deg)',
             ...imageContainerStyle
           }}>
        <Image
          src="/headphone card.png"
          alt="Headphones on red background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Item 2: Top-Right (Gimbal) - STABILIZED */}
      <div className="absolute right-[5%] top-[6%] 
                      w-[115px] h-[125px]
                      sm:w-[130px] sm:h-[145px] sm:right-[8%] sm:top-[15%] 
                      md:w-[195px] md:h-[215px] md:right-[8%] md:top-[15%] 
                      lg:w-[245px] lg:h-[270px] lg:right-[15%] lg:top-[12%] 
                      xl:w-[295px] xl:h-[325px] xl:right-[16%] 
                      2xl:w-[425px] 2xl:h-[465px] 2xl:right-[20%] 2xl:top-[8%] 
                      4xl:w-[1310px] 4xl:h-[1435px] 4xl:right-[20%] 4xl:top-[6%]
                      z-0 hidden sm:block chrome-hero-image-2"
           style={{ 
             transform: 'rotate(0deg)',
             ...imageContainerStyle
           }}>
        <Image
          src="/gimble card.png"
          alt="Gimbal on green background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Item 3: Bottom-Left (Speaker) - STABILIZED */}
      <div className="absolute left-[5%] bottom-[-2%] 
                      w-[110px] h-[110px]
                      sm:w-[125px] sm:h-[125px] sm:left-[10%] sm:bottom-[8%] 
                      md:w-[160px] md:h-[160px] md:left-[10%] md:bottom-[-5%] 
                      lg:w-[240px] lg:h-[240px] lg:left-[15%] lg:bottom-[-5%] 
                      xl:w-[285px] xl:h-[285px] xl:left-[16%] xl:bottom-[-15%] 
                      2xl:w-[410px] 2xl:h-[410px] 2xl:left-[20%] 2xl:bottom-[8%] 
                      4xl:w-[1270px] 4xl:h-[1270px] 4xl:left-[20%] 4xl:bottom-[8%]
                      z-0 hidden sm:block chrome-hero-image-3"
           style={{ 
             transform: 'rotate(-5.91deg)',
             ...imageContainerStyle
           }}>
        <Image
          src="/jbl card.png"
          alt="Speaker on yellow background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Item 4: Bottom-Right (Ring Light) - STABILIZED */}
      <div className="absolute right-[8%] bottom-[0%] 
                      w-[80px] h-[75px]
                      sm:w-[90px] sm:h-[85px] sm:right-[8%] sm:bottom-[15%] 
                      md:w-[110px] md:h-[105px] md:right-[10%] md:bottom-[-5%] 
                      lg:w-[165px] lg:h-[160px] lg:right-[15%] lg:bottom-[-5%] 
                      xl:w-[200px] xl:h-[190px] xl:right-[15%] xl:bottom-[-5%] 
                      2xl:w-[290px] 2xl:h-[275px] 2xl:right-[20%] 2xl:bottom-[8%] 
                      4xl:w-[890px] 4xl:h-[850px] 4xl:right-[20%] 4xl:bottom-[5%]
                      z-0 hidden sm:block chrome-hero-image-4"
           style={{ 
             transform: 'rotate(5.03deg)',
             ...imageContainerStyle
           }}>
        <Image
          src="/ringlight card.png"
          alt="Ring light on red background"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-[-15%] sm:bottom-10 md:bottom-12 2xl:bottom-24 left-1/2 -translate-x-1/2 transform inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 2xl:gap-8 z-20 chrome-social-icons">
        <Link href="https://www.facebook.com/share/12L2oSJptNF/" target="_blank" className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 4xl:h-20 4xl:w-20 items-center justify-center rounded-[14px] sm:rounded-[16px] md:rounded-[20px] 2xl:rounded-[32px] 4xl:rounded-[40px] bg-[var(--color-neutral-800)] p-1 sm:p-1.5 md:p-2 2xl:p-4 transition-all duration-200 hover:scale-110 focus:outline-none">
          <Facebook01Icon size={16} className="sm:w-6 sm:h-6 md:w-6 md:h-6" color="#ffffffff" />
        </Link>
        <Link href="https://whatsapp.com" target="_blank" className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 4xl:h-20 4xl:w-20 items-center justify-center rounded-[14px] sm:rounded-[24px] md:rounded-[30px] 2xl:rounded-[40px] 4xl:rounded-[40px] bg-[var(--color-neutral-800)] p-1 sm:p-1.5 md:p-2 2xl:p-4 transition-all duration-200 hover:scale-110 focus:outline-none">
          <WhatsappIcon size={16} className="sm:w-6 sm:h-6 md:w-6 md:h-6" color="#ffffffff" />
        </Link>
        <Link href="mailto:info@example.com" className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 4xl:h-20 4xl:w-20 items-center justify-center rounded-[14px] sm:rounded-[24px] md:rounded-[30px] 2xl:rounded-[40px] 4xl:rounded-[40px] bg-[var(--color-neutral-800)] p-1 sm:p-1.5 md:p-2 2xl:p-4 transition-all duration-200 hover:scale-110 focus:outline-none">
          <Mail02Icon size={16} className="sm:w-6 sm:h-6 md:w-6 md:h-6" color="#ffffffff" />
        </Link>
      </div>
    </section>
  );
}