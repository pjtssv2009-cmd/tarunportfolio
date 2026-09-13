"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HeroSceneProps {
  className?: string;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // Raw normalized mouse coordinates (-0.5 to 0.5)
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth spring physics for natural, buttery 3D motion
  const springConfig = { damping: 28, stiffness: 160, mass: 0.5 };
  const smoothMouseX = useSpring(rawMouseX, springConfig);
  const smoothMouseY = useSpring(rawMouseY, springConfig);

  // 3D Rotations (Capped at 5°-7° for editorial sophistication)
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-7, 7]);

  // Parallax offsets for different depth layers
  const portraitTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const portraitTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

  // Background Logo Parallax (Moves in subtle opposite direction)
  const bgLogoTranslateX = useTransform(smoothMouseX, [-0.5, 0.5], [18, -18]);
  const bgLogoTranslateY = useTransform(smoothMouseY, [-0.5, 0.5], [14, -14]);

  const sheenX = useTransform(smoothMouseX, [-0.5, 0.5], ["20%", "80%"]);
  const sheenY = useTransform(smoothMouseY, [-0.5, 0.5], ["20%", "80%"]);

  useEffect(() => {
    if (isTouchDevice) return;

    const heroSection = document.getElementById("top");
    if (!heroSection) return;

    const handleSectionMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();
      if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        rawMouseX.set(Math.max(-0.5, Math.min(0.5, x)));
        rawMouseY.set(Math.max(-0.5, Math.min(0.5, y)));
      }
    };

    const handleSectionMouseLeave = () => {
      rawMouseX.set(0);
      rawMouseY.set(0);
      setIsHovered(false);
    };

    heroSection.addEventListener("mousemove", handleSectionMouseMove);
    heroSection.addEventListener("mouseleave", handleSectionMouseLeave);

    return () => {
      heroSection.removeEventListener("mousemove", handleSectionMouseMove);
      heroSection.removeEventListener("mouseleave", handleSectionMouseLeave);
    };
  }, [isTouchDevice, rawMouseX, rawMouseY]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full flex items-center justify-center select-none ${className}`}
      style={{
        perspective: 1200,
      }}
    >
      {/* 3D Transform Stage */}
      <motion.div
        style={{
          rotateX: isTouchDevice ? 0 : rotateX,
          rotateY: isTouchDevice ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={
          isTouchDevice
            ? {
                y: [0, -8, 0],
                scale: [1, 1.01, 1],
              }
            : isHovered
            ? {
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }
            : {
                scale: 1,
                y: [0, -6, 0],
                transition: {
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  scale: { duration: 0.5, ease: "easeOut" },
                },
              }
        }
        className="relative w-full max-w-[500px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[760px] h-[360px] sm:h-[430px] md:h-[490px] lg:h-[530px] flex items-center justify-center will-change-transform"
      >
        {/* Layer 1: Clearly Visible White Brand LOGO BEHIND Portrait Cutout (Z: -35px) */}
        <motion.div
          style={{
            transform: "translateZ(-35px)",
            x: isTouchDevice ? 0 : bgLogoTranslateX,
            y: isTouchDevice ? 0 : bgLogoTranslateY,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        >
          {/* Luminous Neon-Blue Ambient Radial Aura */}
          <div className="absolute w-[380px] sm:w-[520px] lg:w-[620px] h-[380px] sm:h-[520px] lg:h-[620px] rounded-full bg-gradient-to-tr from-accent/30 via-indigo-500/15 to-transparent blur-3xl opacity-90" />
          
          {/* Background Brand Logo - Crisp White & Sized Wide Behind Subject */}
          <div className="relative w-[340px] sm:w-[480px] md:w-[600px] lg:w-[720px] h-[130px] sm:h-[180px] md:h-[220px] lg:h-[260px] flex items-center justify-center opacity-90 sm:opacity-95 transition-opacity duration-300">
            <Image
              src="/images/logo-white.png"
              alt="Tarun A Brand Logo"
              fill
              priority
              className="object-contain object-center drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Layer 2: Main Subject Cutout Portrait in Center (Z: +30px) */}
        <motion.div
          style={{
            transform: "translateZ(30px)",
            x: isTouchDevice ? 0 : portraitTranslateX,
            y: isTouchDevice ? 0 : portraitTranslateY,
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          {/* Natural soft contact shadow under the cutout */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              transform: "translateZ(-15px) translateY(20px)",
            }}
          >
            <div className="w-[65%] h-[65%] rounded-full bg-black/40 blur-2xl opacity-75" />
          </div>

          {/* High-Fidelity Portrait Image with Smooth Fade-out Mask at Bottom */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 78%, rgba(0,0,0,0.85) 88%, transparent 100%)",
            }}
          >
            <Image
              src="/images/tarun/tarun-hero.png"
              alt="Tarun A - UI/UX and Product Designer"
              fill
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 760px"
              className="object-contain object-bottom select-none pointer-events-none"
              style={{
                filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.3))",
              }}
            />
          </div>

          {/* Layer 3: Interactive Light Sheen Highlight (Z: +45px) */}
          {!isTouchDevice && (
            <motion.div
              style={{
                transform: "translateZ(45px)",
                background: useTransform(
                  [sheenX, sheenY],
                  ([x, y]) =>
                    `radial-gradient(circle 260px at ${x} ${y}, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)`
                ),
              }}
              className="absolute inset-0 pointer-events-none rounded-2xl opacity-75 mix-blend-overlay transition-opacity duration-300"
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
