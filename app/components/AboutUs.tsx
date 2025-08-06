// app/components/AboutUs.tsx
import Image from 'next/image';
import React from 'react';

// Define a reusable component for each feature card
interface FeatureCardProps {
  iconSrc: string; // Path to the icon in public folder
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconSrc, title, description }) => (
  // Responsive card sizing - smaller on mobile, desktop preserved
  <div className="w-full max-w-[380px] h-48 sm:h-52 md:h-60 p-4 sm:p-5 md:p-6 bg-white rounded-xl shadow-[0_4px_18px_0_rgba(0,0,0,0.13)] flex flex-col justify-start items-start gap-4 sm:gap-5 md:gap-6">
    <div className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full">
      {/* Responsive icon sizing */}
      <Image
        src={iconSrc}
        alt={`${title} icon`}
        width={32}
        height={32}
        className="text-rose-500 sm:w-9 sm:h-9 md:w-10 md:h-10" // Responsive icon size
      />
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-2 sm:gap-2.5 md:gap-3"> {/* Responsive text gaps */}
      {/* Responsive title sizing */}
      <div className="self-stretch text-zinc-900 text-lg sm:text-lg md:text-xl font-bold font-['Plus_Jakarta_Sans'] capitalize">
        {title}
      </div>
      {/* Responsive description sizing */}
      <div className="self-stretch text-zinc-600 text-sm sm:text-sm md:text-base font-normal font-['Inter']">
        {description}
      </div>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    // Main container for the About Us section
    
    <section id="about-us" className="mx-auto max-w-[1199px] px-4 pt-0 pb-16 flex flex-col items-center justify-center"> {/* Changed pb-28 to pb-16 */}

      {/* Section Heading and Subheading */}
      {/* Mobile responsive text sizing */}
      <div className="w-full max-w-[896px] flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 text-center mb-8 sm:mb-10 md:mb-12"> {/* Responsive gaps and margins */}
        {/* Responsive heading sizing */}
        <h2 className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:text-[64px] font-semibold font-['Plus_Jakarta_Sans'] leading-tight md:leading-[104px] px-2">
          Why Shop with K Mart?
        </h2>
        {/* Responsive subheading sizing */}
        <p className="text-neutral-500 text-xs sm:text-base md:text-lg lg:text-xl font-normal font-['Plus_Jakarta_Sans'] px-2">
          Discover the benefits that make K Mart your ultimate shopping destination in Sri Lanka
        </p>
      </div>

      {/* Feature Cards Grid */}
      {/* Responsive grid with better mobile spacing */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-6 justify-items-center px-2 sm:px-0">
        <FeatureCard
          iconSrc="/building.png" // Confirm this path and file name
          title="Trending Products from Colombo"
          description="Latest fashion and lifestyle products sourced directly from the capital"
        />
        <FeatureCard
          iconSrc="/prices.png" // Confirm this path and file name
          title="Affordable Prices"
          description="Best value for money with competitive pricing on all items"
        />
        <FeatureCard
          iconSrc="/delivery.png" // Confirm this path and file name
          title="Fast Islandwide Delivery"
          description="Quick delivery to your doorstep anywhere in Sri Lanka"
        />
        <FeatureCard
          iconSrc="/store.png" // Confirm this path and file name
          title="Physical Store in Kebithigollewa"
          description="Visit our store for a hands-on experience with the latest tech gadgets and electronics."
        />
        <FeatureCard
          iconSrc="/quality.png" // Confirm this path and file name
          title="Reliable Quality"
          description="Only genuine, high-quality products from trusted suppliers"
        />
        <FeatureCard
          iconSrc="/online store.png" // Confirm this path and file name
          title="Online + Offline Convenience"
          description="Shop seamlessly both online and in-store with unified experience"
        />
      </div>
    </section>
  );
}