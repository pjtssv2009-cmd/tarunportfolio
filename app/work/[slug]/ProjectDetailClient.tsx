"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ArrowRight, Maximize2, Tag, Wrench, Calendar, User } from "lucide-react";
import { Project } from "@/data/projects";
import { useCursor } from "@/components/CustomCursor";
import { Lightbox } from "@/components/Lightbox";

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const { setCursorType, setCursorText } = useCursor();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages =
    project.gallery.length > 0 ? project.gallery : [project.coverImage];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#111111] pt-24 sm:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Back Link */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#666666] hover:text-[#111111] transition-colors group"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Project Header Block */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pb-10 sm:pb-14 border-b border-[#E5E5DE] mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-editorial-mono text-xs text-accent font-bold uppercase tracking-widest">
              CASE STUDY {project.number}
            </span>
            <span className="text-[#CCCCCC]">/</span>
            <span className="font-editorial-mono text-xs text-[#777777] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-[#111111] leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#555555] leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-white border border-[#E5E5DE] shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#888888] font-editorial-mono uppercase mb-1">
                <User className="w-3.5 h-3.5 text-accent" />
                <span>ROLE</span>
              </div>
              <p className="text-sm font-semibold text-[#111111]">{project.role}</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#888888] font-editorial-mono uppercase mb-1">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                <span>YEAR</span>
              </div>
              <p className="text-sm font-semibold text-[#111111]">{project.year}</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#888888] font-editorial-mono uppercase mb-1">
                <Wrench className="w-3.5 h-3.5 text-accent" />
                <span>TOOLS</span>
              </div>
              <p className="text-sm font-semibold text-[#111111] truncate">
                {project.tools.join(", ") || "Figma"}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#888888] font-editorial-mono uppercase mb-1">
                <Tag className="w-3.5 h-3.5 text-accent" />
                <span>PLATFORM</span>
              </div>
              <p className="text-sm font-semibold text-[#111111] truncate">
                {project.category.split("·")[0].trim()}
              </p>
            </div>
          </div>

          {/* Behance External Button */}
          <div className="mt-6 flex items-center justify-between">
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-accent-hover transition-colors shadow-xs"
              onMouseEnter={() => setCursorType("arrow")}
              onMouseLeave={() => setCursorType("default")}
            >
              <span>View Original on Behance</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            {project.stats?.views?.all && (
              <span className="font-editorial-mono text-xs text-[#888888]">
                {project.stats.views.all} Behance Views · {project.stats.appreciations?.all || 0} Likes
              </span>
            )}
          </div>
        </motion.header>

        {/* Narrative Case Study Sections (Only where content exists!) */}
        <div className="space-y-16 sm:space-y-24 mb-20">
          {/* Project Overview */}
          {project.overview && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4">
                <span className="font-editorial-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-1">
                  01 / CONTEXT
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111111]">
                  Project Overview
                </h2>
              </div>
              <div className="md:col-span-8 text-base sm:text-lg text-[#444444] leading-relaxed">
                <p>{project.overview}</p>
              </div>
            </motion.section>
          )}

          {/* Problem Statement */}
          {project.problem && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 sm:p-10 rounded-2xl bg-white border border-[#E5E5DE] shadow-xs"
            >
              <div className="md:col-span-4">
                <span className="font-editorial-mono text-xs text-red-500 uppercase tracking-widest font-semibold block mb-1">
                  02 / THE CHALLENGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111111]">
                  The Problem
                </h2>
              </div>
              <div className="md:col-span-8 text-base sm:text-lg text-[#444444] leading-relaxed">
                <p>{project.problem}</p>
              </div>
            </motion.section>
          )}

          {/* Research & Process */}
          {(project.research || project.process) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-4">
                <span className="font-editorial-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-1">
                  03 / DISCOVERY & PROCESS
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111111]">
                  UX Research & Strategy
                </h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#444444] leading-relaxed">
                {project.research && <p>{project.research}</p>}
                {project.process && <p>{project.process}</p>}
              </div>
            </motion.section>
          )}

          {/* Solution & Outcomes */}
          {project.solution && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 sm:p-10 rounded-2xl bg-[#F1EFEB] border border-[#E5E5DE]"
            >
              <div className="md:col-span-4">
                <span className="font-editorial-mono text-xs text-emerald-600 uppercase tracking-widest font-semibold block mb-1">
                  04 / EXECUTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111111]">
                  Design Solution
                </h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base sm:text-lg text-[#333333] leading-relaxed">
                <p>{project.solution}</p>
                {project.learnings && (
                  <div className="mt-6 pt-6 border-t border-[#D4D3CC]">
                    <span className="font-editorial-mono text-xs text-[#666666] uppercase tracking-wider block mb-2">
                      KEY TAKEAWAY & LEARNINGS
                    </span>
                    <p className="text-sm text-[#555555] italic">{project.learnings}</p>
                  </div>
                )}
              </div>
            </motion.section>
          )}
        </div>

        {/* Project Visual Gallery */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E5DE]">
            <div>
              <span className="font-editorial-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-1">
                PROJECT VISUALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#111111]">
                Case Study Artifacts & Screens ({galleryImages.length})
              </h2>
            </div>
            <span className="text-xs text-[#777777] hidden sm:inline">
              Click any visual to inspect in fullscreen
            </span>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {galleryImages.map((imgSrc, idx) => (
              <motion.div
                key={imgSrc + idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E5E5DE] bg-white shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => openLightbox(idx)}
                onMouseEnter={() => {
                  setCursorType("view");
                  setCursorText("ZOOM");
                }}
                onMouseLeave={() => {
                  setCursorType("default");
                  setCursorText("");
                }}
              >
                {imgSrc.endsWith(".gif") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imgSrc}
                    alt={`${project.title} - Artifact ${idx + 1}`}
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="relative w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgSrc}
                      alt={`${project.title} - Artifact ${idx + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#111111]/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[#111111]/80 backdrop-blur-md text-[#F8F7F4] font-editorial-mono text-[11px]">
                  Visual {idx + 1} of {galleryImages.length}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <nav className="pt-12 border-t border-[#E5E5DE] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group p-6 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#111111] transition-all flex flex-col justify-between shadow-xs"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#888888] uppercase mb-2">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>PREVIOUS PROJECT</span>
            </div>
            <h4 className="text-lg sm:text-xl font-display font-bold text-[#111111] group-hover:text-accent transition-colors">
              {prevProject.title}
            </h4>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="group p-6 rounded-2xl bg-white border border-[#E5E5DE] hover:border-[#111111] transition-all flex flex-col justify-between sm:items-end shadow-xs text-left sm:text-right"
            onMouseEnter={() => setCursorType("pointer")}
            onMouseLeave={() => setCursorType("default")}
          >
            <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#888888] uppercase mb-2">
              <span>NEXT PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <h4 className="text-lg sm:text-xl font-display font-bold text-[#111111] group-hover:text-accent transition-colors">
              {nextProject.title}
            </h4>
          </Link>
        </nav>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={lightboxIndex}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
        }
        altTitle={project.title}
      />
    </div>
  );
}
