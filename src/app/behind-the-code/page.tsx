import RevealSection from "@/components/RevealSection";
import LogicBreakerTerminal from "@/components/LogicBreakerTerminal";
import Link from "next/link";

export const metadata = {
  title: "Behind the Code | Shahzaib.dev",
};

export default function BehindTheCode() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <RevealSection className="max-w-[1200px] mx-auto px-6 mb-[120px]">
        <div className="max-w-3xl">
          <span className="font-mono-code text-sm text-primary-container mb-4 block tracking-widest uppercase">
            System Analytics v2.0
          </span>
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary leading-none mb-8">
            Behind the Code: Engineering Logic
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl">
            A deep dive into the algorithmic architecture and engineering principles behind the{" "}
            <span className="text-primary-container">Reactive Pathfinding</span> engine and the{" "}
            <span className="text-primary-container">Logic Breaker Terminal</span> experience.
          </p>
        </div>
      </RevealSection>

      {/* Reactive Pathfinding Section */}
      <RevealSection className="max-w-[1200px] mx-auto px-6 mb-[120px]">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border-subtle"></div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            01. Reactive Pathfinding
          </h2>
        </div>
        <div className="bento-grid">
          {/* Logic Explanation */}
          <div className="col-span-12 md:col-span-7 bg-surface-card border border-border-subtle p-8 rounded-xl glow-hover transition-all duration-300">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">The A* Algorithm Implementation</h3>
            <p className="text-on-surface-variant mb-6 leading-relaxed">
              The core navigation relies on a custom implementation of the A* (A-Star) search algorithm. It calculates the most efficient path by balancing the cost from the start (G) and the estimated cost to the end (H).
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">grid_view</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-1">Real-time Grid Management</h4>
                  <p className="text-sm text-outline">
                    Dynamic weighting of nodes based on real-time obstacle placement with O(log n) efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary-container">radar</span>
                <div>
                  <h4 className="font-bold text-on-surface mb-1">Heuristic Estimation</h4>
                  <p className="text-sm text-outline">
                    Manhattan distance heuristic optimized for 4-directional movement on a square grid.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Code Snippet */}
          <div className="col-span-12 md:col-span-5 bg-surface-alternate border border-border-subtle p-6 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono-code text-xs text-outline italic">pathfinding.engine.js</span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
              </div>
            </div>
            <pre className="font-mono-code text-sm text-primary/80 overflow-x-auto whitespace-pre">
{`function findPath(start, target) {
  let openSet = [start];
  let closedSet = [];

  while (openSet.length > 0) {
    let winner = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[winner].f) {
        winner = i;
      }
    }
    // ... logic continues
  }
}`}
            </pre>
          </div>
          
          {/* Visual Logic */}
          <div className="col-span-12 bg-surface-card border border-border-subtle p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: "radial-gradient(var(--color-primary-container) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-xl">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Obstacle Detection & Re-routing
                </h3>
                <p className="text-on-surface-variant">
                  The system utilizes a 1D coordinate mapping of a 2D array to ensure ultra-fast lookup during collision detection. When the user "draws" obstacles, the engine triggers an immediate partial graph re-scan instead of a full reset to preserve performance.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-black/40 rounded-lg border border-primary/20 flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-lg mix-blend-screen opacity-60"
                  alt="A macro close-up of a glowing digital motherboard"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuPNanNlYUBlGYV2bhyXQz3QlATGpmO2xJu6BHWRcxJgz0Oc4fhHuyLpYexzbi257-qFWegzjZz-hu0ldfRfo9GoXFu_KMSBP7j5cAWBwaO4PEe8NS8S3HzNQUprgIWgrKGKwVhhp7KRsXfXYYR0kufF7047EeQECZZrIC2-YKQlVHsffue0wnC_VSszPuT2WlRrJ_KSF5aF7mnuvuVuwd7PwiHEO5gHKxFGwFfN1qBzoUJ60DgD-r8Uw1J"
                />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Logic Breaker Terminal Section */}
      <RevealSection className="max-w-[1200px] mx-auto px-6 mb-[120px]">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            02. Logic Breaker Terminal
          </h2>
          <div className="h-px flex-1 bg-border-subtle"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: "terminal", title: "Command Parsing", desc: "A custom recursive parser built in vanilla JavaScript that identifies flags, arguments, and piped commands without external libraries." },
            { icon: "memory", title: "State Persistence", desc: "Uses a local-storage based 'Shadow DOM' simulation to maintain terminal history and current directory structure across sessions." },
            { icon: "extension", title: "Puzzle Logic", desc: "The 'Breaker' puzzles use a weighted randomization seed to ensure solvable but challenging sequence-matching patterns." },
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-card border border-border-subtle p-8 rounded-xl glow-hover transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* The Live Terminal Game */}
        <div className="mb-12 flex justify-center">
          <LogicBreakerTerminal />
        </div>

        {/* Full-width Terminal Breakdown */}
        <div className="mt-6 bg-[#0D0D16] border border-primary/20 rounded-xl p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h4 className="font-mono-code text-primary uppercase tracking-widest mb-4">Architecture Deep Dive</h4>
              <p className="text-on-surface-variant mb-6">
                The terminal was designed as a "Shell-as-a-Service" component. It separates the **Input Layer** (User typing), the **Kernel** (Parsing & Logic), and the **View Layer** (Rendering results). This decoupled architecture allows for easy extension of new commands.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-tag-bg border border-tag-border text-xs font-mono-code text-primary">Vanilla JS</span>
                <span className="px-3 py-1 rounded-full bg-tag-bg border border-tag-border text-xs font-mono-code text-primary">RegEx Parsing</span>
                <span className="px-3 py-1 rounded-full bg-tag-bg border border-tag-border text-xs font-mono-code text-primary">Event Delegation</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 rounded-lg bg-black p-4 font-mono-code text-xs leading-relaxed text-green-400 border border-white/5 shadow-2xl">
              <div className="mb-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-1">
                <p className="text-white/40">// Parsing Logic Example</p>
                <p>{"const parse = (input) => {"}</p>
                <p className="pl-4">{"const tokens = input.match(/'[^']*'|\"[^\"]*\"|\\S+/g);"}</p>
                <p className="pl-4">{"const cmd = tokens[0].toLowerCase();"}</p>
                <p className="pl-4">{"const args = tokens.slice(1);"}</p>
                <p className="pl-4">{"return execute(cmd, args);"}</p>
                <p>{"}"}</p>
                <p className="text-white/40 mt-4">{"system@shahzaib:~$ _"}</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Engineering Principles */}
      <RevealSection className="max-w-[1200px] mx-auto px-6 mb-[120px]">
        <div className="bg-surface-container-lowest border-y border-border-subtle py-16 px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Performance Optimization</h2>
            <p className="font-mono-code text-sm text-outline">Metrics & Philosophy</p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="text-primary-container">◆</span> DOM vs Canvas
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                While Canvas offers better rendering for thousands of nodes, I chose a DOM-based approach for the pathfinding grid to leverage CSS transitions and native event delegation, optimizing for accessibility and dev-tools inspectability.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-on-surface mb-3 flex items-center gap-2">
                <span className="text-primary-container">◆</span> Clean Code
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Adherence to SOLID principles ensured that the terminal logic remains isolated from the UI, allowing for seamless integration of the "Game" logic as a child module.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* CTA Section */}
      <RevealSection className="max-w-[1200px] mx-auto px-6 mb-[120px] text-center">
        <div className="py-20 border border-dashed border-border-subtle rounded-3xl">
          <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8">
            Ready to see it in action?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="btn-octagon-wrapper bg-primary drop-shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-all transform hover:-translate-y-1">
              <button className="btn-octagon-inner px-10 py-4 bg-primary text-on-primary font-bold hover:bg-primary/90 transition-all w-full h-full">
                View Live Project
              </button>
            </div>
            <div className="group btn-octagon-wrapper bg-primary/40 hover:bg-primary drop-shadow-[0_0_5px_rgba(0,212,255,0.2)] hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all transform hover:-translate-y-1">
              <Link
                href="/"
                className="btn-octagon-inner px-10 py-4 bg-[#0A0A0F] text-primary font-bold group-hover:bg-primary group-hover:text-on-primary transition-all flex items-center justify-center gap-2 w-full h-full"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>
    </main>
  );
}
