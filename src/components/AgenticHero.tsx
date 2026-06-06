import React from "react";

export default function AgenticHero() {
  return (
    <section className="py-[120px] relative bg-surface-alternate border-y border-border-subtle overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff0a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-[1200px] mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Agentic AI Copy */}
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono-code text-primary-container text-sm tracking-widest uppercase">
              // Autonomous Systems
            </span>
            <div className="h-px w-12 bg-primary-container/30"></div>
          </div>
          
          <h2 className="font-display-xl text-4xl md:text-5xl font-bold text-on-surface mb-6">
            Building <span className="text-primary-container">Agentic AI</span> Workflows
          </h2>
          
          <p className="font-body-base text-on-surface-variant text-lg leading-relaxed mb-8 max-w-lg">
            Beyond standard chatbots and text generation. I architect autonomous AI agents capable of reasoning, utilizing tools, and executing complex multi-step tasks to solve real business problems.
          </p>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 border border-border-subtle px-4 py-2 rounded-sm bg-surface">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-mono-code text-xs text-on-surface uppercase tracking-wider">Agents Active</span>
            </div>
          </div>
        </div>

        {/* Right Side: Agent Loop Visualization */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary-container/5 blur-3xl rounded-full"></div>
          
          <div className="relative bg-surface border border-border-subtle p-8 rounded-lg shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-subtle">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-border-subtle"></div>
                <div className="w-3 h-3 rounded-full bg-border-subtle"></div>
                <div className="w-3 h-3 rounded-full bg-primary-container"></div>
              </div>
              <span className="font-mono-code text-xs text-on-surface-variant uppercase tracking-wider">
                Reasoning_Loop.ts
              </span>
            </div>

            {/* Loop Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded bg-surface-alternate border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">psychology</span>
                </div>
                <div>
                  <div className="font-mono-code text-sm text-on-surface font-medium mb-1">&gt; THINK</div>
                  <div className="font-body-base text-sm text-on-surface-variant">Analyzing user intent and breaking down the complex objective into sub-tasks.</div>
                </div>
              </div>
              
              {/* Connection Line */}
              <div className="w-px h-6 bg-border-subtle ml-4"></div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded bg-surface-alternate border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">build</span>
                </div>
                <div>
                  <div className="font-mono-code text-sm text-on-surface font-medium mb-1">&gt; ACT</div>
                  <div className="font-body-base text-sm text-on-surface-variant">Querying vector database (RAG) and executing external API tools autonomously.</div>
                </div>
              </div>

              {/* Connection Line */}
              <div className="w-px h-6 bg-border-subtle ml-4"></div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded bg-surface-alternate border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-primary-container">visibility</span>
                </div>
                <div>
                  <div className="font-mono-code text-sm text-on-surface font-medium mb-1">&gt; OBSERVE</div>
                  <div className="font-body-base text-sm text-on-surface-variant">Evaluating API responses and verifying if the goal state has been reached.</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
