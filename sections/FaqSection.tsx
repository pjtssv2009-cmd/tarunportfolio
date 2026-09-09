"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const FaqSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: profileData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <HelpCircle className="w-4 h-4 text-accent" />
              <span className="text-xs font-editorial-mono font-semibold uppercase tracking-wider text-accent">
                FAQ & AEO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            Common questions about my design background, specializations, tools, and availability.
          </p>
        </div>

        {/* 2-Column or Stacked Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Context Column */}
          <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-2xl border border-[#E5E5DE] shadow-xs">
            <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-3">
              Need more details?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
              I’m always open to discussing design processes, product roadmaps, or custom workflows tailored to your team.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-accent text-[#F8F7F4] text-xs font-semibold tracking-wide transition-colors"
              onMouseEnter={() => setCursorType("pointer")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>Ask a Question</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Accordion Column (8 Cols) */}
          <div className="lg:col-span-8 divide-y divide-[#E5E5DE] border-y border-[#E5E5DE]">
            {profileData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className="py-6 sm:py-7 group cursor-pointer transition-colors"
                  onClick={() => toggleFaq(idx)}
                  onMouseEnter={() => setCursorType("pointer")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-xl font-display font-bold text-[#111111] group-hover:text-accent transition-colors leading-snug">
                      {faq.question}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-[#D4D3CC] flex items-center justify-center text-[#111111] shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-xs sm:text-sm text-[#555555] leading-relaxed pr-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
