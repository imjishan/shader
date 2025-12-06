import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: "CORPORATE OBSCURITY", category: "FRONTEND", year: "2024", description: "Building dashboards nobody looks at." },
  { id: 2, title: "E-COMMERCE VOID", category: "FULL STACK", year: "2023", description: "Selling things people don't need." },
  { id: 3, title: "CRYPTO DELUSION", category: "WEB3", year: "2022", description: "Minting emptiness on the blockchain." },
  { id: 4, title: "AGENCY CHAOS", category: "DESIGN SYSTEM", year: "2021", description: "Standardizing the unstandardizable." },
];

const WorkList: React.FC = () => {
  return (
    <section id="work" className="relative z-10 w-full py-24 px-6 md:px-12 bg-swiss-black border-t border-swiss-red/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="text-6xl md:text-8xl font-black text-swiss-offwhite tracking-tighter">
            SELECTED<br/>WORK
          </h2>
          <span className="text-swiss-red font-mono text-sm hidden md:block">( 2021 — 2024 )</span>
        </div>

        <div className="flex flex-col">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative border-t border-neutral-800 py-12 flex flex-col md:flex-row md:items-baseline justify-between transition-all duration-300 hover:bg-neutral-900 cursor-pointer"
            >
              <div className="md:w-1/4 text-neutral-500 font-mono text-sm mb-2 md:mb-0 group-hover:text-swiss-red transition-colors">
                {project.year}
              </div>
              <div className="md:w-2/4">
                <h3 className="text-3xl md:text-5xl font-bold text-swiss-offwhite tracking-tight mb-2 group-hover:translate-x-4 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-500 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  {project.description}
                </p>
              </div>
              <div className="md:w-1/4 text-right text-neutral-400 font-medium group-hover:text-white">
                {project.category}
              </div>
            </div>
          ))}
          <div className="border-t border-neutral-800"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkList;