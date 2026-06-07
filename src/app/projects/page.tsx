import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Projects | Muhammad Shahzaib",
};

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-section-gap max-w-container-max mx-auto px-6">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="text-left w-full md:w-auto">
          <p className="font-mono-code text-primary-container mb-2 tracking-widest drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
            // SELECTED WORK
          </p>
          <h1 className="font-headline-lg text-headline-lg text-text-primary">Projects</h1>
        </div>
        <div className="flex flex-wrap gap-3 w-full md:w-auto justify-start md:justify-end">
          <div className="btn-octagon-wrapper bg-primary-container drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
            <button className="btn-octagon-inner px-6 py-2 bg-primary-container text-on-primary font-medium text-label-caps">
              All
            </button>
          </div>
          <div className="btn-octagon-wrapper bg-primary-container/40 hover:bg-primary-container transition-colors">
            <button className="btn-octagon-inner px-6 py-2 bg-[#0A0A0F] text-primary-container hover:bg-primary-container/10 font-medium text-label-caps transition-colors">
              Full-Stack
            </button>
          </div>
          <div className="btn-octagon-wrapper bg-primary-container/40 hover:bg-primary-container transition-colors">
            <button className="btn-octagon-inner px-6 py-2 bg-[#0A0A0F] text-primary-container hover:bg-primary-container/10 font-medium text-label-caps transition-colors">
              Cloud
            </button>
          </div>
          <div className="btn-octagon-wrapper bg-primary-container/40 hover:bg-primary-container transition-colors">
            <button className="btn-octagon-inner px-6 py-2 bg-[#0A0A0F] text-primary-container hover:bg-primary-container/10 font-medium text-label-caps transition-colors">
              Backend
            </button>
          </div>
          <div className="btn-octagon-wrapper bg-primary-container/40 hover:bg-primary-container transition-colors">
            <button className="btn-octagon-inner px-6 py-2 bg-[#0A0A0F] text-primary-container hover:bg-primary-container/10 font-medium text-label-caps transition-colors">
              Python
            </button>
          </div>
        </div>
      </header>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter">
        {/* FEATURED PROJECT 1 */}
        <div className="md:col-span-2 bento-card bg-surface-card border border-border-subtle rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row gap-8 overflow-hidden group hover:-translate-y-2 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="font-mono-code text-primary-container text-sm mb-4 block uppercase tracking-tight">
                Full-Stack · MERN · Cloud-Native
              </span>
              <h3 className="font-headline-md text-headline-md text-text-primary mb-4 leading-tight">
                Multimedia News Aggregator Tool
              </h3>
              <p className="text-on-surface-variant font-body-base leading-relaxed mb-6">
                High-performance dashboard aggregating real-time global news and video streams with intelligent search.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Node.js", "Atlas", "YouTube API"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-tag-bg border border-tag-border rounded-md text-xs font-mono-code text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a className="flex items-center gap-2 text-on-surface hover:text-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[20px]">code</span>
                <span className="text-sm font-label-caps">View Code</span>
              </a>
              <div className="btn-octagon-wrapper bg-primary-container drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
                <a className="btn-octagon-inner bg-primary-container text-on-primary px-5 py-2 text-sm font-bold flex items-center gap-2 hover:bg-primary-container/80 transition-colors" href="#">
                  View on Upwork <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative mt-4 md:mt-0">
            <div className="w-full h-full bg-surface-alternate rounded-xl border border-border-subtle overflow-hidden mockup-img group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500">
              <div className="flex gap-1.5 p-3 border-b border-border-subtle bg-surface-container-low">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
              <img
                alt="Digital News Dashboard Interface"
                className="w-full h-auto object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvGfux1TLX3nWp54pzskUf1hA-r9dWcjtYbs5mn4NSxrmP-J07O3lDODshx2NF92ncLPnzZc_ltQ_-dmY8iPF297Uu2Mv02QS1kYp7FUjPtovpjdkiCHKn3-7Ep42Pq6aISguFkI4OTXfAm-Pmj4_ndeAZzXGVC5ZWj48KSlv214mE9HNynE8nZBKy3vuIJSPBEj7bW5rvrWFv0imQLnS4g7QMLbFLnfk8lXipB0Ge9t909PoXfx54_JH5A"
              />
            </div>
          </div>
        </div>

        {/* REGULAR PROJECT: ExtraJobs */}
        <div className="bento-card bg-surface-card border border-border-subtle rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-2 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
          <div>
            <span className="font-mono-code text-primary-container text-[12px] mb-3 block uppercase">Cloud-Native</span>
            <h3 className="font-headline-md text-[22px] text-text-primary mb-3">ExtraJobs Marketplace MVP</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Freelance marketplace connecting specialized talent with high-impact projects.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">Next.js</span>
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">Firebase</span>
            </div>
            <a className="inline-flex items-center text-primary text-sm font-bold group-hover:underline" href="#">
              Explore Case Study <span className="material-symbols-outlined ml-1 text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* REGULAR PROJECT: OzoneSync */}
        <div className="bento-card bg-surface-card border border-border-subtle rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-2 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
          <div>
            <span className="font-mono-code text-primary-container text-[12px] mb-3 block uppercase">Full-Stack</span>
            <h3 className="font-headline-md text-[22px] text-text-primary mb-3">OzoneSync Website</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Highly interactive corporate portal with real-time asset tracking visualizations.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">Three.js</span>
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">PostgreSQL</span>
            </div>
            <a className="inline-flex items-center text-primary text-sm font-bold group-hover:underline" href="#">
              View Demo <span className="material-symbols-outlined ml-1 text-[16px]">visibility</span>
            </a>
          </div>
        </div>

        {/* FEATURED PROJECT 2 */}
        <div className="md:col-span-2 bento-card bg-surface-card border border-border-subtle rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row-reverse gap-8 overflow-hidden group hover:-translate-y-2 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="font-mono-code text-primary-container text-sm mb-4 block uppercase tracking-tight">
                Full-Stack · MERN · Complex Architecture
              </span>
              <h3 className="font-headline-md text-headline-md text-text-primary mb-4 leading-tight">
                Dose Dash: Delivery Platform
              </h3>
              <p className="text-on-surface-variant font-body-base leading-relaxed mb-6">
                A complex prescription-to-delivery system connecting customers, pharmacies, and riders in a unified real-time ecosystem.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Socket.io", "Redux", "Express", "JWT"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-tag-bg border border-tag-border rounded-md text-xs font-mono-code text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="btn-octagon-wrapper bg-primary-container drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
                <a className="btn-octagon-inner bg-primary-container text-on-primary px-5 py-2 text-sm font-bold flex items-center gap-2 hover:bg-primary-container/80 transition-colors" href="#">
                  View Project <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 relative mt-4 md:mt-0">
            <div className="w-full h-full bg-surface-alternate rounded-xl border border-border-subtle overflow-hidden mockup-img group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500">
              <div className="flex gap-1.5 p-3 border-b border-border-subtle bg-surface-container-low">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
              <img
                alt="Complex Multi-User Platform Mockup"
                className="w-full h-auto object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs0uoqjxHX13OxBB8hMxacEgWflYcg2JR5BMyu2zz9-hWCzBfd-8QrI0Y4lKJzsuArGHEe5NtL5SBi9xCslzDiQEJxAkfAA1tt8tAznol5lSLQ4fvQeVugFQ7w5yepe90IXDq4JY5xlmQblKTT3yxdRuvKwA40bPailFGFwZIPwe8rKcA6juD9ktpnwJRupaiUluGnMbh-3sTitg-YutnmloomFMAf6wQqN0sZCbmUkWW7kfo0CmytfxLIr"
              />
            </div>
          </div>
        </div>

        {/* REGULAR PROJECT: Gamified EdTech */}
        <div className="bento-card bg-surface-card border border-border-subtle rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-2 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
          <div>
            <span className="font-mono-code text-primary-container text-[12px] mb-3 block uppercase">Full-Stack · Gaming</span>
            <h3 className="font-headline-md text-[22px] text-text-primary mb-3">Gamified EdTech Hub</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Interactive "Math Tug of War" and "Verb Battle" platforms for active learning.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">React</span>
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">Canvas API</span>
            </div>
            <a className="inline-flex items-center text-primary text-sm font-bold group-hover:underline" href="#">
              Play Demo <span className="material-symbols-outlined ml-1 text-[16px]">sports_esports</span>
            </a>
          </div>
        </div>

        {/* REGULAR PROJECT: Task Manager */}
        <div className="bento-card bg-surface-card border border-border-subtle rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-2 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
          <div>
            <span className="font-mono-code text-primary-container text-[12px] mb-3 block uppercase">Backend Focus</span>
            <h3 className="font-headline-md text-[22px] text-text-primary mb-3">Distributed Task Manager</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Robust task scheduling system with Redis-backed queueing and worker nodes.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">Redis</span>
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">BullMQ</span>
            </div>
            <a className="inline-flex items-center text-primary text-sm font-bold group-hover:underline" href="#">
              API Docs <span className="material-symbols-outlined ml-1 text-[16px]">description</span>
            </a>
          </div>
        </div>

        {/* REGULAR PROJECT: Dawn Scraper */}
        <div className="bento-card bg-surface-card border border-border-subtle rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-2 hover:border-primary-container hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300">
          <div>
            <span className="font-mono-code text-primary-container text-[12px] mb-3 block uppercase">Python · Automation</span>
            <h3 className="font-headline-md text-[22px] text-text-primary mb-3">Dawn News Intelligence</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Automated scraper and sentiment analyzer for archival news processing.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">Python</span>
              <span className="px-2 py-0.5 bg-tag-bg border border-tag-border rounded text-[11px] font-mono-code">Selenium</span>
            </div>
            <a className="inline-flex items-center text-primary text-sm font-bold group-hover:underline" href="#">
              GitHub Repo <span className="material-symbols-outlined ml-1 text-[16px]">terminal</span>
            </a>
          </div>
        </div>
      </div>

      {/* Timeline / Experience Teaser */}
      <div className="mt-section-gap border-t border-border-subtle pt-section-gap-mobile flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="font-headline-lg text-headline-lg text-text-primary mb-6">Engineering Experience</h2>
          <div className="space-y-8">
            <div className="flex gap-6 relative">
              <div className="w-0.5 h-full bg-border-subtle absolute left-[7px] top-2"></div>
              <div className="w-4 h-4 rounded-full bg-primary-container shrink-0 z-10 mt-1 shadow-[0_0_10px_#00D4FF]"></div>
              <div>
                <h4 className="font-headline-md text-xl text-text-primary">Lead Full-Stack Developer</h4>
                <p className="text-primary-container font-mono-code text-sm">TechFlow Solutions • 2022 — Present</p>
              </div>
            </div>
            <div className="flex gap-6 relative">
              <div className="w-0.5 h-full bg-border-subtle absolute left-[7px] top-2"></div>
              <div className="w-4 h-4 rounded-full bg-border-subtle shrink-0 z-10 mt-1 border-2 border-primary-container"></div>
              <div>
                <h4 className="font-headline-md text-xl text-text-primary">MERN Stack Engineer</h4>
                <p className="text-on-surface-variant font-mono-code text-sm">InnovateLab • 2020 — 2022</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-surface-alternate p-12 rounded-3xl border border-border-subtle text-center relative overflow-hidden group">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/5 rounded-full blur-3xl"></div>
          <h3 className="font-headline-md text-2xl text-text-primary mb-4">Have a complex project?</h3>
          <p className="text-on-surface-variant mb-8">I specialize in building production-grade full-stack architectures that scale from day one.</p>
          <div className="btn-octagon-wrapper bg-primary-container drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">
            <a className="btn-octagon-inner bg-primary-container text-on-primary px-10 py-4 font-bold text-lg hover:bg-primary-container/80 transition-colors" href="#">
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
