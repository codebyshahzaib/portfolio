import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Experience & Education | Muhammad Shahzaib",
};

export default function ExperiencePage() {
  return (
    <main className="pt-32 pb-section-gap px-6 max-w-container-max mx-auto">
      {/* Header Section */}
      <header className="text-center mb-24">
        <span className="font-mono-code text-mono-code text-primary-container tracking-widest uppercase drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
          // MY JOURNEY
        </span>
        <h1 className="font-headline-lg-mobile md:text-headline-lg text-text-primary mt-4">Experience &amp; Education</h1>
      </header>

      {/* Timeline Section */}
      <section className="relative">
        {/* Center Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-border-subtle to-transparent"></div>
        
        <div className="space-y-16 md:space-y-32">
          {/* Entry 1: Work Experience (Left/Mobile Full) */}
          <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
            <div className="w-full md:w-[calc(50%-48px)]">
              <div className="bento-card bg-surface-card border border-border-subtle rounded-xl p-card-padding hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="font-headline-md text-text-primary">OzoneSync Limited</h3>
                  <span className="px-3 py-1 border border-primary-container text-primary-container font-label-caps text-[11px] rounded-full uppercase tracking-wider">
                    Currently Here
                  </span>
                </div>
                <p className="font-body-base text-primary-container mb-2">Full-Stack Developer Intern</p>
                <p className="font-label-caps text-on-surface-variant/60 mb-8">January 2026 – Present · Remote</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group/item">
                    <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">chevron_right</span>
                    <span className="text-on-surface-variant group-hover/item:text-text-primary transition-colors">
                      Redesigned the company corporate website from scratch — modern, fully responsive.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">chevron_right</span>
                    <span className="text-on-surface-variant group-hover/item:text-text-primary transition-colors">
                      Built gamified EdTech platform with browser-based games using React and Phaser.js.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">chevron_right</span>
                    <span className="text-on-surface-variant group-hover/item:text-text-primary transition-colors">
                      Developed internal File Management System for structured digital asset organization.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <span className="material-symbols-outlined text-primary-container text-[20px] shrink-0 mt-0.5">chevron_right</span>
                    <span className="text-on-surface-variant group-hover/item:text-text-primary transition-colors">
                      Delivered features end-to-end: React UI, Node/Express APIs, MongoDB, Postman testing.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Diamond Node Indicator */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 rotate-45 bg-primary-container shadow-[0_0_15px_rgba(0,212,255,0.6)]"></div>
            </div>
            <div className="hidden md:block w-[calc(50%-48px)]"></div>
          </div>

          {/* Entry 2: Education (Right/Mobile Full) */}
          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between w-full group">
            <div className="w-full md:w-[calc(50%-48px)]">
              <div className="bento-card bg-surface-card border border-border-subtle rounded-xl p-card-padding hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300">
                <h3 className="font-headline-md text-text-primary mb-2">Quaid-i-Azam University</h3>
                <p className="font-body-base text-primary-container mb-2">B.S. Computer Science</p>
                <p className="font-label-caps text-on-surface-variant/60 mb-8">Sep 2021 – Nov 2025 · Islamabad, Pakistan</p>
                <div className="space-y-4">
                  <p className="font-mono-code text-[12px] text-primary-container tracking-widest uppercase">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Operating Systems", "Data Structures & Algorithms", "Database Management", "Software Design", "OOP", "Web Development"].map((course) => (
                      <span key={course} className="px-3 py-1.5 bg-tag-bg border border-tag-border rounded-lg text-[13px] text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Diamond Node Indicator */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-4 h-4 rotate-45 bg-primary-container shadow-[0_0_15px_rgba(0,212,255,0.6)]"></div>
            </div>
            <div className="hidden md:block w-[calc(50%-48px)]"></div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="mt-section-gap">
        <div className="mb-12">
          <span className="font-mono-code text-mono-code text-primary-container tracking-widest uppercase drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]">
            // CERTIFICATIONS
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
          {/* Cert 1 */}
          <div className="bento-card bg-surface-card border border-border-subtle rounded-[14px] p-6 relative group overflow-hidden hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/5 rounded-xl">
                <span className="material-symbols-outlined text-primary-container text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div>
                <h4 className="font-headline-md text-[18px] text-text-primary leading-tight group-hover:text-primary transition-colors">Microsoft Azure AZ-900</h4>
                <p className="font-label-caps text-[13px] text-on-surface-variant/70 mt-1">Cloud Fundamentals Certification</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-6 font-mono-code text-[12px] text-primary-container/80 uppercase">2024</div>
          </div>
          {/* Cert 2 */}
          <div className="bento-card bg-surface-card border border-border-subtle rounded-[14px] p-6 relative group overflow-hidden hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/5 rounded-xl">
                <span className="material-symbols-outlined text-primary-container text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div>
                <h4 className="font-headline-md text-[18px] text-text-primary leading-tight group-hover:text-primary transition-colors">Docker &amp; DevOps Fundamentals</h4>
                <p className="font-label-caps text-[13px] text-on-surface-variant/70 mt-1">Containerization &amp; Pipeline Mastery</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-6 font-mono-code text-[12px] text-primary-container/80 uppercase">2023</div>
          </div>
          {/* Cert 3 */}
          <div className="bento-card bg-surface-card border border-border-subtle rounded-[14px] p-6 relative group overflow-hidden hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/5 rounded-xl">
                <span className="material-symbols-outlined text-primary-container text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div>
                <h4 className="font-headline-md text-[18px] text-text-primary leading-tight group-hover:text-primary transition-colors">Career Path Essentials</h4>
                <p className="font-label-caps text-[13px] text-on-surface-variant/70 mt-1">IESE / Coursera Specialization</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-6 font-mono-code text-[12px] text-primary-container/80 uppercase">2023</div>
          </div>
          {/* Cert 4 */}
          <div className="bento-card bg-surface-card border border-border-subtle rounded-[14px] p-6 relative group overflow-hidden hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/5 rounded-xl">
                <span className="material-symbols-outlined text-primary-container text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              </div>
              <div>
                <h4 className="font-headline-md text-[18px] text-text-primary leading-tight group-hover:text-primary transition-colors">Version Control / Git</h4>
                <p className="font-label-caps text-[13px] text-on-surface-variant/70 mt-1">Meta Professional Certificate</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-6 font-mono-code text-[12px] text-primary-container/80 uppercase">2022</div>
          </div>
        </div>
      </section>
    </main>
  );
}
