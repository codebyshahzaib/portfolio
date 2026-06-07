"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroText() {
  const roles = ["Full-Stack Developer", "MERN Stack Engineer", "Cloud-Curious Builder"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentRole.length) {
      const timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const currentText = roles[roleIndex].substring(0, charIndex);

  return (
    <div className="flex flex-col text-left">
      <div className="mb-4 flex items-center gap-4 justify-start">
        <span className="font-mono-code text-sm text-primary-container tracking-wider">&gt; Hello, World — I'm</span>
        <div className="h-[1px] w-12 bg-outline-variant/30"></div>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-4 leading-tight tracking-tight uppercase">
        MUHAMMAD <br /> SHAHZAIB
      </h1>

      <div className="mb-6 min-h-[1.5em] flex items-center">
        <p className="font-headline-md text-xl md:text-2xl font-semibold text-primary-container/80">
          {currentText}
          <span className="animate-pulse ml-[1px] text-primary-container">|</span>
        </p>
      </div>

      <p className="font-body-base text-base text-on-surface-variant max-w-xl mb-8 leading-relaxed opacity-80">
        I build production-grade web applications with the MERN stack — from responsive UIs to scalable backends and cloud-integrated services.
      </p>

      <div className="flex flex-col sm:flex-row gap-5 mb-10">
        <div className="group btn-octagon-wrapper w-full sm:w-[200px] bg-primary-container drop-shadow-[0_0_10px_rgba(0,212,255,0.4)] hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all pacman-white">
          <Link href="#projects" className="btn-octagon-inner w-full h-full bg-primary-container text-on-primary-container font-bold flex justify-center items-center gap-2 py-4 transition-all duration-300 text-sm group-hover:bg-[#3cd7ff]">
            View My Work
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
        <div className="group btn-octagon-wrapper w-full sm:w-[200px] bg-primary-container/40 hover:bg-primary-container drop-shadow-[0_0_5px_rgba(0,212,255,0.2)] hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all pacman-white">
          <Link href="#contact" className="btn-octagon-inner w-full h-full bg-[#0A0A0F] text-primary-container font-bold flex justify-center items-center gap-2 py-4 group-hover:bg-primary-container group-hover:text-on-primary-container transition-all duration-300 text-sm tracking-wide">
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-6 border-t border-border-subtle pt-6">
        <span className="font-label-caps text-on-surface-variant uppercase tracking-[0.2em] text-[11px]">Connect</span>
        <div className="flex gap-6">
          <Link href="https://github.com" target="_blank" className="text-on-surface-variant hover:text-primary-container transition-all duration-300 flex items-center gap-2 group relative">
            <span className="material-symbols-outlined text-[24px]">terminal</span>
            <span className="font-mono-code text-[12px] opacity-0 group-hover:opacity-100 transition-opacity absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="text-on-surface-variant hover:text-primary-container transition-all duration-300 flex items-center gap-2 group relative">
            <span className="material-symbols-outlined text-[24px]">hub</span>
            <span className="font-mono-code text-[12px] opacity-0 group-hover:opacity-100 transition-opacity absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">LinkedIn</span>
          </Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary-container transition-all duration-300 flex items-center gap-2 group relative">
            <span className="material-symbols-outlined text-[24px]">work</span>
            <span className="font-mono-code text-[12px] opacity-0 group-hover:opacity-100 transition-opacity absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">Upwork</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
