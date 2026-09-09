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
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  // Background 3D Logo Layer Transforms (Enhanced Parallax Depth)
  const logoRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const logoRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);
  const logoTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const logoTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), springConfig);

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
        className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] aspect-[4/4.5] flex items-center justify-center"
      >
        {/* Layer 0: Subtle 3D Ambient Depth Glow */}
        <motion.div
          style={{
            transform: "translateZ(-80px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full bg-radial from-accent/[0.08] via-accent/[0.03] to-transparent blur-2xl" />
        </motion.div>

        {/* Layer 1: 3D Signature Logo Floating Behind Portrait */}
        <motion.div
          style={{
            rotateX: logoRotateX,
            rotateY: logoRotateY,
            x: logoTranslateX,
            y: logoTranslateY,
            transform: "translateZ(-50px) scale(1.15)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          <div className="relative w-[320px] sm:w-[380px] lg:w-[420px] h-[120px] sm:h-[150px] opacity-[0.28] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.06)]">
            <Image
              src="/images/logo.png"
              alt="Tarun A. Signature Logo 3D Emblem"
              fill
              className="object-contain select-none"
              priority
            />
          </div>
        </motion.div>

        {/* Layer 2: Foreground High-Resolution Portrait with Ultra-Smooth Bottom Fade */}
        <motion.div
          style={{
            transform: "translateZ(25px)",
            transformStyle: "preserve-3d",
            maskImage: "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.85) 84%, transparent 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.85) 84%, transparent 98%)",
          }}
          className="relative w-full h-full flex items-center justify-center z-10"
        >
          <Image
            src="/images/tarun/tarun-hero.png"
            alt="Tarun A, UI/UX and Product Designer based in Chennai, India"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
            priority
            className="object-contain select-none"
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
