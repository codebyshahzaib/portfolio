import ReactivePathfinding from "@/components/ReactivePathfinding";
import HeroText from "@/components/HeroText";
import TechTicker from "@/components/TechTicker";
import CoreCompetencies from "@/components/CoreCompetencies";
import AgenticHero from "@/components/AgenticHero";
import AiCapabilities from "@/components/AiCapabilities";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background"></div>
          <div className="absolute w-[800px] h-[800px] -top-96 -right-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute w-[600px] h-[600px] -bottom-96 -left-96 bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-[1200px] mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <HeroText />
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <ReactivePathfinding />
          </div>
        </div>
      </header>

      <TechTicker />

      {/* About Me Section */}
      <section className="py-[120px] max-w-[1200px] mx-auto px-8" id="about">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-surface-alternate border border-border-subtle relative overflow-hidden group">
              <img 
                alt="Portrait of Muhammad Shahzaib" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                src="/shahzaibpic.png" 
              />
              <div className="absolute inset-0 border-[20px] border-background"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-r-2 border-b-2 border-primary"></div>
            </div>
            <div className="absolute -top-10 -left-10 text-primary opacity-10">
              <span className="material-symbols-outlined text-[120px]">developer_mode</span>
            </div>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">
              Architect of the <span className="text-primary">Invisible</span>
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed">
              <p>I am Muhammad Shahzaib, a developer who believes code is a craft. With over 5 years of experience in building scalable web applications, I focus on the intersection of technical robustness and aesthetic precision.</p>
              <p>My approach is rooted in clean architecture and performance-first development. Whether it's optimizing a React render cycle or architecting a serverless backend, I strive for excellence in every line of code.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <div className="text-primary font-headline-md text-3xl mb-1">5+</div>
                <div className="text-label-caps font-label-caps uppercase text-on-surface-variant">Years Exp.</div>
              </div>
              <div>
                <div className="text-primary font-headline-md text-3xl mb-1">50+</div>
                <div className="text-label-caps font-label-caps uppercase text-on-surface-variant">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-[120px] bg-surface-alternate/50" id="skills">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
                Tech Stack <span className="text-primary">Capabilities</span>
              </h2>
              <p className="text-on-surface-variant mt-2 max-w-md">Engineered with the most efficient modern tools for high-performance outcomes.</p>
            </div>
            <div className="text-label-caps font-label-caps tracking-widest text-primary">SCALABLE • SECURE • FAST</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'code', title: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
              { icon: 'database', title: 'Backend', items: ['Node.js / Express', 'PostgreSQL', 'Redis / Kafka', 'GraphQL'] },
              { icon: 'cloud', title: 'DevOps', items: ['AWS / Google Cloud', 'Docker / K8s', 'CI/CD Pipelines', 'Terraform'] },
              { icon: 'architecture', title: 'Architecture', items: ['Microservices', 'Serverless', 'TDD / BDD', 'Design Systems'] }
            ].map((skill, idx) => (
              <div key={idx} className="terminal-bg p-8 hover:border-primary transition-colors group glow-hover">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</span>
                <h3 className="font-headline-md text-lg mb-2">{skill.title}</h3>
                <ul className="text-on-surface-variant text-sm space-y-2 font-mono-code">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoreCompetencies />

      {/* Projects Bento Grid */}
      <section className="py-[120px] max-w-[1200px] mx-auto px-8" id="projects">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Selected <span className="text-primary">Works</span></h2>
          <p className="text-on-surface-variant mt-4">A showcase of production-grade engineering and design.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Project 1: Big Bento */}
          <div className="md:col-span-2 md:row-span-2 bento-card relative overflow-hidden group">
            <img alt="Fintech Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://lh3.googleusercontent.com/aida/AP1WRLt39Sh6zfTq7Ach0eo3Rd-4EVpGOLXyNqFht7xKjGFYIXIAPE9IANolmQJv9x19Mv5fEqa-KMbHT3dWukyLhFj266Hp9yded6zGLYdYHQu27_QRa74m5Oi6rIm_PZ6Q8IR7ec3NIqt2xNsslF_j3iJl4Swsl52O2l8YmgdqyNicjcicNATwTnYXjHP1EXBRAlIRIgs2tjVFcBZykk4sFzBovkgVfApoYT6K2UagGrHnP9UdyLqfpUtE_EQV"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-label-caps text-primary mb-2">FINTECH SAAS</div>
              <h3 className="font-headline-md text-2xl mb-4">NEON CAPITAL DASHBOARD</h3>
              <p className="text-on-surface-variant max-w-md mb-6">Real-time cryptocurrency analytics platform with millisecond latency and custom charting library.</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">open_in_new</span>
                <span className="material-symbols-outlined hover:text-primary transition-colors cursor-pointer">code</span>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bento-card p-8 flex flex-col justify-end group">
            <div className="mb-auto">
              <span className="material-symbols-outlined text-primary text-3xl">shopping_cart</span>
            </div>
            <div className="text-label-caps text-primary mb-1">E-COMMERCE</div>
            <h3 className="font-headline-md text-xl">LUMINA STORE</h3>
            <p className="text-on-surface-variant text-sm mt-2">Headless commerce with Next.js &amp; Shopify API.</p>
          </div>
          {/* Project 3 */}
          <div className="bento-card p-8 flex flex-col justify-end group">
            <div className="mb-auto">
              <span className="material-symbols-outlined text-primary text-3xl">smart_toy</span>
            </div>
            <div className="text-label-caps text-primary mb-1">AI / ML</div>
            <h3 className="font-headline-md text-xl">VOX INTELLIGENCE</h3>
            <p className="text-on-surface-variant text-sm mt-2">NLP processing engine for automated support.</p>
          </div>
          {/* Project 4: Wide Bento */}
          <div className="md:col-span-3 bento-card relative overflow-hidden group h-[300px]">
            <div className="absolute inset-0 flex items-center justify-between px-12">
              <div className="max-w-lg z-10">
                <div className="text-label-caps text-primary mb-2">INFRASTRUCTURE</div>
                <h3 className="font-headline-md text-2xl mb-2">TITAN DEPLOY SYSTEM</h3>
                <p className="text-on-surface-variant">Automated Kubernetes deployment orchestration for multi-cloud environments, reducing deployment times by 60%.</p>
              </div>
              <div className="hidden md:block z-10">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl backdrop-blur-xl">
                  <pre className="font-mono-code text-[10px] text-primary">
{`deploy:
  stage: production
  image: alpine:latest
  script:
    - helm upgrade titan ./charts`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-[120px] bg-surface-container-lowest" id="experience">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-16 text-center">Career <span className="text-primary">Trajectory</span></h2>
          <div className="relative max-w-4xl mx-auto pl-8 border-l border-border-subtle space-y-16">
            {[
              { role: 'Senior Software Engineer', company: 'TechFlow Solutions', period: '2021 — PRESENT', desc: 'Leading a team of 5 developers to rebuild the core banking API infrastructure using Go and gRPC. Increased system throughput by 200% while maintaining 99.99% uptime.', isCurrent: true },
              { role: 'Full-Stack Developer', company: 'Creative Logic Agency', period: '2019 — 2021', desc: 'Developed responsive, pixel-perfect web applications for Fortune 500 clients. Specialized in creating high-performance interactive experiences with Three.js and GSAP.', isCurrent: false },
              { role: 'Bachelor of Computer Science', company: 'Global Institute of Technology', period: '2015 — 2019', desc: 'Graduated with Honors. Specialized in Software Engineering and Distributed Systems. President of the University Coding Club.', isCurrent: false },
            ].map((job, idx) => (
              <div key={idx} className="relative glow-hover p-4 -ml-4 rounded-lg transition-all">
                <div className={`absolute -left-[37px] top-4 w-4 h-4 rotate-45 border-4 border-background ${job.isCurrent ? 'bg-primary' : 'bg-border-subtle'}`}></div>
                <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
                  <div>
                    <h3 className="font-headline-md text-xl">{job.role}</h3>
                    <div className="text-primary font-medium mt-1">{job.company}</div>
                  </div>
                  <div className="text-label-caps text-on-surface-variant bg-surface-alternate px-3 py-1 border border-border-subtle">{job.period}</div>
                </div>
                <p className="mt-4 text-on-surface-variant leading-relaxed">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgenticHero />
      <AiCapabilities />

      {/* Contact Section */}
      <section className="py-[120px] max-w-[1200px] mx-auto px-8" id="contact">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">Let's Build the <span className="text-primary">Future</span> Together</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">Have a project in mind or just want to chat about technical architecture? Drop a message and let's start something great.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <div className="text-label-caps text-on-surface-variant text-[11px] uppercase">Email Me</div>
                  <div className="font-medium">m.shahzaib@engineer.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <div className="text-label-caps text-on-surface-variant text-[11px] uppercase">Location</div>
                  <div className="font-medium">International / Remote</div>
                </div>
              </div>
            </div>
          </div>
          <form className="terminal-bg p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-label-caps text-on-surface-variant uppercase text-[11px]">Name</label>
                <input className="w-full bg-[#05050A] border border-border-subtle focus:border-primary focus:ring-0 text-on-surface font-mono-code p-3 transition-colors outline-none" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-label-caps text-on-surface-variant uppercase text-[11px]">Email</label>
                <input className="w-full bg-[#05050A] border border-border-subtle focus:border-primary focus:ring-0 text-on-surface font-mono-code p-3 transition-colors outline-none" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-label-caps text-on-surface-variant uppercase text-[11px]">Subject</label>
              <select className="w-full bg-[#05050A] border border-border-subtle focus:border-primary focus:ring-0 text-on-surface font-mono-code p-3 transition-colors outline-none appearance-none">
                <option>New Project Collaboration</option>
                <option>Technical Consultation</option>
                <option>Career Opportunity</option>
                <option>Just Saying Hi</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-label-caps text-on-surface-variant uppercase text-[11px]">Message</label>
              <textarea className="w-full bg-[#05050A] border border-border-subtle focus:border-primary focus:ring-0 text-on-surface font-mono-code p-3 transition-colors outline-none resize-none" placeholder="How can I help you?" rows={4}></textarea>
            </div>
            <div className="btn-octagon-wrapper w-full bg-primary drop-shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all">
              <button className="btn-octagon-inner w-full py-4 bg-primary text-on-primary font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="button">
                SEND TRANSMISSION
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
