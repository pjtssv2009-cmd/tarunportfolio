"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCursor } from "./CustomCursor";

const NAV_LINKS = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { setCursorType } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F7F4]/85 backdrop-blur-md border-b border-[#E5E5DE] py-3.5 shadow-sm"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-display text-base sm:text-lg font-bold tracking-tight text-[#111111] focus:outline-none"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
            <span className="tracking-tighter">TARUN A</span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#888888] font-mono ml-2 border-l border-[#D4D3CC] pl-3">
              UI/UX DESIGNER
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#444444] hover:text-[#111111] transition-colors relative py-1 focus:outline-none"
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-white border border-[#E5E5DE] hover:border-accent hover:text-accent rounded-full transition-all shadow-sm focus:outline-none"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-[#E5E5DE] bg-white/80 text-[#111111] hover:bg-white transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#F8F7F4] flex flex-col justify-between p-6 sm:p-10 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="font-editorial-mono text-xs text-[#888888]">NAVIGATION</span>
              <nav className="flex flex-col gap-5">
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-[#111111] flex items-center justify-between border-b border-[#E5E5DE] pb-4"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-[#888888]">0{idx + 1}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#E5E5DE] pt-6">
              <div className="flex items-center justify-between text-xs text-[#666666]">
                <span>Chennai, India</span>
                <span className="text-accent font-medium">Available for work</span>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111111] text-[#F8F7F4] rounded-full text-sm font-semibold tracking-wide"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
