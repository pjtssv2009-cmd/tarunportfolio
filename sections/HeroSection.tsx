"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profileData } from "@/data/profile";
import { HeroScene } from "@/components/HeroScene";
import { useCursor } from "@/components/CustomCursor";

export const HeroSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 overflow-hidden bg-[#F8F7F4]"
    >
      {/* 3D Background / Ambient Scene */}
      <HeroScene />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Sub-label & Availability */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5DE] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-editorial-mono text-[11px] text-[#222222] uppercase tracking-wider font-semibold">
              UI/UX DESIGNER · CHENNAI, INDIA
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#ECECE6] text-xs text-[#555555]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-medium tracking-wide">
              {profileData.availability}
            </span>
          </div>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#111111] leading-[1.05] sm:leading-[1.04] mb-6 sm:mb-8">
            Designing digital experiences that make{" "}
            <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-8">
              complexity
            </span>{" "}
            feel simple.
          </h1>
        </motion.div>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-base sm:text-lg text-[#555555] leading-relaxed mb-8 sm:mb-12 font-normal"
        >
          {profileData.subheadline}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-4 sm:gap-5"
        >
          <Link
            href="#work"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#111111] text-[#F8F7F4] text-sm font-semibold tracking-wide hover:bg-accent transition-all duration-200 shadow-md group"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <span>View Selected Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white border border-[#D4D3CC] hover:border-[#111111] text-[#111111] text-sm font-semibold tracking-wide transition-all duration-200 shadow-xs group"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Sub-Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#E5E5DE]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#777777]">
        <div className="flex items-center gap-6">
          <span className="font-editorial-mono">DISCIPLINE: PRODUCT & INTERACTION DESIGN</span>
          <span className="hidden md:inline font-editorial-mono text-[#AAAAAA]">·</span>
          <span className="hidden md:inline font-editorial-mono">BASED IN CHENNAI</span>
        </div>

        <Link
          href="#work"
          className="inline-flex items-center gap-2 text-xs font-medium text-[#444444] hover:text-accent transition-colors"
          onMouseEnter={() => setCursorType("pointer")}
          onMouseLeave={() => setCursorType("default")}
        >
          <span>Scroll to explore projects</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
};
