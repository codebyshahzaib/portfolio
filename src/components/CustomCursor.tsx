"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pacmanRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const eatTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const wrapper = wrapperRef.current;
    const pacman = pacmanRef.current;
    if (!dot || !wrapper || !pacman) return;

    // Set initial positions offscreen
    dot.style.left = '-20px';
    dot.style.top = '-20px';
    wrapper.style.left = '-20px';
    wrapper.style.top = '-20px';

    const onMouseMove = (e: MouseEvent) => {
      // Move the dot instantly
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      
      const dx = e.clientX - posRef.current.x;
      const dy = e.clientY - posRef.current.y;
      
      // Update rotation if there is significant movement
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        pacman.style.transform = `rotate(${angle}deg)`;
      }

      posRef.current = { x: e.clientX, y: e.clientY };

      // Pac-Man follows with an increased delay for more distance
      setTimeout(() => {
        wrapper.style.left = e.clientX + 'px';
        wrapper.style.top = e.clientY + 'px';
      }, 150);

      // Restore dot and keep mouth open while moving
      dot.style.opacity = '1';
      pacman.classList.remove('eat');

      // Clear existing timers
      if (eatTimeoutRef.current) clearTimeout(eatTimeoutRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Trigger eating animation when mouse stops
      timeoutRef.current = setTimeout(() => {
        pacman.classList.add('eat');
        
        // Hide the dot exactly when the mouth closes (halfway through the 300ms animation)
        eatTimeoutRef.current = setTimeout(() => {
          dot.style.opacity = '0';
        }, 150);
      }, 150);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, select, textarea, .bento-card, .glow-hover, .group\\/btn, [role="button"]')) {
        wrapper.style.transform = 'translate(-50%, -50%) scale(1.5)';
        
        if (target.closest('.pacman-white')) {
          pacman.style.setProperty('--pacman-color', 'white');
          dot.style.backgroundColor = 'white';
          dot.style.boxShadow = '0 0 8px white';
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, select, textarea, .bento-card, .glow-hover, .group\\/btn, [role="button"]')) {
        wrapper.style.transform = 'translate(-50%, -50%) scale(1)';
        pacman.style.setProperty('--pacman-color', '#FFBD2E');
        dot.style.backgroundColor = '#FFBD2E';
        dot.style.boxShadow = 'none';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --pacman-color: #FFBD2E;
        }
        @keyframes single-chomp {
          0% { border-right-color: transparent; }
          50% { border-right-color: var(--pacman-color); }
          100% { border-right-color: transparent; }
        }
        .pacman-cursor {
          width: 0;
          height: 0;
          border-width: 16px;
          border-style: solid;
          border-color: var(--pacman-color) transparent var(--pacman-color) var(--pacman-color);
          border-radius: 50%;
          transition: border-color 0.2s ease-out;
          position: relative;
        }
        .pacman-cursor.eat {
          animation: single-chomp 0.3s forwards;
        }
        /* Pac-Man Eye */
        .pacman-cursor::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: #0A0A0F; /* Dark color to act as an eye */
          border-radius: 50%;
          top: -10px;
          left: -2px;
        }
      `}</style>
      
      {/* The Pac-Dot (Actual Cursor) */}
      <div
        ref={dotRef}
        className="w-[6px] h-[6px] bg-[#FFBD2E] rounded-full fixed pointer-events-none z-[9999] transition-[background-color,box-shadow] duration-200 hidden md:block"
        style={{ transform: 'translate(-50%, -50%)', opacity: 1 }}
      ></div>
      
      {/* The Pac-Man (Follower) */}
      <div
        ref={wrapperRef}
        className="fixed pointer-events-none z-[9998] transition-transform duration-200 ease-out hidden md:block"
        style={{ transform: 'translate(-50%, -50%) scale(1)' }}
      >
        <div ref={pacmanRef} className="pacman-cursor"></div>
      </div>
    </>
  );
}
