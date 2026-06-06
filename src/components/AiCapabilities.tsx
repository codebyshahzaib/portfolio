import React from "react";

const capabilities = [
  {
    id: "01",
    title: "Multi-Agent Orchestration",
    description: "Designing workflows where specialized agents collaborate, delegate, and debate to solve highly complex logic problems without human intervention."
  },
  {
    id: "02",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Connecting Large Language Models to private enterprise data and vector databases to guarantee accurate, hallucination-free domain knowledge."
  },
  {
    id: "03",
    title: "Autonomous Tool Execution",
    description: "Engineering agents that can independently read API documentation, execute code, fetch web data, and write to databases to complete objectives."
  },
  {
    id: "04",
    title: "Context & Memory Systems",
    description: "Implementing long-term agent memory using semantic vector search and recursive summarization for persistent, context-aware digital assistants."
  }
];

export default function AiCapabilities() {
  return (
    <section className="py-[120px] bg-surface-container-lowest border-b border-border-subtle relative">
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-display-xl text-4xl md:text-5xl font-bold text-on-surface mb-4">
            AI <span className="text-primary-container">Capabilities</span>
          </h2>
          <p className="text-on-surface-variant font-body-base max-w-2xl mx-auto">
            Translating cutting-edge AI research into robust, production-ready systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div 
              key={cap.id} 
              className="bg-surface border border-border-subtle p-8 hover:border-primary-container/40 transition-colors duration-500 relative group"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-6">
                <div className="font-mono-code text-3xl font-light text-border-subtle group-hover:text-primary-container/40 transition-colors duration-500">
                  {cap.id}
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">
                    {cap.title}
                  </h3>
                  <p className="font-body-base text-on-surface-variant text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
