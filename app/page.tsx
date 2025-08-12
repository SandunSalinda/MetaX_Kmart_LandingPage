// app/page.tsx - MINIMAL CHANGES FOR CHROME BLUR FIX
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUS from './components/AboutUs'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden chrome-responsive-fix">

      {/* Left Blur Circle - Enhanced Chrome fixes with better positioning */}
      <div 
        className="absolute left-[-40%] top-[50px] h-[300px] w-[300px] 
                   sm:left-[-30%] 
                   md:left-[-20%] 
                   lg:left-[-25%] lg:top-[80px] lg:h-[450px] lg:w-[450px] 
                   xl:left-[-25%] xl:h-[550px] xl:w-[550px]
                   2xl:left-[-30%] 2xl:h-[850px] 2xl:w-[850px]
                   4xl:left-[-30%] 4xl:h-[1000px] 4xl:w-[1000px]
                   chrome-left-blur
                   rounded-full bg-[var(--color-rose-500)] chrome-blur-fix"
        style={{ 
          zIndex: 0,
          filter: 'blur(140px)',
          opacity: '0.6',
          willChange: 'filter',
          transform: 'translateZ(0)',
          isolation: 'isolate'
        }} 
      />

      {/* Right Blur Circle - Enhanced Chrome fixes with better positioning */}
      <div 
        className="absolute right-[-20%] top-[350px] h-[350px] w-[350px] 
                   sm:right-[-40%] 
                   md:right-[-30%] 
                   lg:right-[-25%] lg:top-[400px] lg:h-[500px] lg:w-[500px]
                   xl:right-[-25%] xl:h-[600px] xl:w-[600px]
                   2xl:right-[-30%] 2xl:h-[900px] 2xl:w-[900px]
                   4xl:right-[-30%] 4xl:top-[550px] 4xl:h-[1000px] 4xl:w-[1000px]
                   chrome-right-blur
                   rounded-full bg-[var(--color-rose-500)] chrome-blur-fix"
        style={{ 
          zIndex: 0,
          filter: 'blur(140px)',
          opacity: '0.6',
          willChange: 'filter',
          transform: 'translateZ(0)',
          isolation: 'isolate'
        }} 
      />

      <Header />
      <div className="pt-[80px] relative z-10">
        <Hero />
      <div className="pt-[80px] relative z-10">
        <AboutUS />
        <Contact />
        <Footer />

        {/* Copyright section */}
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
  </div>
  );
}