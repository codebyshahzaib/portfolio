"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopNavBar() {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and scrolled past 50px. Show if scrolling up.
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-outline-variant/20 bg-nav-glass shadow-sm transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex justify-between items-center px-8 py-4 max-w-[1200px] mx-auto">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tighter">
          M.SHAHZAIB
        </Link>
        <div className="hidden md:flex items-center gap-8">
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
                className={`font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 font-medium hover:scale-105 transition-transform active:scale-95">
          Resume
        </button>
      </div>
    </nav>
  );
}
