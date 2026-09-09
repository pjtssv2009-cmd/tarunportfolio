"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "./CustomCursor";

export const Footer: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <footer className="w-full bg-[#111111] text-[#F8F7F4] pt-16 sm:pt-24 pb-12 px-6 sm:px-10 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto">
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#262626]">
          {/* Brand & Location */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="relative h-10 sm:h-12 w-36 sm:w-44 mb-3">
                <Image
                  src={profileData.logoWhite}
                  alt={profileData.name}
                  width={180}
                  height={65}
                  className="h-full w-auto object-contain"
                />
              </div>
              <p className="text-sm text-[#CCCCCC] font-medium mb-1">
                {profileData.role} · Chennai, India
              </p>
              <p className="text-xs text-[#888888] mb-3">
                Designing intuitive digital products for web and mobile.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1D] border border-[#2D2D32] text-xs text-[#CCCCCC]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Full-time & Freelance Opportunities</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#888888] tracking-wider uppercase mb-2">
              Navigation
            </span>
            <Link
              href="/#work"
              className="text-sm text-[#AAAAAA] hover:text-white transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              Selected Work
            </Link>
            <Link
              href="/#about"
              className="text-sm text-[#AAAAAA] hover:text-white transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              About & Philosophy
            </Link>
            <Link
              href="/#experience"
              className="text-sm text-[#AAAAAA] hover:text-white transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              Experience
            </Link>
            <Link
              href="/#expertise"
              className="text-sm text-[#AAAAAA] hover:text-white transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              Product Design Expertise
            </Link>
            <Link
              href="/#faq"
              className="text-sm text-[#AAAAAA] hover:text-white transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-[#AAAAAA] hover:text-white transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              Contact
            </Link>
          </div>

          {/* Connect / Social */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#888888] tracking-wider uppercase mb-2">
              Connect
            </span>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-between text-sm text-[#CCCCCC] hover:text-white transition-colors group"
              onMouseEnter={() => setCursorType("arrow")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>{profileData.email}</span>
              <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-between text-sm text-[#CCCCCC] hover:text-white transition-colors group"
              onMouseEnter={() => setCursorType("arrow")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>{profileData.phone}</span>
              <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-sm text-[#CCCCCC] hover:text-white transition-colors group"
              onMouseEnter={() => setCursorType("arrow")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={profileData.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-sm text-[#CCCCCC] hover:text-white transition-colors group"
              onMouseEnter={() => setCursorType("arrow")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>Behance</span>
              <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Credits Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© 2026 {profileData.name}. All rights reserved.</p>
          <p className="font-serif italic text-[#888888] tracking-wide">
            Designing intuitive digital products for web and mobile.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#top"
              className="hover:text-[#DDDDDD] transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
