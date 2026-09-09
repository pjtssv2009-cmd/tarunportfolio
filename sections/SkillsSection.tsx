"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { useCursor } from "@/components/CustomCursor";

export const SkillsSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F1EFEB]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              UI/UX Design Skills & Tools
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Verified design capabilities, methodologies, and toolsets across research, UI craft, design systems, and product architecture.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="pb-3 border-b border-[#ECECE6] mb-4">
                  <h3 className="text-base font-display font-bold text-[#111111]">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-[#666666] mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Typography-Based Skill Cloud */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-[#F8F7F4] hover:bg-accent/10 hover:text-accent border border-[#E5E5DE] text-xs font-medium text-[#222222] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
