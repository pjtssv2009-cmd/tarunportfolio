"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react";
import { experienceData, educationData } from "@/data/experience";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const ExperienceSection: React.FC = () => {
  const { setCursorType } = useCursor();

  return (
    <section id="experience" className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              Experience
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#D4D3CC] hover:border-accent hover:text-accent text-xs font-semibold uppercase tracking-wider text-[#111111] transition-colors shadow-xs"
              onMouseEnter={() => setCursorType("arrow")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>View LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </a>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Experience List */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-accent" />
              <h3 className="text-base font-display font-bold text-[#111111]">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E5E5DE] space-y-12">
              {experienceData.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-accent group-hover:scale-125 transition-transform" />

                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5DE] shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                          {item.role}
                        </h3>
                        {item.isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <span className="font-editorial-mono text-xs text-[#777777]">
                        {item.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#666666] mb-4">
                      <span className="text-[#111111] font-semibold">{item.company}</span>
                      <span>·</span>
                      <span>{item.location}</span>
                      <span>·</span>
                      <span className="text-[#888888]">{item.employmentType}</span>
                    </div>

                    <p className="text-sm text-[#444444] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2.5 mb-6">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlighted KPIs if available */}
                    {item.kpis && item.kpis.length > 0 && (
                      <div className="mb-6 p-4 rounded-xl bg-accent/[0.04] border border-accent/15">
                        <span className="text-xs font-bold text-accent block mb-2.5">
                          Key Impact & Metrics
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {item.kpis.map((kpi, kIdx) => (
                            <div
                              key={kIdx}
                              className="px-3 py-2 rounded-lg bg-white border border-accent/20 text-[11px] font-semibold text-[#111111] shadow-xs flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              <span>{kpi}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#ECECE6]">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-[#F8F7F4] text-[11px] font-medium text-[#333333] border border-[#E5E5DE]"
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

          {/* Education & Side Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-accent" />
              <h3 className="text-base font-display font-bold text-[#111111]">
                Education & Specialization
              </h3>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] shadow-xs space-y-6 divide-y divide-[#F0EFEA]">
              {educationData.map((edu, i) => (
                <div key={i} className={`space-y-2 ${i > 0 ? "pt-5" : ""}`}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-base font-display font-bold text-[#111111]">
                      {edu.degree}
                    </h4>
                    {edu.period && (
                      <span className="font-editorial-mono text-[11px] text-[#777777] shrink-0">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#555555] font-medium">
                    {edu.institution} {edu.location ? `· ${edu.location}` : ""}
                  </p>
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5 pt-1">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-[#666666] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-accent text-white p-6 sm:p-7 rounded-2xl shadow-sm">
              <h4 className="text-lg font-display font-bold mb-2">
                {profileData.availabilitySection.heading}
              </h4>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5 whitespace-pre-line">
                {profileData.availabilitySection.content}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs font-semibold tracking-wide hover:bg-[#F8F7F4] transition-colors"
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                <span>{profileData.availabilitySection.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
