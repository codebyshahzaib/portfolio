"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Caveat } from "next/font/google";

import { useRef } from "react";

const signatureFont = Caveat({ subsets: ['latin'], weight: '700' });

export default function TopNavBar() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and scrolled past 50px. Show if scrolling up.
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      lastScrollYRef.current = currentScrollY;

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // If we are not at the very top, auto-hide the navbar after 0.5 seconds of no scrolling
      if (currentScrollY > 50 && !isHoveredRef.current) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    if (window.scrollY > 50) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (window.scrollY > 50) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
  };

  return (
    <>
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .nav-octagon-border {
          background: rgba(0, 212, 255, 0.6); /* Brighter primary-container border */
          padding: 1px; /* Border width */
          clip-path: polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px);
          filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.3)); /* Neon glow that follows clip-path */
        }
        .nav-octagon-inner {
          background: rgba(10, 10, 15, 0.65);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          clip-path: polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px);
          height: 100%;
        }
      `}</style>
      <nav 
        className={`fixed top-6 left-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] max-w-[1200px] z-50 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        style={{ transform: isVisible ? "translate(-50%, 0)" : "translate(-50%, -20px)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="nav-octagon-border shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="nav-octagon-inner flex justify-between items-center px-8 py-3.5">
            
            {/* Logo Area */}
          <Link href="/" className="group flex items-center">
            <span className={`${signatureFont.className} text-on-surface text-3xl md:text-4xl leading-none group-hover:text-primary transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]`}>
              M. Shahzaib
            </span>
          </Link>

          {/* Links Area */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: "About", href: "/about" },
              { name: "Skills", href: "/skills" },
              { name: "Projects", href: "/projects" },
              { name: "Experience", href: "/experience" },
              { name: "Contact", href: "/contact" },
            ].map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-mono-code text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 py-1 group ${
                    isActive
                      ? "text-primary-container drop-shadow-[0_0_8px_rgba(0,212,255,0.5)]"
                      : "text-on-surface-variant hover:text-on-surface hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
                  }`}
                >
                  {item.name}
                  {/* Active/Hover Glow Line */}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary-container transition-all duration-300 ${isActive ? "w-full shadow-[0_0_8px_rgba(0,212,255,0.8)]" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </div>

            {/* Action Button Area */}
            <div className="p-[1px] bg-primary-container/80 btn-octagon hover:bg-primary-container transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,212,255,0.3)] hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.6)] group">
              <button className="relative px-8 py-2 font-mono-code text-[11px] uppercase tracking-[0.2em] text-primary-container bg-[#0A0A0F] hover:bg-primary-container/10 transition-colors duration-300 overflow-hidden btn-octagon h-full w-full drop-shadow-[0_0_5px_rgba(0,212,255,0.3)] hover:text-white">
                <span className="relative z-10">
                  Resume
                </span>
                {/* Scanline effect */}
                <div className="absolute inset-0 -translate-y-full group-hover:animate-[scanline_1.5s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-primary-container/30 to-transparent"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
