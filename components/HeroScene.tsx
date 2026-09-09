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
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

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
      style={{ perspective: 1100 }}
      className={`relative w-full h-full flex items-center justify-center pointer-events-auto select-none ${className}`}
    >
      {/* 3D Parallax Floating Container (Centered & Scaled Prominently) */}
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
        className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[560px] h-[460px] sm:h-[540px] lg:h-[620px] flex items-center justify-center"
      >
        {/* High-Resolution Portrait with Natural Smooth Alpha Mask */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 88%, transparent 98%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 88%, transparent 98%)",
          }}
        >
          <Image
            src="/images/tarun/tarun-hero.png"
            alt="Tarun A, UI/UX and Product Designer based in Chennai, India"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
            priority
            className="object-contain object-center select-none"
            style={{
              filter: "none",
              WebkitFilter: "none",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};
