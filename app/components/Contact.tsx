// app/components/Contact.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook01Icon, WhatsappIcon, Mail02Icon } from 'hugeicons-react';

// Reusable component for contact details (Hotline, Email)
interface ContactDetailProps {
  iconSrc: string; // Path to the icon in public folder
  label: string;
  value: string;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ iconSrc, label, value }) => (
  // Responsive sizing for mobile optimization
  <div className="flex w-full max-w-sm items-center gap-2 sm:gap-3 md:max-w-full">
    <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center"> {/* Responsive icon wrapper */}
      <Image
        src={iconSrc}
        alt={`${label} icon`}
        width={20} // Smaller base size for mobile
        height={20}
        className="text-rose-500 sm:w-6 sm:h-6" // Responsive icon sizing
      />
    </div>
    {/* Responsive gaps and text sizing */}
    <div className="flex flex-1 flex-col items-start justify-start gap-1">
      <div className="text-zinc-900 text-sm sm:text-base font-medium font-['Plus_Jakarta_Sans'] capitalize">
        {label}
      </div>
      <div className="text-black text-lg sm:text-xl font-normal font-['Plus_Jakarta_Sans']">
        {value}
      </div>
    </div>
  </div>
);

// Reusable component for social media icons
interface SocialMediaIconProps {
  iconSrc: string;
  href: string;
  alt: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ iconSrc, href, alt }) => (
  // Responsive social media icon sizing
  <Link href={href} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg transition-all duration-200 hover:scale-110 focus:outline-none">
    <Image
      src={iconSrc}
      alt={alt}
      width={32} // Smaller base size for mobile
      height={32}
      className="text-white sm:w-9 sm:h-9 md:w-10 md:h-10" // Responsive sizing
    />
  </Link>
);

export default function Contact() {
  return (
    // Main container for the Contact section
    // Responsive padding and spacing
    <section id="contact-us" className="mx-auto max-w-[1200px] px-4 pt-4 pb-12 sm:pt-6 sm:pb-14 md:pt-8 md:pb-16"> {/* Reduced top padding */}
      {/* Grid for "Visit Our Store" and "Get in Touch" columns */}
      {/* Responsive grid gaps */}
      <div className="grid grid-cols-1 gap-12 sm:gap-14 md:gap-16 lg:grid-cols-2 lg:gap-[65px]">

        {/* Left Column: Visit Our Store */}
        <div className="flex flex-col items-start justify-start gap-4 sm:gap-5 md:gap-6"> {/* Responsive gaps */}
          <h2 className="text-black text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans'] capitalize">
            Visit Our Store
          </h2>

          {/* K Mart Address Card - Responsive sizing */}
          <div className="w-full h-20 sm:h-22 md:h-24 rounded-xl bg-white shadow-[0_4px_18px_0_rgba(0,0,0,0.13)] flex items-center p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-2.5">
              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center">
                {/* Location Icon - Responsive sizing */}
                <Image
                  src="/location pin.png"
                  alt="Location icon"
                  width={16}
                  height={18}
                  className="text-rose-500 sm:w-[18px] sm:h-[20px]"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 sm:gap-3.5">
                <div className="text-zinc-900 text-lg sm:text-xl font-medium font-['Plus_Jakarta_Sans'] capitalize">
                  K Mart
                </div>
                <div className="text-black text-base sm:text-lg font-normal font-['Plus_Jakarta_Sans'] capitalize">
                  Padaviya Road, Kebithigollewa, Sri Lanka
                </div>
              </div>
            </div>
          </div>
          

          {/* Map Container - Responsive sizing */}
          <div className="relative w-full rounded-xl bg-white p-4 sm:p-5 md:p-6 shadow-[0_4px_18px_0_rgba(0,0,0,0.13)]"> {/* Responsive padding */}
            <div className="relative h-[300px] sm:h-[350px] md:h-[417px] w-full overflow-hidden rounded-xl"> {/* Responsive height */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44624.52124438783!2d80.65789038229698!3d8.664165440467423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc7187a505f601%3A0x6946580c5e5403d7!2sKebithigollewa!5e0!3m2!1sen!2slk!4v1754034653494!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="K Mart Location - Kebithigollewa, Sri Lanka"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Get in Touch */}
        <div className="flex flex-col items-start justify-start gap-6 sm:gap-7 md:gap-8"> {/* Responsive gaps */}
          <h2 className="self-stretch text-black text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans'] capitalize">
            Get in Touch
          </h2>

          {/* Hotline Card - Responsive sizing */}
          <div className="w-full h-18 sm:h-20 rounded-xl bg-white shadow-[0_4px_18px_0_rgba(0,0,0,0.13)] flex items-center p-3 sm:p-4">
            <ContactDetail
              iconSrc="/phone.png"
              label="Hotline"
              value="077 738 9872"
            />
          </div>
          
          {/* Email Card - Responsive sizing */}
          <div className="w-full h-18 sm:h-20 rounded-xl bg-white shadow-[0_4px_18px_0_rgba(0,0,0,0.13)] flex items-center p-3 sm:p-4">
            <ContactDetail
              iconSrc="/email.png"
              label="Email"
              value="info@kmart.lk"
            />
          </div>
          

          {/* Social Media Section */}
          <div className="flex flex-col items-start justify-start gap-4 sm:gap-5 md:gap-6"> {/* Responsive gaps */}
            <div className="text-black text-base sm:text-lg font-normal font-['Plus_Jakarta_Sans'] capitalize">
              Follow us on social media
            </div>
            <div className="inline-flex items-center justify-start gap-2 sm:gap-3"> {/* Responsive gaps */}
              <Link 
                href="https://www.facebook.com/share/12L2oSJptNF/"
                aria-label="Facebook"
                target="_blank"
                className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-[#FC5154] p-1 transition-all duration-200 hover:scale-110 focus:outline-none"
              >
                <Facebook01Icon size={24} color="#ffffffff" />
              </Link>
              <Link 
                href="https://whatsapp.com"
                aria-label="WhatsApp"
                target="_blank"
                className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-[#FC5154] p-1 transition-all duration-200 hover:scale-110 focus:outline-none"
              >
                <WhatsappIcon size={24} color="#ffffffff" />
              </Link>
              <Link 
                href="mailto:info@kmartlk.com"
                aria-label="Email"
                target="_blank"
                className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-[#FC5154] p-1 transition-all duration-200 hover:scale-110 focus:outline-none"
              >
                <Mail02Icon size={24} color="#ffffffff" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}