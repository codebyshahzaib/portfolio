"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useGameAudio } from "@/hooks/useGameAudio";

export default function ReactivePathfinding() {
  const [grid, setGrid] = useState<number[]>(Array(100).fill(0));
  const [path, setPath] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Tooltip states
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isMuted, toggleMute, playClick, playHover, playSuccess, playError, speak } = useGameAudio();

  const botIdx = 11;
  const goalIdx = 88;
  const COLS = 10;
  const ROWS = 10;

  useEffect(() => {
    const handleMouseEnter = () => {
      if (!hasHovered) {
        setHasHovered(true);
        setShowTooltip(true);
      }
    };

    const el = containerRef.current;
    if (el) el.addEventListener("mouseenter", handleMouseEnter);
    return () => {
      if (el) el.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [hasHovered]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showTooltip) {
      timeout = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showTooltip]);

  const toggleObstacle = (idx: number) => {
    if (isCalculating || idx === botIdx || idx === goalIdx) return;
    const newGrid = [...grid];
    newGrid[idx] = newGrid[idx] === 0 ? 1 : 0;
    setGrid(newGrid);
    setPath([]); // Reset path on new obstacle
    playClick();
  };

  const resetGrid = () => {
    if (isCalculating) return;
    setGrid(Array(100).fill(0));
    setPath([]);
    playClick();
    speak("Grid cleared. Awaiting obstacles.");
  };

  const runPathfinding = () => {
    if (isCalculating) return;
    setIsCalculating(true);
    setPath([]);
    setShowTooltip(false); // Hide tooltip if they press play early
    speak("Bot logic engaged. Processing path.");

    // Breadth-First Search Implementation
    const queue: number[] = [botIdx];
    const visited: boolean[] = Array(100).fill(false);
    const parent: Record<number, number> = {};

    visited[botIdx] = true;
    let found = false;

    while (queue.length > 0) {
      const current = queue.shift()!;
      if (current === goalIdx) {
        found = true;
        break;
      }

      const neighbors = [];
      const row = Math.floor(current / COLS);
      const col = current % COLS;

      if (row > 0) neighbors.push(current - COLS); // Up
      if (row < ROWS - 1) neighbors.push(current + COLS); // Down
      if (col > 0) neighbors.push(current - 1); // Left
      if (col < COLS - 1) neighbors.push(current + 1); // Right

      for (const next of neighbors) {
        // Only visit if unvisited and not an obstacle (1)
        if (!visited[next] && grid[next] !== 1) {
          visited[next] = true;
          parent[next] = current;
          queue.push(next);
        }
      }
    }

    if (found) {
      // Reconstruct path
      const newPath: number[] = [];
      let curr = goalIdx;
      while (curr !== botIdx) {
        newPath.push(curr);
        curr = parent[curr];
      }
      newPath.reverse(); // from bot to goal
      
      // Animate path finding
      let step = 0;
      const interval = setInterval(() => {
        if (step < newPath.length) {
          const currentCell = newPath[step];
          // We need to use the functional state update because we are inside a setInterval
          setPath(prev => {
            // Prevent duplicate indices just in case
            if (!prev.includes(currentCell)) {
              playHover(); // Play a scanning sound per step
              return [...prev, currentCell];
            }
            return prev;
          });
          step++;
        } else {
          clearInterval(interval);
          setIsCalculating(false);
          playSuccess();
          speak("Destination reached. Efficiency optimal.");
        }
      }, 50);
    } else {
      // Flash grid red to indicate blocked
      playError();
      speak("Error. Target is unreachable. Please remove obstacles.");
      const originalGrid = [...grid];
      const errorGrid = grid.map((c) => c === 1 ? 2 : c); // 2 represents error wall
      setGrid(errorGrid);
      setTimeout(() => {
        setGrid(originalGrid);
        setIsCalculating(false);
      }, 600);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-sm mx-auto card-octagon-wrapper bg-primary-container/60 hover:bg-primary-container shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:shadow-[0_0_35px_rgba(0,212,255,0.4)] relative group transition-all duration-500 select-none"
    >
      <div className="card-octagon-inner bg-surface p-5 relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Tooltip Overlay */}
      {showTooltip && (
        <div className="absolute inset-0 z-[100] bg-surface/80 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="card-octagon-wrapper bg-primary-container/30 w-full max-w-[240px] drop-shadow-[0_0_30px_rgba(0,212,255,0.15)] animate-in zoom-in-95 duration-300">
            <div className="card-octagon-inner bg-surface-card p-5 text-center relative w-full h-full">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-3">touch_app</span>
              <h4 className="font-headline-md text-primary-container text-base mb-2">Interactive Engine</h4>
              <p className="text-sm text-on-surface-variant font-body-base leading-relaxed mb-4">
                Click cells to build walls. Press <strong className="text-on-surface">Play</strong> to watch the AI navigate around them.
              </p>
              <div className="btn-octagon-wrapper bg-primary-container/30 w-full hover:bg-primary-container/60 transition-colors mt-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowTooltip(false);
                    playClick();
                    speak("System online. Awaiting wall placement.");
                  }}
                  className="btn-octagon-inner w-full py-2 bg-[#0A0A0F] text-primary-container hover:bg-primary-container/10 text-[10px] font-mono-code uppercase tracking-widest transition-colors"
                >
                  Start Building
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-headline-md text-primary-container text-base leading-tight relative z-40">
            Reactive<br />Pathfinding
          </h3>
          <span className="font-mono-code text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 block relative z-40">
            Logic Engine Visualization
          </span>
        </div>
        <div className="flex items-center gap-3 relative z-40">
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* Play Button */}
            <div className="relative group/btn">
              <button 
                onClick={runPathfinding}
                disabled={isCalculating}
                className="w-8 h-8 rounded border border-primary-container/40 bg-primary-container/10 flex items-center justify-center text-primary-container hover:bg-primary-container/20 hover:border-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[16px]">play_arrow</span>
              </button>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-card border border-border-subtle text-[9px] font-mono-code text-on-surface px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                Run Algorithm
              </div>
            </div>

            {/* Refresh Button */}
            <div className="relative group/btn">
              <button 
                onClick={resetGrid}
                disabled={isCalculating}
                className="w-8 h-8 rounded border border-rose-500/30 bg-rose-500/10 flex items-center justify-center text-rose-400 hover:bg-rose-500/20 hover:border-rose-400 hover:shadow-[0_0_12px_rgba(244,63,94,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[16px]">refresh</span>
              </button>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-card border border-border-subtle text-[9px] font-mono-code text-on-surface px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                Reset Grid
              </div>
            </div>
          </div>

          <div className="w-px h-5 bg-border-subtle/50"></div>

          {/* Info Buttons */}
          <div className="flex gap-2">
            {/* Audio Toggle Button */}
            <div className="relative group/btn">
              <button 
                onClick={toggleMute}
                className={`w-8 h-8 rounded border flex items-center justify-center transition-all ${
                  isMuted 
                    ? "border-surface-variant bg-surface-card text-on-surface-variant hover:bg-surface-variant hover:text-on-surface" 
                    : "border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_12px_rgba(0,212,255,0.3)]"
                }`}
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isMuted ? "volume_off" : "volume_up"}
                </span>
              </button>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-card border border-border-subtle text-[9px] font-mono-code text-on-surface px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                {isMuted ? "Unmute Audio" : "Mute Audio"}
              </div>
            </div>

            {/* Hint Button */}
            <div className="relative group/btn">
              <button 
                onClick={() => setShowTooltip(true)}
                className="w-8 h-8 rounded border border-[#FFBD2E]/30 bg-[#FFBD2E]/10 flex items-center justify-center text-[#FFBD2E] hover:bg-[#FFBD2E]/20 hover:border-[#FFBD2E] hover:shadow-[0_0_12px_rgba(255,189,46,0.3)] transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">lightbulb</span>
              </button>
              <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface-card border border-border-subtle text-[9px] font-mono-code text-on-surface px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                How to Play
              </div>
            </div>

            {/* Behind the Code Button */}
            <div className="relative group/btn">
              <Link 
                href="/behind-the-code"
                className="w-8 h-8 rounded border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">integration_instructions</span>
              </Link>
              <div className="absolute top-10 right-0 whitespace-nowrap bg-surface-card border border-border-subtle text-[9px] font-mono-code text-on-surface px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                Behind the Code
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Grid */}
      <div className="bg-[#0A0A0F] border border-border-subtle rounded-lg p-2 mb-4 relative z-40">
        <div className="grid grid-cols-10 gap-px bg-border-subtle">
          {grid.map((cell, idx) => {
            let cellContent = null;
            let bgColor = "bg-[#0D0D16]";
            let hoverColor = "hover:bg-surface-container";
            
            if (idx === botIdx) {
              cellContent = <div className="w-full h-full bg-primary-container shadow-[0_0_10px_rgba(0,212,255,0.8)] scale-75 rounded-sm relative z-10"></div>;
            } else if (idx === goalIdx) {
              cellContent = <div className="w-full h-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.8)] scale-75 rounded-sm relative z-10"></div>;
            } else if (cell === 1) {
              cellContent = <div className="w-full h-full bg-surface-container-highest rounded-[1px]"></div>;
              hoverColor = "";
            } else if (cell === 2) {
               // Error wall color
              cellContent = <div className="w-full h-full bg-error rounded-[1px] transition-colors duration-300"></div>;
              hoverColor = "";
            }

            if (path.includes(idx) && idx !== botIdx && idx !== goalIdx) {
               bgColor = "bg-primary-container/30";
               cellContent = <div className="w-full h-full bg-primary-container/80 scale-50 rounded-full shadow-[0_0_8px_rgba(0,212,255,0.5)]"></div>;
            }

            return (
              <div
                key={idx}
                onClick={() => toggleObstacle(idx)}
                className={`aspect-square ${bgColor} ${hoverColor} transition-colors cursor-pointer flex items-center justify-center rounded-[1px]`}
              >
                {cellContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer / Legend */}
      <div className="flex justify-between items-center text-[9px] font-mono-code uppercase text-on-surface-variant tracking-wider relative z-40">
        <p className="max-w-[180px] leading-relaxed min-h-[32px] flex items-center">
          {isCalculating ? "Calculating optimal route..." : "Click to place obstacles and test the bot's logic."}
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-primary-container rounded-sm shadow-[0_0_5px_rgba(0,212,255,0.8)]"></div>
            <span>Bot</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-[#FFBD2E] rounded-sm shadow-[0_0_5px_rgba(255,189,46,0.8)]"></div>
            <span>Goal</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
