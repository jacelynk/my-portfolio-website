// NOTE: This component uses offsetPath/offsetDistance and CSS masks, which are only supported in some browsers (Safari TP, Chromium with flags).
import React from "react";
import cn from "../lib/utils";
import { motion } from "motion/react";

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ff69b4", // pink
  colorTo = "#ffb6e6",   // light pink
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 2,
}) => {
  // Fallback: check for offsetPath support
  const supportsOffsetPath = typeof window !== 'undefined' && CSS && CSS.supports && CSS.supports('offset-path', 'rect(0 auto auto 0 round 50px)');

  if (!supportsOffsetPath) {
    // Fallback: animated pink gradient ring
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 rounded-[inherit] z-10", className)}
        style={{
          borderRadius: 'inherit',
          zIndex: 10,
          ...style,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            border: `${borderWidth * 2}px solid transparent`,
            boxSizing: 'border-box',
            background: `conic-gradient(from 0deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
            WebkitMaskImage: 'linear-gradient(#fff 0 0)',
            maskImage: 'linear-gradient(#fff 0 0)',
            animation: `beam-rotate ${duration}s linear infinite`,
            zIndex: 10,
          }}
        />
        <style>{`
          @keyframes beam-rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Original advanced beam
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] border-transparent",
        "[mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] border-(length:--border-beam-width)",
        className
      )}
      style={{
        "--border-beam-width": `${borderWidth}px`,
      }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className,
        )}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          ...style,
        }}
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
}; 