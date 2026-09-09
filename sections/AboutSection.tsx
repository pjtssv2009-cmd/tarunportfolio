"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const AboutSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              About Tarun A
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#666666]">
            <MapPin className="w-4 h-4 text-accent" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

        {/* 2-Column Grid: Portrait + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Tarun Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#F1EFEB] to-[#E5E5DE] border border-[#D4D3CC] shadow-lg">
              <Image
                src={profileData.avatar}
                alt="Tarun A, UI/UX and Product Designer based in Chennai, India"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-bottom pt-6"
                priority
              />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5E5DE] flex items-center justify-between shadow-xs">
                <div>
                  <h3 className="text-sm font-display font-bold text-[#111111]">{profileData.name}</h3>
                  <p className="text-[11px] text-[#666666]">{profileData.role}</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#111111] text-white text-xs font-medium">
                  Chennai, IN
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Approach Text */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[#444444] leading-relaxed">
              <p className="text-xl sm:text-2xl font-display font-semibold text-[#111111] leading-snug">
                I’m Tarun A, a UI/UX and Product Designer based in Chennai, India, specializing in digital product experiences for web and mobile platforms.
              </p>
              <p>
                My work combines UX research, information architecture, interaction design, visual design, prototyping, and Figma design systems to solve real user and business problems.
              </p>
              <p>
                I have worked across FinTech, SaaS, e-commerce, AgriTech, enterprise platforms, automotive, education, investment banking, and consumer digital products.
              </p>
              <p className="text-sm sm:text-base text-[#666666]">
                I believe good product design should be clear, purposeful, accessible, and scalable. My goal is to make complex products easier to understand and more effective to use.
              </p>
            </div>

            {/* Core Expertise 10 Points */}
            <div>
              <h4 className="text-xs font-editorial-mono uppercase font-bold tracking-wider text-accent mb-3">
                Core Expertise
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#ECECE6]">
                {profileData.coreExpertise.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-[#333333]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact quick strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#F8F7F4] text-xs sm:text-sm font-semibold tracking-wide hover:bg-accent transition-colors"
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profileData.email}</span>
              </a>

              <a
                href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#D4D3CC] hover:border-[#111111] text-[#111111] text-xs sm:text-sm font-medium transition-colors"
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>{profileData.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
