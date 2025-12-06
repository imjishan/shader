import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-24">
      
      {/* Floating cynicism - Top Center/Left */}
      <div className="absolute top-[28vh] left-[52%] w-64 text-swiss-red text-xs md:text-sm font-bold leading-tight tracking-tight z-20">
        another burnt-out soul<br />
        behind the screen
      </div>

      {/* Massive Background Text (Parallax) */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center z-0 opacity-10 pointer-events-none select-none"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <span className="text-[14vw] font-black leading-none tracking-tighter text-neutral-500 whitespace-nowrap">UX/UI DESIGNER</span>
        <span className="text-[14vw] font-black leading-none tracking-tighter text-neutral-500 whitespace-nowrap">BASED IN THE</span>
        <span className="text-[14vw] font-black leading-none tracking-tighter text-neutral-500 whitespace-nowrap">WIRELESS VOID</span>
      </div>

      {/* Main Foreground Brand Text */}
      <div className="relative z-10 mix-blend-screen px-4 text-center">
        <h1 className="text-[18vw] md:text-[15vw] font-black text-swiss-red leading-[0.85] tracking-tighter transform scale-y-110">
          bleibtgleich
        </h1>
      </div>

      {/* Call to Action / Cynical prompt */}
      <div className="absolute bottom-12 text-center z-20">
        <p className="text-swiss-red font-bold text-sm md:text-base animate-pulse">
          scroll, sigh, and exit.
        </p>
      </div>

    </section>
  );
};

export default Hero;