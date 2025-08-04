'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { Facebook01Icon, WhatsappIcon, Mail02Icon, } from 'hugeicons-react';


export default function Hero() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false); // New state for error alert
  const [alertPosition, setAlertPosition] = useState('out');
  const emailInputRef = useRef(null);

  // A simple function to validate email format using a regex
  const isValidEmail = (email) => {
    // This is a basic regex; more complex ones exist for stricter validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNotifyMeClick = () => {
    const email = emailInputRef.current?.value;

    // First, check if the email is empty or invalid
    if (!email || !isValidEmail(email)) {
      // Show the error alert instead of the success one
      setShowError(true);
      setShowSuccess(false);

      setAlertPosition('in');
      setTimeout(() => setAlertPosition('out'), 3000);
      setTimeout(() => setShowError(false), 3500);

      return; // Exit the function to prevent the success flow
    }

    // If the email is valid, proceed with the success flow
    setShowError(false); // Ensure the error alert is hidden
    setShowSuccess(true);
    
    // Clear the email input field
    emailInputRef.current.value = '';

    // Show the alert and trigger the slide-in animation
    setAlertPosition('in');
    setTimeout(() => {
      setAlertPosition('out');
    }, 3000);

    // Completely remove the alert from the DOM after the slide-out animation is finished
    setTimeout(() => {
      setShowSuccess(false);
    }, 3500);
  };

  return (
    <section className="relative flex min-h-[70vh] sm:min-h-[calc(100vh-68px)] w-full flex-col items-center justify-start pt-8 sm:justify-center px-4 py-4 text-center sm:py-12 md:py-16 lg:py-28 xl:py-32 2xl:py-40 4xl:py-64 mb-4 sm:mb-20 md:mb-28">

      {/* Success alert message */}
      {showSuccess && (
        <div className={`fixed top-20 right-0 z-50 transform transition-transform duration-500 ${alertPosition === 'in' ? 'translate-x-0' : 'translate-x-full'} bg-green-500 text-white px-6 py-3 rounded-l-lg shadow-xl`}>
          You have been added to the list!
        </div>
      )}

      {/* Error alert message */}
      {showError && (
        <div className={`fixed top-20 right-0 z-50 transform transition-transform duration-500 ${alertPosition === 'in' ? 'translate-x-0' : 'translate-x-full'} bg-red-500 text-white px-6 py-3 rounded-l-lg shadow-xl`}>
          Please enter a valid email address.
        </div>
      )}

      {/* Item 1: Top-Left (Headphones) - Hidden on mobile */}
      <Image
        className="absolute left-[5%] top-[12%] scale-[0.35] 
                    sm:scale-[0.4] sm:left-[8%] sm:top-[10%] 
                    md:scale-[0.6] md:left-[12%] md:top-[15%] 
                    lg:scale-75 lg:left-[15%] lg:top-[12%] 
                    xl:scale-90 xl:left-[16%] 
                    2xl:scale-[1.3] 2xl:left-[20%] 2xl:top-[8%] 
                    4xl:scale-[4.0] 4xl:left-[20%] 4xl:top-[6%]
                    origin-top-left rotate-[-9.08deg] z-0 hidden sm:block"
        src="/headphone card.png"
        alt="Headphones on red background"
        width={235}
        height={235}
        priority
      />

      {/* Item 2: Top-Right (Gimbal) - Hidden on mobile */}
      <Image
        className="absolute right-[5%] top-[6%] scale-[0.35] 
                    sm:scale-[0.4] sm:right-[8%] sm:top-[15%] 
                    md:scale-[0.6] md:right-[8%] md:top-[15%] 
                    lg:scale-75 lg:right-[15%] lg:top-[12%] 
                    xl:scale-90 xl:right-[16%] 
                    2xl:scale-[1.3] 2xl:right-[20%] 2xl:top-[8%] 
                    4xl:scale-[4.0] 4xl:right-[20%] 4xl:top-[6%]
                    origin-top-right rotate-[0deg] z-0 hidden sm:block"
        src="/gimble card.png"
        alt="Gimbal on green background"
        width={307}
        height={339}
        priority
      />

      {/* Item 3: Bottom-Left (Speaker) */}
      <Image
        className="absolute left-[5%] bottom-[15%] scale-[0.35] 
                    sm:scale-[0.4] sm:left-[10%] sm:bottom-[8%] 
                    md:scale-[0.5] md:left-[10%] md:bottom-[-5%] 
                    lg:scale-75 lg:left-[15%] lg:bottom-[-5%] 
                    xl:scale-90 xl:left-[16%] xl:bottom-[-15%] 
                    2xl:scale-[1.3] 2xl:left-[20%] 2xl:bottom-[8%] 
                    4xl:scale-[4.0] 4xl:left-[20%] 4xl:bottom-[8%]
                    origin-bottom-left rotate-[-5.91deg] z-0"
        src="/jbl card.png"
        alt="Speaker on yellow background"
        width={297}
        height={297}
        priority
      />

      {/* Item 4: Bottom-Right (Ring Light) */}
      <Image
        className="absolute right-[8%] bottom-[17%] scale-[0.35] 
                    sm:scale-[0.4] sm:right-[8%] sm:bottom-[15%] 
                    md:scale-[0.5] md:right-[10%] md:bottom-[-5%] 
                    lg:scale-75 lg:right-[15%] lg:bottom-[-5%] 
                    xl:scale-90 xl:right-[15%] xl:bottom-[-5%] 
                    2xl:scale-[1.3] 2xl:right-[20%] 2xl:bottom-[8%] 
                    4xl:scale-[4.0] 4xl:right-[20%] 4xl:bottom-[5%]
                    origin-bottom-right rotate-[5.03deg] z-0"
        src="/ringlight card.png"
        alt="Ring light on red background"
        width={222}
        height={212}
        priority
      />

      {/* Item 5: Center Gimbal (Mobile Only) */}
      <Image
        className="absolute left-[50%] -translate-x-1/2 bottom-[2%] scale-[0.4] rotate-[-12.03deg]
                    sm:hidden z-0"
        src="/gimble card.png"
        alt="Gimbal on green background"
        width={307}
        height={339}
        priority
      />

      {/* Main Content Block (Centered) - UPDATED 4xl max-width */}
      <div className="relative z-20 mx-auto flex w-full flex-col items-center justify-center px-4 sm:px-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl 4xl:max-w-[1600px] mt-4 sm:mt-0">

        {/* Tagline - UPDATED 4xl styles */}
        <div className="inline-flex items-center justify-center gap-1 2xl:gap-2 rounded-[60px] 4xl:rounded-[120px] outline outline-1 4xl:outline-2 outline-offset-[-1px] 4xl:outline-offset-[-2px] outline-[var(--color-neutral-800)] px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 2xl:px-6 2xl:py-3 4xl:px-8 4xl:py-4 text-center text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm 2xl:text-base 4xl:text-[24px]">
          <span className="font-body font-medium text-[var(--color-neutral-800)] leading-tight whitespace-nowrap">
            <span className="block sm:hidden">Trending Products • Right at Your Fingertips.</span>
            <span className="hidden sm:block">Trending Products • Affordable Prices • Right at Your Fingertips.</span>
          </span>
        </div>

        {/* Content spacing */}
        <div className="mt-2 sm:mt-4 md:mt-4 lg:mt-4 2xl:mt-8 flex flex-col items-center justify-center gap-2 sm:gap-5 md:gap-6 2xl:gap-12">
          {/* Main Heading - UPDATED larger mobile text for better readability */}
          <h1 className="font-heading text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl 4xl:text-[140px] font-semibold text-[var(--color-neutral-800)] leading-tight text-center">
            Powering Up<br />Something Exciting
          </h1>

          {/* Subheading - UPDATED larger mobile text for better readability */}
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl 4xl:text-[48px] font-normal text-[var(--color-neutral-500)] text-center max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 4xl:max-w-[1200px] leading-relaxed">
            We are going to launch our website very soon.<br />
            Stay tuned for an all-new online shopping experience
          </p>
        </div>

        {/* Email Input and Notify Me Button - UPDATED 4xl max-width */}
        <div className="mt-4 sm:mt-8 md:mt-10 lg:mt-12 2xl:mt-24 flex w-full max-w-[280px] sm:max-w-sm md:max-w-lg xl:max-w-xl 2xl:max-w-2xl 4xl:max-w-[1024px] items-center rounded-[60px] 2xl:rounded-[120px] bg-[var(--color-white)] p-1 sm:p-2 md:p-2.5 lg:p-3 2xl:p-4 4xl:p-6 shadow-[0_4px_18px_0_rgba(0,0,0,0.13)] 2xl:shadow-[0_8px_36px_0_rgba(0,0,0,0.13)]">
          <input
            ref={emailInputRef} // Add the ref to the input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-[28px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] 4xl:h-[88px] rounded-[60px] 2xl:rounded-[120px] px-2 sm:px-3 md:px-4 2xl:px-8 text-[10px] sm:text-xs md:text-sm xl:text-base 2xl:text-xl 4xl:text-[28px] font-normal text-[var(--color-zinc-600)] outline-none bg-transparent mr-1 sm:mr-1.5 md:mr-2 2xl:mr-4"
            aria-label="Enter your email address for notifications"
          />
          <button
            onClick={handleNotifyMeClick}
            className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2 4xl:gap-4 rounded-[60px] 2xl:rounded-[120px] bg-[var(--color-neutral-800)] px-1.5 sm:px-2.5 md:px-3 lg:px-4 2xl:px-6 4xl:px-10 h-[28px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[60px] 4xl:h-[88px] transition-colors duration-200 hover:bg-[var(--color-rose-500)] focus:outline-none focus:ring-2 2xl:focus:ring-4 focus:ring-[var(--color-neutral-800)] focus:ring-offset-2 2xl:focus:ring-offset-4 whitespace-nowrap flex-shrink-0"
            aria-label="Notify Me"
          >
            <span className="font-heading text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-xl 4xl:text-[28px] font-medium text-[var(--color-white)] leading-none">Notify Me</span>
            <Image src="/arrow.svg" alt="Arrow" width={10} height={10} className="sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-8 2xl:h-8 4xl:w-12 4xl:h-12" />
          </button>
        </div>

      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-[5%] sm:bottom-10 md:bottom-12 2xl:bottom-24 left-1/2 -translate-x-1/2 transform inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 2xl:gap-8 z-20">
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