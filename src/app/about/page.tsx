import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Me | Muhammad Shahzaib",
};

export default function AboutPage() {
  return (
    <main className="relative z-10 pt-[120px]">
      <section className="pt-section-gap pb-section-gap px-grid-gutter max-w-container-max mx-auto" id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="md:col-span-5 relative group">
            {/* Decorative Backdrop */}
            <div className="absolute inset-0 border-2 border-dashed border-[#00D4FF]/40 rounded-[20px] translate-x-4 translate-y-4 -z-10"></div>
            {/* Main Photo Container */}
            <div className="relative w-full aspect-[4/4.8] max-w-[400px] rotate-2 glow-cyan rounded-[20px] overflow-hidden bg-surface-container transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
              {/* Note: Using img tag instead of Next/Image for external URLs to avoid requiring next.config.js domains setup */}
              <img
                alt="Muhammad Shahzaib"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AP1WRLsAikJaOsU1cnwqHZPSu1KiRW3uN-2mtMtahrKgpxtQzMiFiu0NVqKxPZVvaR2IDA2--Ehq8RgRDorHXXH8tCoVu5AfEeQTSmywO-UfX-fYZb5JbkRjsbIn2uYnv0F9Bpkg24hXMMdje23ziyMS_9ehOL5MIQaZxbeHSvJkRshrfAYQn20PoJKJ05023rCQGAC8mFobwXAU1dNicwpdP1SP9OkIT_H64pgEJNdIFG7JFBO00a7lF8yHFV9h"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div>
              <span className="font-mono-code text-[12px] uppercase tracking-[0.2em] text-primary-container block mb-2">
                // ABOUT ME
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Who I Am</h2>
              <div className="w-10 h-[3px] bg-primary-container"></div>
            </div>
            <div className="flex flex-col gap-5 max-w-2xl">
              <p className="font-body-base text-body-base text-[#A0A0B8] leading-[1.8]">
                I am a Computer Science graduate driven by the mission of transforming complex logic into seamless, real-world digital products. My approach is rooted in technical precision and architectural scalability.
              </p>
              <p className="font-body-base text-body-base text-[#A0A0B8] leading-[1.8]">
                Currently, I am expanding my craft as a Full-Stack Intern at <span className="text-primary font-medium">OzoneSync Limited</span>, where I contribute to building robust EdTech platforms and high-performance corporate ecosystems.
              </p>
              <p className="font-body-base text-body-base text-[#A0A0B8] leading-[1.8]">
                Looking ahead, I am specializing in Cloud Architecture and DevOps practices. My current roadmap includes mastering Azure (AZ-900) and Docker to engineer resilient, automated infrastructure for the modern web.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-surface-card border border-border-subtle p-[20px_24px] rounded-xl hover:border-primary-container transition-colors duration-300">
                <div className="font-headline-md text-primary-container text-[42px] leading-tight font-bold">5+</div>
                <div className="font-label-caps text-[13px] text-on-surface-variant mt-2">Projects Shipped</div>
              </div>
              <div className="bg-surface-card border border-border-subtle p-[20px_24px] rounded-xl hover:border-primary-container transition-colors duration-300">
                <div className="font-headline-md text-primary-container text-[42px] leading-tight font-bold">1+</div>
                <div className="font-label-caps text-[13px] text-on-surface-variant mt-2">Years Experience</div>
              </div>
              <div className="bg-surface-card border border-border-subtle p-[20px_24px] rounded-xl hover:border-primary-container transition-colors duration-300">
                <div className="font-headline-md text-primary-container text-[42px] leading-tight font-bold">3+</div>
                <div className="font-label-caps text-[13px] text-on-surface-variant mt-2">Cloud Systems</div>
              </div>
              <div className="bg-surface-card border border-border-subtle p-[20px_24px] rounded-xl hover:border-primary-container transition-colors duration-300">
                <div className="font-headline-md text-primary-container text-[42px] leading-tight font-bold">18</div>
                <div className="font-label-caps text-[13px] text-on-surface-variant mt-2">GitHub Repos</div>
              </div>
            </div>

            {/* GitHub Activity Placeholder */}
            <div className="self-end mt-8 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-code text-[12px] text-on-surface-variant uppercase tracking-wider">
                  GitHub Activity
                </span>
                <div className="flex-grow h-px bg-border-subtle min-w-[100px]"></div>
              </div>
              <div className="flex gap-1 overflow-hidden">
                {/* Simulated Heatmap */}
                <div className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/20"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/40"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/10"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/60"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/80"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary-container"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/40"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/20"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/30"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/10"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/20"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/80"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/60"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary-container"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-primary/40"></div>
                <div className="w-2.5 h-2.5 rounded-sm bg-surface-container-highest"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
