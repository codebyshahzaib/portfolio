import React from "react";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "AWS", "Docker", "TailwindCSS",
  "GraphQL", "Redis", "Figma"
];

export default function TechTicker() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="w-full bg-surface-alternate border-y border-border-subtle py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-alternate to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-alternate to-transparent z-10"></div>
      
      <div className="flex w-max animate-marquee">
        {duplicatedStack.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 px-8"
          >
            <span className="material-symbols-outlined text-primary-container/40 text-[16px]">
              hexagon
            </span>
            <span className="font-mono-code text-on-surface-variant text-lg font-medium tracking-wider uppercase">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
