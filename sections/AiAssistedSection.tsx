"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Sparkles, ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const AiAssistedSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const { aiAssisted } = profileData;

  return (
    <section id="ai-workflow" className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F1EFEB]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-accent" />
              <span className="text-xs font-editorial-mono font-semibold uppercase tracking-wider text-accent">
                Modern Workflow
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              {aiAssisted.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Bridging UI/UX design, rapid prototyping, and AI-assisted development to turn product ideas into working software faster.
          </p>
        </div>

        {/* 2-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12">
          {/* Left Column: Narrative & Principles (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-[#444444] leading-relaxed">
              {aiAssisted.content.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-lg sm:text-xl font-display font-semibold text-[#111111] leading-snug" : ""}>
                  {p}
                </p>
              ))}
              <p className="text-sm sm:text-base text-[#666666] pt-2">
                {aiAssisted.description}
              </p>
            </div>

            {/* Quality Anchors */}
            <div className="pt-6 border-t border-[#ECECE6] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-[#222222]">
              {["Usability First", "Visual Quality", "Accessibility", "Scalable Design"].map((anchor) => (
                <div key={anchor} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{anchor}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Tools & Capabilities (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#ECECE6]">
                <Sparkles className="w-4 h-4 text-accent" />
                <h3 className="text-base font-display font-bold text-[#111111]">
                  Tools & Capabilities
                </h3>
              </div>

              <div className="space-y-3">
                {aiAssisted.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5DE] text-xs sm:text-sm font-medium text-[#222222] flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#ECECE6] flex items-center justify-between text-xs text-[#777777]">
              <span>Rapid Prototyping</span>
              <span className="font-semibold text-[#111111]">Concept → Code</span>
            </div>
          </motion.div>
        </div>

        {/* Linear Workflow Stepper Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DE] shadow-xs"
        >
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#ECECE6]">
            <Layers className="w-4 h-4 text-accent" />
            <h3 className="text-sm sm:text-base font-display font-bold text-[#111111]">
              Integrated Design & AI Development Workflow
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {aiAssisted.workflow.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F8F7F4] border border-[#E5E5DE] text-xs sm:text-sm font-semibold text-[#111111]">
                  <span className="font-editorial-mono text-[11px] text-accent font-bold">
                    0{idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < aiAssisted.workflow.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#AAAAAA] shrink-0 hidden sm:inline-block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
