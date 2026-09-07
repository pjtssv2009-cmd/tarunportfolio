import React from "react";
import { HeroSection } from "@/sections/HeroSection";
import { PhilosophySection } from "@/sections/PhilosophySection";
import { SelectedWorkSection } from "@/sections/SelectedWorkSection";
import { MoreWorkSection } from "@/sections/MoreWorkSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 01. Hero with 3D Canvas */}
      <HeroSection />

      {/* 02. Philosophy & Introduction */}
      <PhilosophySection />

      {/* 03. Selected Work (Featured Case Studies with Asymmetric Layouts) */}
      <SelectedWorkSection />

      {/* 04. More Work (UI Case Studies, Visual Analysis, IoT & Responsive Web) */}
      <MoreWorkSection />

      {/* 05. How I Think (5-Step Design Methodology) */}
      <ProcessSection />

      {/* 06. What I Do (Interactive Typographic Services) */}
      <ServicesSection />

      {/* 07. Experience (Vertical Career & Projects Timeline) */}
      <ExperienceSection />

      {/* 08. About Tarun (Real Portrait, Biography & Values) */}
      <AboutSection />

      {/* 09. Skills & Core Competencies */}
      <SkillsSection />

      {/* 10. Contact CTA & Direct Inquiries */}
      <ContactSection />
    </div>
  );
}
