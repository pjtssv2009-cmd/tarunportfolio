"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { useCursor } from "@/components/CustomCursor";
import { Lightbox } from "@/components/Lightbox";

export const MoreWorkSection: React.FC = () => {
  const { setCursorType, setCursorText } = useCursor();
  const moreProjects = projectsData.filter((p) => !p.featured);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (images: string[], title: string) => {
    setLightboxImages(images);
    setLightboxIndex(0);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <section className="w-full py-20 sm:py-28 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F1EFEB]/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[#E5E5DE] gap-4">
          <div>
            <span className="font-editorial-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-2">
              ARCHIVE & EXPLORATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-[#111111]">
              More Work & Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#666666] max-w-sm">
            UI implementations, visual analyses, IoT controls, and responsive web experiments.
          </p>
        </div>

        {/* 2-Column / 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moreProjects.map((project) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl border border-[#E5E5DE] p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div
                  className="relative w-full aspect-[16/11] rounded-lg sm:rounded-xl overflow-hidden mb-5 bg-[#F8F7F4] border border-[#ECECE6]"
                  onMouseEnter={() => {
                    setCursorType("view");
                    setCursorText("VIEW");
                  }}
                  onMouseLeave={() => {
                    setCursorType("default");
                    setCursorText("");
                  }}
                >
                  <Link href={`/work/${project.slug}`} className="block w-full h-full relative">
                    {project.coverImage.endsWith(".gif") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </Link>

                  {/* Lightbox button */}
                  <button
                    onClick={() =>
                      openLightbox(
                        project.gallery.length > 0 ? project.gallery : [project.coverImage],
                        project.title
                      )
                    }
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#111111]/70 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                    aria-label="Expand image"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#111111]/80 backdrop-blur-md text-[#F8F7F4] font-editorial-mono text-[11px]">
                    {project.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-center justify-between text-[11px] text-[#777777] mb-2">
                  <span className="font-editorial-mono text-accent font-semibold truncate pr-2">
                    {project.category}
                  </span>
                  <span className="font-editorial-mono">{project.year}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-2 group-hover:text-accent transition-colors leading-snug">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#666666] line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded-full bg-[#F1EFEB] text-[11px] text-[#444444] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="pt-3 border-t border-[#ECECE6] flex items-center justify-between text-xs">
                  <Link
                    href={`/work/${project.slug}`}
                    className="font-semibold text-[#111111] hover:text-accent inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#777777] hover:text-[#111111] transition-colors"
                  >
                    Behance ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
        }
        altTitle={lightboxTitle}
      />
    </section>
  );
};
