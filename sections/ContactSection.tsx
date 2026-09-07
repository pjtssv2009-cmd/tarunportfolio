"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Copy, Check, Send } from "lucide-react";
import { profileData } from "@/data/profile";
import { useCursor } from "@/components/CustomCursor";

export const ContactSection: React.FC = () => {
  const { setCursorType } = useCursor();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSent, setFormSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Potential Client"}`);
    const body = encodeURIComponent(
      `Hi Tarun,\n\n${message}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-36 px-6 sm:px-10 border-t border-[#E5E5DE] bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="font-editorial-mono text-xs text-accent uppercase tracking-widest font-semibold">
            08 / GET IN TOUCH
          </span>
          <div className="h-px bg-[#E5E5DE] flex-1 max-w-xs" />
        </div>

        {/* Large Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-7">
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
              className="text-base sm:text-xl text-[#555555] leading-relaxed max-w-xl mb-8"
            >
              Have a project, product or experience that needs thoughtful design? Let&apos;s talk.
            </motion.p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Card */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-editorial-mono text-[11px] text-[#888888] uppercase block mb-1">
                    EMAIL ADDRESS
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm sm:text-base font-semibold text-[#111111] hover:text-accent transition-colors block break-all"
                  >
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-3 mt-3 border-t border-[#ECECE6]">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>Email Me</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(profileData.email, "email")}
                    className="p-1 rounded text-[#777777] hover:text-[#111111] transition-colors ml-auto"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-5 rounded-xl border border-[#E5E5DE] shadow-xs flex flex-col justify-between">
                <div>
                  <span className="font-editorial-mono text-[11px] text-[#888888] uppercase block mb-1">
                    PHONE & WHATSAPP
                  </span>
                  <a
                    href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                    className="text-sm sm:text-base font-semibold text-[#111111] hover:text-accent transition-colors block"
                  >
                    {profileData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-3 mt-3 border-t border-[#ECECE6]">
                  <a
                    href={`tel:${profileData.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
                  >
                    <span>Call Now</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => copyToClipboard(profileData.phone, "phone")}
                    className="p-1 rounded text-[#777777] hover:text-[#111111] transition-colors ml-auto"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#D4D3CC] hover:border-accent hover:text-accent text-xs font-semibold tracking-wider uppercase text-[#111111] transition-colors shadow-xs"
                onMouseEnter={() => setCursorType("arrow")}
                onMouseLeave={() => setCursorType("default")}
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>

              <a
                href={profileData.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#D4D3CC] hover:border-accent hover:text-accent text-xs font-semibold tracking-wider uppercase text-[#111111] transition-colors shadow-xs"
                onMouseEnter={() => setCursorType("arrow")}
                onMouseLeave={() => setCursorType("default")}
              >
                <span>View Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>

          {/* Quick Interactive Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#E5E5DE] shadow-sm"
          >
            <span className="font-editorial-mono text-xs uppercase tracking-widest text-[#888888] block mb-2">
              SEND DIRECT MESSAGE
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-6">
              Start a Conversation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#444444] uppercase tracking-wider mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5DE] text-sm text-[#111111] placeholder-[#999999] focus:bg-white focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] uppercase tracking-wider mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5DE] text-sm text-[#111111] placeholder-[#999999] focus:bg-white focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#444444] uppercase tracking-wider mb-1.5">
                  Project Details / Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your product, timeline, or design challenge..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5DE] text-sm text-[#111111] placeholder-[#999999] focus:bg-white focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#111111] hover:bg-accent text-[#F8F7F4] text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm"
                onMouseEnter={() => setCursorType("pointer")}
                onMouseLeave={() => setCursorType("default")}
              >
                <Send className="w-4 h-4" />
                <span>Send via Email Client</span>
              </button>

              {formSent && (
                <p className="text-xs text-emerald-600 text-center font-medium mt-2">
                  ✓ Email client launched with prefilled details!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
