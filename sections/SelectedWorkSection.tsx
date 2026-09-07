"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import { useCursor } from "@/components/CustomCursor";
import { Lightbox } from "@/components/Lightbox";

export const SelectedWorkSection: React.FC = () => {
  const { setCursorType, setCursorText } = useCursor();
  const featuredProjects = projectsData.filter((p) => p.featured);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (images: string[], index = 0, title = "") => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <section
      id="work"
      className="w-full py-20 sm:py-32 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-8 border-b border-[#E5E5DE] gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-editorial-mono text-xs text-accent uppercase tracking-widest font-semibold">
                02 / SELECTED WORK
              </span>
              <div className="w-12 h-px bg-accent" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[#111111]">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-md">
            A selection of digital products, interfaces and experiences I&apos;ve worked on.
          </p>
        </div>

        {/* Asymmetric Editorial Project Presentations */}
        <div className="space-y-24 sm:space-y-36">
          {featuredProjects.map((project, idx) => (
            <ProjectEditorialItem
              key={project.id}
              project={project}
              index={idx}
              onOpenLightbox={(img) =>
                openLightbox(
                  project.gallery.length > 0 ? project.gallery : [project.coverImage],
                  0,
                  project.title
                )
              }
              onMouseEnter={() => {
                setCursorType("view");
                setCursorText("EXPLORE");
              }}
              onMouseLeave={() => {
                setCursorType("default");
                setCursorText("");
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox for Project Image Inspection */}
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

interface ProjectItemProps {
  project: Project;
  index: number;
  onOpenLightbox: (img: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectEditorialItem: React.FC<ProjectItemProps> = ({
  project,
  index,
  onOpenLightbox,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { setCursorType } = useCursor();
  const variant = project.layoutVariant;

  // Render different editorial layouts as requested
  if (variant === "image-left") {
    // Layout 1: Large Image Left + Project Info Right
    return (
      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
      >
        <div className="lg:col-span-7">
          <ProjectImageFrame
            project={project}
            aspect="aspect-[16/10]"
            onOpenLightbox={onOpenLightbox}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <ProjectMeta project={project} />
        </div>
      </motion.article>
    );
  }

  if (variant === "image-right") {
    // Layout 2: Project Info Left + Large Image Right
    return (
      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
      >
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
          <ProjectMeta project={project} />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <ProjectImageFrame
            project={project}
            aspect="aspect-[16/10]"
            onOpenLightbox={onOpenLightbox}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
      </motion.article>
    );
  }

  if (variant === "full-width") {
    // Layout 3: Full-width visual with bottom metadata row
    return (
      <motion.article
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6"
      >
        <div className="w-full">
          <ProjectImageFrame
            project={project}
            aspect="aspect-[21/9] sm:aspect-[16/8]"
            onOpenLightbox={onOpenLightbox}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-4 border-t border-[#E5E5DE]">
          <div className="md:col-span-7">
            <span className="font-editorial-mono text-xs text-accent font-semibold mb-1 block">
              PROJECT {project.number} · {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111111] mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col md:items-end justify-between gap-4">
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs rounded-full bg-white border border-[#E5E5DE] text-[#444444] font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
            <ProjectActionButtons project={project} />
          </div>
        </div>
      </motion.article>
    );
  }

  // Layout 4 & 5: Split-screen / Asymmetric
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
    >
      <div className="lg:col-span-7 lg:sticky lg:top-28">
        <ProjectImageFrame
          project={project}
          aspect="aspect-[4/3] sm:aspect-[16/10]"
          onOpenLightbox={onOpenLightbox}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
      <div className="lg:col-span-5 bg-white p-6 sm:p-10 rounded-2xl border border-[#E5E5DE] shadow-xs">
        <ProjectMeta project={project} />
      </div>
    </motion.article>
  );
};

// Image presentation frame
const ProjectImageFrame: React.FC<{
  project: Project;
  aspect?: string;
  onOpenLightbox: (img: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}> = ({ project, aspect = "aspect-[16/10]", onOpenLightbox, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`relative w-full ${aspect} rounded-xl sm:rounded-2xl overflow-hidden border border-[#E5E5DE] bg-white group transition-all duration-300 shadow-sm hover:shadow-xl`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={`/work/${project.slug}`} className="block w-full h-full relative">
        {project.coverImage.endsWith(".gif") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={parseInt(project.number) <= 2}
          />
        )}
      </Link>

      {/* Quick Lightbox expand button in corner */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onOpenLightbox(project.coverImage);
        }}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-[#111111]/80 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-accent"
        aria-label="Expand image"
      >
        <Maximize2 className="w-4 h-4" />
      </button>

      {/* Number Badge */}
      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#111111]/85 backdrop-blur-md text-[#F8F7F4] font-editorial-mono text-xs font-semibold">
        {project.number}
      </div>
    </div>
  );
};

// Project Details Block
const ProjectMeta: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <div className="flex items-center justify-between text-xs text-[#777777] border-b border-[#ECECE6] pb-3">
        <span className="font-editorial-mono text-accent font-semibold tracking-wider">
          {project.category}
        </span>
        <span className="font-editorial-mono">{project.year}</span>
      </div>

      <div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight text-[#111111] leading-snug mb-3">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tools used */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 rounded-full bg-[#F1EFEB] text-xs font-medium text-[#333333]"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-[#ECECE6]">
        <ProjectActionButtons project={project} />
      </div>
    </div>
  );
};

// Buttons for Case Study and Behance
const ProjectActionButtons: React.FC<{ project: Project }> = ({ project }) => {
  const { setCursorType } = useCursor();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={`/work/${project.slug}`}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-[#F8F7F4] text-xs sm:text-sm font-semibold tracking-wide hover:bg-accent transition-colors shadow-xs group"
        onMouseEnter={() => setCursorType("pointer")}
        onMouseLeave={() => setCursorType("default")}
      >
        <span>View Case Study</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>

      <a
        href={project.behanceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#D4D3CC] hover:border-accent hover:text-accent text-[#333333] text-xs sm:text-sm font-medium transition-colors"
        onMouseEnter={() => setCursorType("arrow")}
        onMouseLeave={() => setCursorType("default")}
      >
        <span>View on Behance</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
      </a>
    </div>
  );
};
