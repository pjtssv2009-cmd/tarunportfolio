"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
        {/* Large Editorial Headline & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#111111] leading-[1.1] mb-8"
            >
              {profileData.philosophyHeadline}
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

          {/* Approach Workflow Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-accent" />
                <h3 className="text-base font-display font-bold text-[#111111]">
                  My Approach
                </h3>
              </div>
              <p className="text-xs text-[#666666] mb-5 leading-relaxed">
                A linear, validated design execution path from discovery to developer delivery:
              </p>

              <div className="space-y-2.5">
                {profileData.approachSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#333333]">
                    <span className="w-5 h-5 rounded-full bg-[#F1EFEB] flex items-center justify-center font-editorial-mono text-[10px] font-bold text-accent shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#ECECE6] flex items-center justify-between text-xs text-[#777777]">
              <span>Based in</span>
              <span className="font-semibold text-[#111111]">Chennai, India</span>
            </div>
          </motion.div>
        </div>

        {/* Design Principles Cards (Section 04) */}
        <div className="pt-10 border-t border-[#E5E5DE]">
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-2">
              Design Principles
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Core values that shape every user journey, interface token, and component architecture I build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.designPhilosophy.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-[#E5E5DE] shadow-xs hover:border-accent/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-editorial-mono text-xs text-accent font-bold mb-3 block">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-display font-bold text-[#111111] mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
