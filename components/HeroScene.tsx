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
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
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
      style={{ perspective: 1000 }}
      className={`relative w-full h-full flex items-center justify-center pointer-events-auto select-none ${className}`}
    >
      {/* 3D Parallax Floating Container */}
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
        {/* Unfiltered High-Resolution PNG with Natural Smooth Alpha Edges */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{
            maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
          }}
        >
          <Image
            src="/images/tarun/tarun-hero.png"
            alt="Tarun A — UI/UX Designer"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
            priority
            className="object-contain select-none"
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
