"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type HistoryItem = {
  type: "echo" | "system" | "error" | "stats" | "success" | "hint";
  content: string | React.ReactNode;
};

const STATS_OUTPUT = (
  <div className="mt-4 border-t border-primary/20 pt-4 animate-pulse">
    <div className="text-tertiary font-bold mb-2">ACCESS GRANTED: DEV_PROFILE_REVEALED</div>
    <div className="grid grid-cols-1 gap-1 text-[12px]">
      <div>&gt; Lines of Code: <span className="text-white">120k+</span></div>
      <div>&gt; Caffeine Ratio: <span className="text-white">0.98</span></div>
      <div>&gt; Logic Proficiency: <span className="text-white">MAX</span></div>
      <div>&gt; Favorite Stack: <span className="text-white">Rust/React/AWS</span></div>
    </div>
    <div className="mt-4 text-[#27C93F] font-bold">HACK THE PLANET. EASTER EGG UNLOCKED.</div>
  </div>
);

export default function LogicBreakerTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "system", content: "Initializing core security modules... [OK]" },
    { type: "system", content: "Accessing portfolio mainframe... [OK]" },
    { type: "system", content: "Welcome to Logic Breaker v1.0.4. Type 'help' to begin." },
    { type: "system", content: <span className="text-tertiary">ENCRYPTED_SIGNAL detected: [0, 1, 1, 2, 3, ?]</span> },
  ]);
  const [input, setInput] = useState("");
  const [isSolved, setIsSolved] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const val = input.trim();
      const lowerVal = val.toLowerCase();
      setInput("");

      if (!val) return;

      const newHistory = [...history, { 
        type: "echo" as const, 
        content: <><span className="text-secondary">shahzaib@portfolio:~$</span> <span className="text-white">{val}</span></> 
      }];

      if (lowerVal === "clear") {
        setHistory([]);
        return;
      } else if (lowerVal === "help") {
        newHistory.push({ type: "system", content: "Available commands: help, hint, solve [answer], clear" });
      } else if (lowerVal === "hint") {
        newHistory.push({ type: "hint", content: "It's a recursive pattern where each number is the sum of the two preceding ones." });
      } else if (lowerVal.startsWith("solve ")) {
        const answer = lowerVal.split(" ")[1];
        if (answer === "5") {
          newHistory.push({ type: "success", content: "CORRECT. DECIPHERING DATA..." });
          newHistory.push({ type: "stats", content: STATS_OUTPUT });
          setIsSolved(true);
        } else {
          newHistory.push({ type: "error", content: "ERROR: SEQUENCE_MISMATCH. Try again." });
        }
      } else {
        newHistory.push({ type: "error", content: `Command not found: ${val}. Type 'help' for options.` });
      }

      setHistory(newHistory);
    }
  };

  return (
    <div className={`relative group hidden lg:block ${isSolved ? 'solved-glow' : ''}`}>
      <div
        id="terminal-container"
        className={`terminal-bg rounded-xl border border-border-subtle overflow-hidden shadow-2xl transition-all duration-500`}
      >
        {/* macOS Style Header */}
        <div className="bg-surface-container-highest px-4 py-3 flex items-center gap-2 border-b border-border-subtle">
          <div className="terminal-header-dot bg-[#FF5F56]"></div>
          <div className="terminal-header-dot bg-[#FFBD2E]"></div>
          <div className="terminal-header-dot bg-[#27C93F]"></div>
          <div className="flex-1 text-center text-[11px] font-mono-code text-on-surface-variant opacity-60 tracking-widest uppercase">
            logic-breaker — 80x24
          </div>
        </div>

        {/* Terminal Content */}
        <div
          id="terminal-content"
          ref={scrollRef}
          className="p-6 h-[340px] font-mono-code text-sm overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          <div id="output-history" className="space-y-1.5 text-primary">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={
                  item.type === "system" ? "text-on-surface-variant opacity-70" :
                  item.type === "error" ? "text-error opacity-70" :
                  item.type === "hint" ? "text-on-surface-variant italic" :
                  item.type === "success" ? "text-[#27C93F]" : ""
                }
              >
                {item.content}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="text-secondary whitespace-nowrap">shahzaib@portfolio:~$</span>
            <input
              ref={inputRef}
              autoComplete="off"
              autoFocus
              className="bg-transparent border-none outline-none ring-0 focus:ring-0 p-0 text-primary w-full"
              id="terminal-input"
              spellCheck="false"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className="terminal-cursor"></span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl -z-10"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl -z-10"></div>
    </div>
  );
}
