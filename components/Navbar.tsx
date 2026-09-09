"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
            ? "bg-[#F8F7F4]/90 backdrop-blur-md border-b border-[#E5E5DE] py-3 shadow-sm"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <div className="relative h-8 sm:h-9 w-28 sm:w-36 flex items-center">
              <Image
                src={profileData.logo}
                alt={profileData.name}
                width={140}
                height={50}
                priority
                className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links aligned to Right */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors relative py-1 focus:outline-none"
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button (Mobile Only) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[#E5E5DE] bg-white/80 text-[#111111] hover:bg-white transition-colors focus:outline-none"
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
            className="fixed inset-0 z-40 bg-[#F8F7F4] flex flex-col justify-between p-6 sm:p-10 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-2 border-b border-[#E5E5DE]">
                <div className="relative h-8 w-28">
                  <Image
                    src={profileData.logo}
                    alt={profileData.name}
                    width={130}
                    height={45}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold tracking-tight text-[#111111] flex items-center justify-between border-b border-[#E5E5DE] pb-3"
                  >
                    <span>{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center justify-between text-xs text-[#666666] border-t border-[#E5E5DE] pt-6">
              <span>Chennai, India</span>
              <span className="text-accent font-medium">{profileData.role}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
