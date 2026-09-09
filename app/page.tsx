import React from "react";
import { HeroSection } from "@/sections/HeroSection";
import { PhilosophySection } from "@/sections/PhilosophySection";
import { SelectedWorkSection } from "@/sections/SelectedWorkSection";
import { MoreWorkSection } from "@/sections/MoreWorkSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { AiAssistedSection } from "@/sections/AiAssistedSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { FaqSection } from "@/sections/FaqSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Introduction & Philosophy */}
      <PhilosophySection />

      {/* 03. Selected Product Design Work */}
      <SelectedWorkSection />

      {/* 04. More Work & Case Studies */}
      <MoreWorkSection />

      {/* 05. Product Design Process */}
      <ProcessSection />

      {/* 06. Product Design Expertise */}
      <ServicesSection />

      {/* 07. AI-Assisted Design & Development */}
      <AiAssistedSection />

      {/* 08. Experience & Education */}
      <ExperienceSection />

      {/* 09. About Tarun A */}
      <AboutSection />

      {/* 10. UI/UX Design Skills & Tools */}
      <SkillsSection />

      {/* 11. Frequently Asked Questions (AEO/SEO) */}
      <FaqSection />

      {/* 12. Contact CTA & Direct Inquiries */}
      <ContactSection />
    </div>
  );
}
