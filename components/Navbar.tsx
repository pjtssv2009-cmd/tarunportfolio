"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "./CustomCursor";

const NAV_LINKS = [
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Process", href: "/#process" },
  { name: "Expertise", href: "/#expertise" },
  { name: "Experience", href: "/#experience" },
  { name: "FAQ", href: "/#faq" },
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
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#E5E5DE] py-3 sm:py-3.5 shadow-sm"
            : "bg-transparent py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-center relative">
          {/* Centered Desktop Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-7 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none ${
                  isScrolled
                    ? "text-[#555555] hover:text-[#111111]"
                    : "text-white/85 hover:text-white"
                }`}
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Header Bar (Pill on Mobile) */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link
              href="/#top"
              className={`text-sm font-display font-bold tracking-tight transition-colors ${
                isScrolled ? "text-[#111111]" : "text-white"
              }`}
            >
              Tarun A
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border transition-all focus:outline-none ${
                isScrolled
                  ? "border-[#E5E5DE] bg-white/90 text-[#111111] shadow-xs active:scale-95"
                  : "border-white/20 bg-white/10 text-white active:scale-95 backdrop-blur-md"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0E0E14]/95 backdrop-blur-xl flex flex-col justify-between p-6 pt-20 pb-8 text-white md:hidden overflow-y-auto"
          >
            {/* Top Close / Title header inside drawer */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-editorial-mono uppercase tracking-widest text-[#A1A1AA]">
                  Navigation
                </span>
                <span className="text-xs text-[#71717A]">
                  Chennai, IN
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xl xs:text-2xl font-display font-semibold tracking-tight text-white/90 hover:text-[#3B82F6] flex items-center justify-between py-2 border-b border-white/[0.06] transition-colors"
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-editorial-mono text-white/40">
                        0{idx + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Quick CTAs & Contact Info in Mobile Drawer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="/#work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 px-4 rounded-full bg-white text-[#0A0A0E] text-xs font-semibold text-center hover:bg-[#3B82F6] hover:text-white transition-colors"
                >
                  View Selected Work
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold text-center hover:bg-white/20 transition-colors"
                >
                  Let&apos;s Talk
                </Link>
              </div>

              <div className="flex items-center justify-between text-xs text-[#A1A1AA] pt-2">
                <span>{profileData.email}</span>
                <span className="text-emerald-400 font-medium">● Available for roles</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
