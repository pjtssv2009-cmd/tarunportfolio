"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              My Product Design Process
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            I use a structured, user-centered process to turn complex requirements into clear, scalable, and useful digital products.
          </p>
        </div>

        {/* 6-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.process.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-accent/30 block mb-4 font-editorial-mono">
                  {step.number}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-3">
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
