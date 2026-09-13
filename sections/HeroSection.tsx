"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { HeroScene } from "@/components/HeroScene";
import { useCursor } from "@/components/CustomCursor";

export const HeroSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] sm:min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-28 pb-8 sm:pb-14 px-4 sm:px-8 md:px-10 overflow-hidden bg-gradient-to-b from-[#09090D] via-[#0E0E14] to-[#0A0A0E] text-white border-b border-white/[0.06]"
    >
      {/* Dark Ambient Luminous Mesh & Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top-Center Electric Blue Ambient Aura */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] h-[600px] bg-gradient-to-b from-[#0047FF]/25 via-[#0047FF]/08 to-transparent rounded-full blur-3xl opacity-80" />
        
        {/* Left Indigo Accent Atmospheric Glow */}
        <div className="absolute top-1/4 -left-28 w-[450px] h-[450px] bg-gradient-to-tr from-[#0047FF]/20 via-[#6366F1]/10 to-transparent rounded-full blur-3xl opacity-75" />

        {/* Right Cyan/Blue Accent Glow */}
        <div className="absolute top-1/3 -right-28 w-[450px] h-[450px] bg-gradient-to-tl from-[#38BDF8]/15 via-[#0047FF]/10 to-transparent rounded-full blur-3xl opacity-70" />
        
        {/* Subtle Bottom Ambient Gradient Sheet */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0E] to-transparent" />
      </div>

      {/* Centered Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-center py-2 sm:py-6 text-center">
        
        {/* Middle Centerpiece: 3D Portrait Cutout with Glowing White Logo Behind */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative w-full my-1 sm:my-3 flex items-center justify-center pointer-events-auto"
        >
          <HeroScene className="w-full" />
        </motion.div>

        {/* 3-Line Conversational Headline with Name & Value Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto mt-3 sm:mt-6 px-1"
        >
          <h1 className="text-[clamp(1.02rem,4.4vw,1.35rem)] xs:text-[1.55rem] sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-display font-extrabold tracking-tight text-white leading-[1.24] sm:leading-[1.18] lg:leading-[1.16] mb-4 sm:mb-6">
            <span className="block whitespace-nowrap">
              Hey, I&apos;m{" "}
              <span className="text-[#3B82F6] underline decoration-[#3B82F6]/40 decoration-2 underline-offset-4 sm:underline-offset-8">
                Tarun A
              </span>
            </span>
            <span className="block whitespace-nowrap mt-1 sm:mt-1.5">
              — a Product Designer
            </span>
            <span className="block whitespace-nowrap mt-1 sm:mt-2">
              crafting experiences that{" "}
              <span className="text-[#3B82F6] underline decoration-[#3B82F6]/40 decoration-2 underline-offset-4 sm:underline-offset-8">
                actually convert
              </span>
              .
            </span>
          </h1>
        </motion.div>

        {/* Centered Supporting Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#A1A1AA] leading-relaxed mb-5 sm:mb-8 font-normal px-2 sm:px-0"
        >
          <p>{profileData.subheadline}</p>
        </motion.div>

        {/* Centered CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs xs:max-w-none mb-5 sm:mb-8"
        >
          <Link
            href="#work"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#0A0A0E] text-sm font-semibold tracking-wide hover:bg-[#3B82F6] hover:text-white transition-all duration-200 shadow-lg shadow-white/5 group"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <span>View Selected Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/[0.08] border border-white/20 hover:border-white hover:bg-white/[0.15] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-xs group"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Left-Aligned Capabilities Checklist in Centered Block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-fit mx-auto flex flex-col items-start gap-2.5 text-xs text-[#D4D4D8] px-2"
        >
          {profileData.heroCapabilities.map((capability) => (
            <div key={capability} className="flex items-center gap-2 text-left">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
              <span>{capability}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Sub-Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#888888]">
        {/* Availability Status with Inline Radar Dot */}
        <div className="max-w-md sm:max-w-none text-center sm:text-left">
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            <span className="inline-flex items-center justify-center mr-2 align-middle -translate-y-[1px]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </span>
            <span className="hidden sm:inline">
              <span className="font-medium text-[#E4E4E7]">Based in Chennai, India</span>
              <span className="text-white/40"> · </span>
              <span>Open to Full-time, Freelance &amp; Remote Opportunities</span>
            </span>
            <span className="sm:hidden font-medium text-[#E4E4E7]">
              Open to Full-time, Freelance &amp; Remote Opportunities
            </span>
          </p>
        </div>

        <Link
          href="#work"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#3B82F6] transition-colors shrink-0"
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
