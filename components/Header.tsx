import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full h-24 z-40 flex justify-between items-center px-6 md:px-12 text-sm font-bold tracking-tight text-neutral-400 bg-swiss-black/90 backdrop-blur-sm">
      <div className="w-1/3 text-left hover:text-swiss-red transition-colors duration-300 cursor-pointer">
        bleibtgleich
      </div>
      
      {/* Spacer for the center line */}
      <div className="w-1/3 text-center">
        {/* The red square is in the GridOverlay, but we keep this space empty */}
      </div>

      <div className="w-1/3 flex justify-end gap-8">
        <a href="#about" className="hover:text-swiss-red transition-colors duration-300">about</a>
        <a href="#work" className="hover:text-swiss-red transition-colors duration-300">work</a>
        <a href="#contact" className="hover:text-swiss-red transition-colors duration-300">in tg mail</a>
      </div>
    </header>
  );
};

export default Header;