"use client";

import React, { useState } from "react";

export default function ReactivePathfinding() {
  const [grid, setGrid] = useState(Array(100).fill(0));
  const botIdx = 11;
  const goalIdx = 88;

  const toggleObstacle = (idx: number) => {
    if (idx === botIdx || idx === goalIdx) return;
    const newGrid = [...grid];
    newGrid[idx] = newGrid[idx] === 0 ? 1 : 0;
    setGrid(newGrid);
  };

  const resetGrid = () => {
    setGrid(Array(100).fill(0));
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-surface border border-border-subtle rounded-[20px] p-5 shadow-2xl relative group hover:border-primary-container/50 transition-colors duration-500">
      {/* Decorative Top Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-container/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-headline-md text-primary-container text-base leading-tight">
            Reactive<br />Pathfinding
          </h3>
          <span className="font-mono-code text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 block">
            Logic Engine Visualization
          </span>
        </div>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded border border-border-subtle bg-surface-container-low flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">play_arrow</span>
          </button>
          <button 
            onClick={resetGrid}
            className="w-8 h-8 rounded border border-border-subtle bg-surface-container-low flex items-center justify-center hover:border-primary-container hover:text-primary-container transition-colors text-on-surface-variant"
          >
            <span className="material-symbols-outlined text-[16px]">refresh</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="bg-[#0A0A0F] border border-border-subtle rounded-lg p-2 mb-4">
        <div className="grid grid-cols-10 gap-px bg-border-subtle">
          {grid.map((cell, idx) => {
            let cellContent = null;
            if (idx === botIdx) {
              cellContent = <div className="w-full h-full bg-primary-container shadow-[0_0_10px_rgba(0,212,255,0.8)] scale-75 rounded-sm"></div>;
            } else if (idx === goalIdx) {
              cellContent = <div className="w-full h-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.8)] scale-75 rounded-sm"></div>;
            } else if (cell === 1) {
              cellContent = <div className="w-full h-full bg-surface-container-highest"></div>;
            }

            return (
              <div
                key={idx}
                onClick={() => toggleObstacle(idx)}
                className="aspect-square bg-[#0D0D16] hover:bg-surface-container transition-colors cursor-pointer"
              >
                {cellContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer / Legend */}
      <div className="flex justify-between items-center text-[9px] font-mono-code uppercase text-on-surface-variant tracking-wider">
        <p className="max-w-[180px] leading-relaxed">
          Click to place obstacles and test the bot's logic.
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
  );
}
