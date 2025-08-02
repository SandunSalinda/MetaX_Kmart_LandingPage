// app/page.tsx
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUS from './components/AboutUs'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">

      {/* UPDATED: Left Blur Circle with 2K/4K styles */}
      <div 
        className="absolute left-[-40%] top-[50px] h-[300px] w-[300px] 
                   sm:left-[-30%] 
                   md:left-[-20%] 
                   lg:left-[-15%] lg:top-[80px] lg:h-[450px] lg:w-[450px] 
                   xl:left-[-12%] xl:h-[550px] xl:w-[550px]
                   2xl:left-[-10%] 2xl:h-[850px] 2xl:w-[850px]
                   4xl:left-[-8%] 4xl:h-[1000px] 4xl:w-[1000px]
                   rounded-full bg-[var(--color-rose-500)] blur-[140px] opacity-60"
        style={{ zIndex: 0 }} 
      />

      {/* UPDATED: Right Blur Circle with 2K/4K styles */}
      <div 
        className="absolute right-[-50%] top-[350px] h-[350px] w-[350px] 
                   sm:right-[-40%] 
                   md:right-[-30%] 
                   lg:right-[-15%] lg:top-[400px] lg:h-[500px] lg:w-[500px]
                   xl:right-[-12%] xl:h-[600px] xl:w-[600px]
                   2xl:right-[-10%] 2xl:h-[900px] 2xl:w-[900px]
                   4xl:right-[-8%] 4xl:top-[550px] 4xl:h-[1000px] 4xl:w-[1000px]
                   rounded-full bg-[var(--color-rose-500)] blur-[140px] opacity-60"
        style={{ zIndex: 0 }} 
      />


      {/* UPDATED: Right Blur Circle */}
      {/* Also pushed out and scaled down on mobile, with adjusted vertical position */}
      <div 
        className="absolute right-[-50%] top-[350px] h-[350px] w-[350px] 
                   sm:right-[-40%] 
                   md:right-[-30%] 
                   lg:right-[-15%] lg:top-[400px] lg:h-[500px] lg:w-[500px] 
                   rounded-full bg-[var(--color-rose-500)] blur-[120px] opacity-60"
        style={{ zIndex: 0 }} 
      />

      {/* The rest of your page components remain the same */}
      <Header />
      <div className="pt-[80px] relative z-10">
        <Hero />
        <AboutUS />
        <Contact />
        <Footer />

        {/* Copyright / Designed by section */}
        <div className="w-full py-3 text-center">
          <span className="font-['Inter'] text-xs font-light text-neutral-800 italic">Designed & Developed by </span>
          <a 
            href="https://vixolabs.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['Inter'] text-xs font-light text-neutral-800 underline italic hover:text-[#FC5154] transition-colors"
          >
            Vixo Labs
          </a>
        </div>
      </div>
    </div>
  );
}