"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export const ProcessSection: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <span className="font-editorial-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-2">
              03 / METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              How I Think
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            A structured, human-centered framework transforming complex problems into clear, functional digital solutions.
          </p>
        </div>

        {/* 5-Step Process Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {profileData.process.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-6 sm:p-7 rounded-xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <span className="font-editorial-mono text-2xl sm:text-3xl font-bold text-accent/80 block mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#ECECE6]">
                <span className="font-editorial-mono text-[10px] uppercase tracking-wider text-[#999999]">
                  STAGE {step.number} OF 05
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
