"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type CursorType = "default" | "view" | "arrow" | "pointer" | "explore";

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: "default",
  setCursorType: () => {},
  cursorText: "",
  setCursorText: () => {},
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [cursorText, setCursorText] = useState<string>("");

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType, cursorText, setCursorText }}>
      {children}
      <CustomCursor />
    </CursorContext.Provider>
  );
};

export const CustomCursor: React.FC = () => {
  const { cursorType, cursorText } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateTouch = () => {
      setIsTouchDevice(!mediaQuery.matches || window.innerWidth < 1024);
    };
    updateTouch();
    window.addEventListener("resize", updateTouch);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("resize", updateTouch);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Primary Smooth Follower */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isVisible ? 1 : 0,
          scale: cursorType === "default" ? 1 : cursorType === "pointer" ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.15,
        }}
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        {cursorType === "default" && (
          <div className="w-3.5 h-3.5 -ml-1.5 -mt-1.5 rounded-full bg-accent mix-blend-difference" />
        )}

        {cursorType === "pointer" && (
          <div className="w-8 h-8 -ml-4 -mt-4 rounded-full border-2 border-accent bg-accent/10 backdrop-blur-[1px]" />
        )}

        {cursorType === "view" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 -ml-9 -mt-4 rounded-full bg-[#111111] text-[#F8F7F4] text-xs font-semibold tracking-wider uppercase shadow-xl"
          >
            <span>{cursorText || "VIEW"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </motion.div>
        )}

        {cursorType === "explore" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 -ml-12 -mt-4 rounded-full bg-accent text-white text-xs font-semibold tracking-wider uppercase shadow-xl"
          >
            <span>DRAG / 3D</span>
          </motion.div>
        )}

        {cursorType === "arrow" && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-10 h-10 -ml-5 -mt-5 rounded-full bg-accent text-white flex items-center justify-center shadow-lg"
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
