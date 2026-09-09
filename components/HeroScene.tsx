"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const HeroScene: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position normalized between -0.5 and 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural 3D tilt
  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };

  // Foreground Portrait 3D Transforms
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  // Background 3D Logo Layer Transforms (Enhanced Parallax Depth)
  const logoRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const logoRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);
  const logoTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 24]), springConfig);
  const logoTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-16, 16]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={`relative w-full h-full flex items-center justify-center pointer-events-auto select-none ${className}`}
    >
      {/* 3D Multi-Layer Parallax Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] h-[400px] sm:h-[480px] lg:h-[560px] flex items-center justify-center"
      >
        {/* Layer 0: Subtle 3D Ambient Depth Glow */}
        <motion.div
          style={{
            transform: "translateZ(-90px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[380px] sm:w-[480px] lg:w-[560px] h-[380px] sm:h-[480px] lg:h-[560px] rounded-full bg-radial from-accent/[0.09] via-accent/[0.03] to-transparent blur-3xl" />
        </motion.div>

        {/* Layer 1: MUCH BIGGER 3D Signature Logo Floating Behind Portrait */}
        <motion.div
          style={{
            rotateX: logoRotateX,
            rotateY: logoRotateY,
            x: logoTranslateX,
            y: logoTranslateY,
            transform: "translateZ(-60px) scale(1.35)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <div className="relative w-[460px] sm:w-[560px] lg:w-[680px] h-[180px] sm:h-[220px] lg:h-[260px] opacity-[0.32] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/logo.png"
              alt="Tarun A. Signature Logo 3D Emblem"
              fill
              className="object-contain select-none"
              priority
            />
          </div>
        </motion.div>

        {/* Layer 2: Foreground High-Resolution Portrait with Smooth Bottom Fade */}
        <motion.div
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
            maskImage: "linear-gradient(to bottom, black 0%, black 74%, rgba(0,0,0,0.85) 86%, transparent 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 74%, rgba(0,0,0,0.85) 86%, transparent 98%)",
          }}
          className="relative w-full h-full flex items-center justify-center z-10 p-2 sm:p-4"
        >
          <Image
            src="/images/tarun/tarun-hero.png"
            alt="Tarun A, UI/UX and Product Designer based in Chennai, India"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
            priority
            className="object-contain object-bottom select-none"
            style={{
              filter: "none",
              WebkitFilter: "none",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
