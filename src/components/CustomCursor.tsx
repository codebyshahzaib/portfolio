"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        ring.style.left = (e.clientX - 17) + 'px';
        ring.style.top = (e.clientY - 17) + 'px';
      }, 50);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, select, textarea, .bento-card, .glow-hover')) {
        ring.style.transform = 'scale(1.8)';
        ring.style.borderColor = 'var(--color-primary)';
        ring.style.backgroundColor = 'rgba(0, 212, 255, 0.05)';
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, select, textarea, .bento-card, .glow-hover')) {
        ring.style.transform = 'scale(1)';
        ring.style.borderColor = 'var(--color-primary)';
        ring.style.backgroundColor = 'transparent';
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
      <div
        ref={dotRef}
        className="w-[10px] h-[10px] bg-primary rounded-full fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
      <div
        ref={ringRef}
        className="w-[34px] h-[34px] border border-primary rounded-full fixed pointer-events-none z-[9998] transition-all duration-150 ease-out hidden md:block"
      ></div>
    </>
  );
}
