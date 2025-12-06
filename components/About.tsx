import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-32 px-6 md:px-12 bg-swiss-black text-swiss-offwhite border-t border-swiss-red/30">
      <div className="max-w-4xl mx-auto text-left relative z-10">
        <p className="text-lg md:text-xl font-mono text-swiss-red mb-8">
          // WHO AM I?
        </p>
        <p className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-12">
          A Frontend Engineer obsessed with <span className="text-neutral-500 line-through decoration-swiss-red">perfection</span> shipping. 
          I turn caffeine into clean code and Figma files into functional realities.
          Currently floating in the digital ether, waiting for a project that doesn't bore me to death.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-mono text-sm text-neutral-400">
          <div>
            <h4 className="text-white mb-4 uppercase tracking-widest border-b border-swiss-red inline-block pb-1">Stack</h4>
            <ul className="space-y-2">
              <li>React / TypeScript</li>
              <li>Next.js / Node</li>
              <li>Tailwind / WebGL</li>
              <li>GenAI Integration</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-4 uppercase tracking-widest border-b border-swiss-red inline-block pb-1">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-swiss-red">github.com/bleibtgleich</a></li>
              <li><a href="#" className="hover:text-swiss-red">twitter.com/nowhere</a></li>
              <li><a href="#" className="hover:text-swiss-red">email@void.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Decorative large faint text */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <span className="text-[20rem] font-black leading-none text-neutral-700">?</span>
      </div>
    </section>
  );
};

export default About;