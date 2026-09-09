"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { profileData } from "@/data/profile";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              How I Solve Product Problems
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            I use a user-centered and business-aware process to move from a problem to a validated product experience.
          </p>
        </div>

        {/* Section 04 Value Proposition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-7 sm:p-9 rounded-2xl border border-[#E5E5DE] shadow-xs mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2 text-accent">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-editorial-mono font-bold uppercase tracking-wider">
                Value Proposition
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-2">
              {profileData.valueProposition.heading}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              {profileData.valueProposition.content}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E5DE] text-xs font-semibold text-[#111111] tracking-wide">
            <span>{profileData.valueProposition.steps}</span>
          </div>
        </motion.div>

        {/* 7-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profileData.process.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="bg-white p-7 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <span className="text-2xl font-display font-extrabold text-accent/30 block mb-3 font-editorial-mono">
                  {step.number}
                </span>
                <h3 className="text-base sm:text-lg font-display font-bold text-[#111111] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
