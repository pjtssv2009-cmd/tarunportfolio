"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const ServicesSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleRow = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              What I Do
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Disciplines and specialized capabilities rooted in user research, functional interface design, and scalable systems.
          </p>
        </div>

        {/* Large Typographic Rows */}
        <div className="divide-y divide-[#E5E5DE] border-b border-[#E5E5DE]">
          {profileData.services.map((service, idx) => {
            const isOpen = openIndex === idx;
            const numStr = `0${idx + 1}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="py-8 sm:py-10 group cursor-pointer transition-colors"
                onClick={() => toggleRow(idx)}
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="font-editorial-mono text-sm sm:text-base text-[#888888] font-bold">
                      {numStr}
                    </span>
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-[#111111] group-hover:text-accent group-hover:translate-x-2 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline font-editorial-mono text-xs text-[#888888] uppercase tracking-wider">
                      {isOpen ? "Collapse" : "Explore"}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-[#D4D3CC] flex items-center justify-center text-[#111111] group-hover:border-accent group-hover:text-accent transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 sm:mt-8 pl-10 sm:pl-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                  >
                    <p className="md:col-span-7 text-sm sm:text-base text-[#555555] leading-relaxed">
                      {service.description}
                    </p>
                    <div className="md:col-span-5 flex flex-wrap gap-2 md:justify-end">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-white border border-[#E5E5DE] text-xs font-medium text-[#333333]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
