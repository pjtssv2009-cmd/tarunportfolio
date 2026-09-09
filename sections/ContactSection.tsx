"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Copy, Check, MapPin, Linkedin, Globe } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const ContactSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-36 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">


        {/* Large Headline & Intro */}
        <div className="max-w-4xl mb-14 sm:mb-18">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#111111] leading-[1.05] mb-6"
          >
            Let&apos;s create something{" "}
            <span className="text-accent underline decoration-accent/30 decoration-2 underline-offset-8">
              meaningful
            </span>
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-2xl text-[#555555] leading-relaxed max-w-2xl"
          >
            Have a project, product, or design challenge that needs thoughtful UX & UI craft? Feel free to reach out directly.
          </motion.p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between hover:border-accent transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.email, "email")}
                  className="p-2 rounded-lg bg-[#F8F7F4] hover:bg-[#EAE9E3] text-[#777777] hover:text-[#111111] transition-colors"
                  aria-label="Copy email"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-[#888888] font-medium block mb-1">
                Email Address
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="text-base font-bold text-[#111111] hover:text-accent transition-colors block break-all"
              >
                {profileData.email}
              </a>
            </div>
            <div className="pt-4 mt-6 border-t border-[#ECECE6]">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:underline"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between hover:border-accent transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(profileData.phone, "phone")}
                  className="p-2 rounded-lg bg-[#F8F7F4] hover:bg-[#EAE9E3] text-[#777777] hover:text-[#111111] transition-colors"
                  aria-label="Copy phone"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <span className="text-xs text-[#888888] font-medium block mb-1">
                Phone & WhatsApp
              </span>
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                className="text-base font-bold text-[#111111] hover:text-accent transition-colors block"
              >
                {profileData.phone}
              </a>
            </div>
            <div className="pt-4 mt-6 border-t border-[#ECECE6]">
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:underline"
              >
                <span>Call or Message</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between hover:border-accent transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
              <span className="text-xs text-[#888888] font-medium block mb-1">
                Professional Network
              </span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-[#111111] hover:text-accent transition-colors block"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="pt-4 mt-6 border-t border-[#ECECE6]">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:underline"
                onMouseEnter={() => setCursorType("arrow")}
                onMouseLeave={() => setCursorType("default")}
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Location & Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </span>
              </div>
              <span className="text-xs text-[#888888] font-medium block mb-1">
                Location & Availability
              </span>
              <p className="text-base font-bold text-[#111111]">
                {profileData.location}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#ECECE6]">
              <span className="text-xs text-[#666666] block">
                Open for full-time roles & projects
              </span>
            </div>
          </motion.div>
        </div>

        {/* Behance Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8 rounded-2xl bg-[#F0EFEA] border border-[#E5E5DE]">
          <div>
            <h4 className="text-base sm:text-lg font-display font-bold text-[#111111]">
              Looking for full design portfolio archives?
            </h4>
            <p className="text-xs sm:text-sm text-[#666666]">
              Explore additional visual case studies, UI explorations, and motion design on Behance.
            </p>
          </div>
          <a
            href={profileData.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] hover:bg-accent text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-xs"
            onMouseEnter={() => setCursorType("arrow")}
            onMouseLeave={() => setCursorType("default")}
          >
            <span>View Full Behance Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

