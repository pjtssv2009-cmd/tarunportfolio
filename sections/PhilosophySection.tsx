"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const PhilosophySection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section
      id="about"
      className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]"
    >
      <div className="max-w-7xl mx-auto">


        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#111111] leading-[1.1] mb-8"
            >
              Most portfolios try to{" "}
              <span className="text-[#888888] font-normal italic">impress</span>.
              <br />
              This one tries to{" "}
              <span className="text-accent underline decoration-accent/40 decoration-2 underline-offset-8">
                communicate
              </span>
              .
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6 text-base sm:text-lg text-[#444444] leading-relaxed max-w-3xl"
            >
              {profileData.aboutText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

          {/* Quick Design Pillars Side Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-display font-bold text-[#111111] mb-4">
                Design Values
              </h3>
              <ul className="space-y-4">
                {profileData.designPhilosophy.map((pillar, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#333333]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ECECE6] flex items-center justify-between text-xs text-[#777777]">
              <span>Location</span>
              <span className="font-semibold text-[#111111]">Chennai, Tamil Nadu</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
