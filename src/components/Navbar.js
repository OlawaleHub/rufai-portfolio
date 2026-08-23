// src/components/Navbar.js
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 flex items-center justify-between h-16">
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-2">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-navy-950 font-extrabold text-sm">
            RA
          </span>
          <span className="font-semibold text-white tracking-tight hidden sm:block">
            Rufai<span className="text-amber-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-amber-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 px-4 py-2 text-sm font-medium text-amber-400 hover:bg-amber-400 hover:text-navy-950 transition-colors">
          Let&apos;s talk
        </a>

        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-950/95 backdrop-blur-xl border-b border-white/5">
          <ul className="px-5 py-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
