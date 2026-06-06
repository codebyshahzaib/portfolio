import React from "react";

const competencies = [
  {
    icon: "account_tree",
    title: "System Architecture",
    description: "Designing fault-tolerant microservices and scalable monoliths. Building robust data models and scalable API integrations that can handle high-throughput gracefully."
  },
  {
    icon: "speed",
    title: "Performance Optimization",
    description: "Shaving milliseconds off render cycles. Implementing advanced caching strategies, lazy loading, and database indexing to deliver lightning-fast user experiences."
  },
  {
    icon: "cloud_done",
    title: "Cloud Infrastructure",
    description: "Deploying robust serverless pipelines and containerized applications. Leveraging AWS, Docker, and CI/CD best practices for highly available deployments."
  }
];

export default function CoreCompetencies() {
  return (
    <section className="py-32 relative border-t border-border-subtle bg-surface/50">
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        
        <div className="mb-16 flex items-end justify-between border-b border-border-subtle pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono-code text-primary-container text-sm tracking-widest uppercase">
                // Expertise
              </span>
              <div className="h-px w-12 bg-primary-container/30"></div>
            </div>
            <h2 className="font-display-xl text-4xl md:text-5xl font-bold text-on-surface">
              Core Competencies
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {competencies.map((comp, i) => (
            <div 
              key={i} 
              className="bg-surface-card border border-border-subtle p-8 rounded-[10px] hover:border-primary-container/50 hover:bg-surface-alternate transition-all duration-500 group"
            >
              <div className="h-16 w-16 mb-8 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/20 group-hover:bg-primary-container/20 transition-all duration-500">
                <span className="material-symbols-outlined text-primary-container text-[32px]">
                  {comp.icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4 font-headline-md">
                {comp.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                {comp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
