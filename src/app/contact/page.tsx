"use client";

import React from "react";


export default function ContactPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <section className="pt-section-gap pb-section-gap px-8 bg-gradient-to-b from-[#0A0A0F] to-[#0C0C14]" id="contact">
        <div className="max-w-container-max mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="font-mono-code text-mono-code text-primary-container tracking-widest uppercase block">
              // GET IN TOUCH
            </span>
            <h2 className="font-headline-lg text-headline-lg text-text-primary">Let's Build Something Together</h2>
            <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl mx-auto">
              I'm currently open to cloud internship opportunities, freelance projects, and full-time developer roles. If you have something in mind — let's talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-start">
            {/* LEFT COLUMN: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h3 className="font-headline-md text-headline-md text-text-primary mb-8">Reach Me Directly</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start group hover:border-l-[3px] hover:border-primary pl-4 hover:pl-[13px] py-2 rounded-r-lg hover:bg-primary/5 transition-all duration-300 border-l-[3px] border-transparent">
                    <div className="p-3 rounded-lg bg-surface-container-low mr-4 group-hover:bg-primary-container/10 transition-colors">
                      <span className="material-symbols-outlined text-primary-container">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono-code text-label-caps text-on-surface-variant uppercase mb-1">Email</span>
                      <a className="font-body-base text-body-base text-text-primary group-hover:text-primary-container transition-colors" href="mailto:shahzaibmyinfo@gmail.com">
                        shahzaibmyinfo@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start group hover:border-l-[3px] hover:border-primary pl-4 hover:pl-[13px] py-2 rounded-r-lg hover:bg-primary/5 transition-all duration-300 border-l-[3px] border-transparent">
                    <div className="p-3 rounded-lg bg-surface-container-low mr-4 group-hover:bg-primary-container/10 transition-colors">
                      <span className="material-symbols-outlined text-primary-container">link</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono-code text-label-caps text-on-surface-variant uppercase mb-1">LinkedIn</span>
                      <a className="font-body-base text-body-base text-text-primary group-hover:text-primary-container transition-colors" href="https://linkedin.com/in/mshahzaib0003" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/mshahzaib0003
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-start group hover:border-l-[3px] hover:border-primary pl-4 hover:pl-[13px] py-2 rounded-r-lg hover:bg-primary/5 transition-all duration-300 border-l-[3px] border-transparent">
                    <div className="p-3 rounded-lg bg-surface-container-low mr-4 group-hover:bg-primary-container/10 transition-colors">
                      <span className="material-symbols-outlined text-primary-container">code</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono-code text-label-caps text-on-surface-variant uppercase mb-1">GitHub</span>
                      <a className="font-body-base text-body-base text-text-primary group-hover:text-primary-container transition-colors" href="https://github.com/codebyshahzaib" target="_blank" rel="noopener noreferrer">
                        github.com/codebyshahzaib
                      </a>
                    </div>
                  </div>

                  {/* Upwork */}
                  <div className="flex items-start group hover:border-l-[3px] hover:border-primary pl-4 hover:pl-[13px] py-2 rounded-r-lg hover:bg-primary/5 transition-all duration-300 border-l-[3px] border-transparent">
                    <div className="p-3 rounded-lg bg-surface-container-low mr-4 group-hover:bg-primary-container/10 transition-colors">
                      <span className="material-symbols-outlined text-primary-container">work</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono-code text-label-caps text-on-surface-variant uppercase mb-1">Upwork</span>
                      <a className="font-body-base text-body-base text-text-primary group-hover:text-primary-container transition-colors" href="https://upwork.com/freelancers/~016ad4e63de405109c" target="_blank" rel="noopener noreferrer">
                        upwork.com/freelancers/~016ad4e63de405109c
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-surface-card border border-primary-container/20 p-8 rounded-xl space-y-4 shadow-lg shadow-primary-container/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[80px] text-primary-container">verified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.7)]"></div>
                  <span className="font-body-base text-body-base font-semibold text-primary-container">
                    Available for new opportunities
                  </span>
                </div>
                <p className="font-body-base text-on-surface-variant relative z-10">
                  Looking for a dedicated developer to join your team or tackle a project? Let's discuss how I can add value to your next big thing.
                </p>
                <div className="pt-4 border-t border-border-subtle flex justify-between items-center">
                  <div>
                    <span className="font-mono-code text-label-caps text-on-surface-variant uppercase">Typical response time</span>
                    <p className="font-body-base text-body-base text-text-primary">Within 24 hours</p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary-container flex items-center justify-center text-[10px] text-on-primary-fixed font-bold">
                      PK
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-card border border-border-subtle p-10 rounded-[20px] shadow-2xl relative">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-container/50 to-transparent"></div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono-code text-label-caps text-on-surface-variant uppercase" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        className="w-full bg-[#0A0A0F] border border-tag-border rounded-lg px-4 py-3 text-text-primary font-body-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono-code text-label-caps text-on-surface-variant uppercase" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-[#0A0A0F] border border-tag-border rounded-lg px-4 py-3 text-text-primary font-body-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono-code text-label-caps text-on-surface-variant uppercase" htmlFor="subject">
                      Subject
                    </label>
                    <select
                      className="w-full bg-[#0A0A0F] border border-tag-border rounded-lg px-4 py-3 text-text-primary font-body-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 appearance-none"
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select an option
                      </option>
                      <option value="job">Job Opportunity</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono-code text-label-caps text-on-surface-variant uppercase" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full bg-[#0A0A0F] border border-tag-border rounded-lg px-4 py-3 text-text-primary font-body-base focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 resize-none"
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                    ></textarea>
                  </div>
                  <button
                    className="w-full bg-primary-container text-on-primary-fixed font-headline-md font-bold py-4 rounded-lg hover:bg-[#3cd7ff] hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 group"
                    type="button"
                    onClick={() => alert("Message feature to be implemented")}
                  >
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-on-primary-fixed group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Visualization Placeholder */}
      <section className="h-[400px] w-full relative overflow-hidden group">
        <div className="absolute inset-0 grayscale contrast-125 opacity-50">
          <img
            className="w-full h-full object-cover"
            alt="A stylized high-contrast satellite view of an urban metropolitan grid at night."
            src="https://lh3.googleusercontent.com/aida/AP1WRLtpQR5jPLqRasQDG_Q48arjqEjJPBgTa5isMxITDFJub5lw6RmgMebywkmAyFySvxD2YIuDwYWn8Myom97pSlcx-oZcWk1iWxm7EtFUnafT27WU0_yuUg0KELq4c25aDADsz_l4fBD1X7tK7nyVkh7H0jUOVz7x7Qm3VQuy2VOg2jM36kLv8n88Xi8r7TvhREcoJL2DOoD7HyeBbWNY_O0Epex2jrD3JEP3YwKpKljQ-sr2q2o1m0EFQzmY"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-surface-card border border-primary-container/30 px-6 py-4 rounded-full backdrop-blur-sm shadow-2xl">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <span className="font-mono-code text-text-primary tracking-wide">BASED IN KARACHI, PK</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
