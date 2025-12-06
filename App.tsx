import React from 'react';
import GridOverlay from './components/GridOverlay';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkList from './components/WorkList';
import About from './components/About';
import SoulChat from './components/SoulChat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-swiss-black text-swiss-offwhite selection:bg-swiss-red selection:text-white font-sans overflow-x-hidden">
      
      {/* Structural Elements */}
      <GridOverlay />
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <WorkList />
        <About />
      </main>

      {/* Interactive Elements */}
      <SoulChat />
      
      {/* Footer */}
      <footer className="w-full py-12 text-center text-neutral-600 text-xs font-mono border-t border-swiss-red/30 bg-swiss-black relative z-10">
        <p>&copy; {new Date().getFullYear()} BLEIBTGLEICH. NO RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
};

export default App;