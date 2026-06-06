import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Technical Skills | Muhammad Shahzaib",
};

export default function SkillsPage() {
  return (
    <main className="pt-[120px]">
      <section className="pt-section-gap pb-section-gap px-grid-gutter max-w-container-max mx-auto" id="skills">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border-subtle pb-8">
          <div className="max-w-2xl">
            <span className="font-mono-code text-[12px] uppercase tracking-[0.2em] text-primary-container block mb-4">
              // ARSENAL
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Technical Skills</h2>
            <p className="font-body-base text-body-base text-[#A0A0B8] leading-[1.8]">
              I specialize in building full-stack applications using a modern JavaScript/TypeScript ecosystem. My focus is on creating highly performant, scalable, and beautifully interactive digital experiences.
            </p>
          </div>
          {/* Legend/Key */}
          <div className="hidden lg:flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-container glow-cyan"></div>
              <span className="font-mono-code text-[11px] text-on-surface-variant uppercase">Core Proficiency</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full border border-border-subtle"></div>
              <span className="font-mono-code text-[11px] text-on-surface-variant uppercase">Familiar / Learning</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {/* Category 1: Frontend Development */}
          <div className="bg-surface-card border border-border-subtle p-[32px] rounded-2xl relative overflow-hidden group hover:border-primary-container transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <span className="material-symbols-outlined text-[100px] text-primary-container">web</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-[20px] text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">code</span>
                Frontend
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">React.js</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Next.js</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Tailwind CSS</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Framer Motion</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Redux Toolkit</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 2: Backend & Database */}
          <div className="bg-surface-card border border-border-subtle p-[32px] rounded-2xl relative overflow-hidden group hover:border-primary-container transition-colors duration-500 lg:-translate-y-8">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <span className="material-symbols-outlined text-[100px] text-primary-container">dns</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-[20px] text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">database</span>
                Backend &amp; DB
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Node.js</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Express.js</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">MongoDB</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">PostgreSQL</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Firebase</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category 3: Tools & Cloud */}
          <div className="bg-surface-card border border-border-subtle p-[32px] rounded-2xl relative overflow-hidden group hover:border-primary-container transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <span className="material-symbols-outlined text-[100px] text-primary-container">cloud</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-headline-md text-[20px] text-on-surface mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">build</span>
                Tools &amp; Cloud
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Git / GitHub</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Docker (Learning)</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Azure (AZ-900 Prep)</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Postman</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group/skill cursor-default">
                  <span className="font-mono-code text-[14px] text-on-surface-variant group-hover/skill:text-primary-container transition-colors">Figma</span>
                  <div className="flex gap-1">
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-primary-container rounded-sm glow-cyan"></div>
                    <div className="w-8 h-1 bg-surface-container-high rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Programming Languages Tag Cloud */}
        <div className="mt-16 pt-8 border-t border-border-subtle text-center">
          <span className="font-mono-code text-[12px] uppercase tracking-widest text-on-surface-variant mb-6 block">Languages Spoken</span>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <span className="px-5 py-2.5 bg-surface-container border border-border-subtle rounded-lg font-mono-code text-[14px] text-on-surface hover:border-primary-container hover:text-primary-container transition-colors cursor-default">JavaScript (ES6+)</span>
            <span className="px-5 py-2.5 bg-surface-container border border-border-subtle rounded-lg font-mono-code text-[14px] text-on-surface hover:border-primary-container hover:text-primary-container transition-colors cursor-default">TypeScript</span>
            <span className="px-5 py-2.5 bg-surface-container border border-border-subtle rounded-lg font-mono-code text-[14px] text-on-surface hover:border-primary-container hover:text-primary-container transition-colors cursor-default">Python</span>
            <span className="px-5 py-2.5 bg-surface-container border border-border-subtle rounded-lg font-mono-code text-[14px] text-on-surface hover:border-primary-container hover:text-primary-container transition-colors cursor-default">C++</span>
            <span className="px-5 py-2.5 bg-surface-container border border-border-subtle rounded-lg font-mono-code text-[14px] text-on-surface hover:border-primary-container hover:text-primary-container transition-colors cursor-default">SQL</span>
            <span className="px-5 py-2.5 bg-surface-container border border-border-subtle rounded-lg font-mono-code text-[14px] text-on-surface hover:border-primary-container hover:text-primary-container transition-colors cursor-default">HTML5/CSS3</span>
          </div>
        </div>
      </section>
    </main>
  );
}
