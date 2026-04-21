"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimate, useReducedMotion } from "motion/react";

export default function BrandWordmark() {
  const [scope, animate] = useAnimate();
  const dotRef = useRef<HTMLSpanElement>(null);
  const inRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!dotRef.current || !inRef.current) return;

    const dotW = dotRef.current.offsetWidth;
    const inW = inRef.current.offsetWidth;
    const margin = 3; // matches CSS margin: 0 3px on .bw-dot
    const finalDotX = inW - margin; // flush with right edge of "in"
    const inFinalX = -(dotW + margin * 2); // flush with right edge of "rob"

    if (reduce) {
      dotRef.current.style.transform = `translate(${finalDotX}px, 0)`;
      inRef.current.style.transform = `translate(${inFinalX}px, 0)`;
      return;
    }

    animate([
      // Phase 1: dot launches off the top of the viewport (single arc up)
      [
        ".bw-dot",
        { y: -260, scaleY: 1.4, scaleX: 0.7 },
        { duration: 0.42, ease: [0.22, 0.6, 0.36, 1] },
      ],

      // Concurrent: "in" slides left while dot is offscreen
      [
        ".bw-in",
        { x: inFinalX },
        { duration: 0.42, ease: [0.22, 1, 0.36, 1], at: 0.18 },
      ],

      // Phase 2: dot falls back down behind "in", landing at final position
      [
        ".bw-dot",
        { y: 0, x: finalDotX, scaleY: 1.3, scaleX: 0.75 },
        { duration: 0.5, ease: [0.5, 0, 0.6, 0.3] },
      ],

      // Phase 3: elastic settle — single squash + spring back
      [
        ".bw-dot",
        { scaleY: 0.6, scaleX: 1.4 },
        { duration: 0.08, ease: "easeOut" },
      ],
      [
        ".bw-dot",
        { scaleY: 1, scaleX: 1 },
        { type: "spring", stiffness: 400, damping: 10, mass: 0.6 },
      ],
    ]);
  }, [animate, reduce]);

  return (
    <span ref={scope} className="brand-wordmark" aria-hidden>
      <span className="bw-rob">rob</span>
      <motion.span ref={dotRef} className="bw-dot" />
      <motion.span ref={inRef} className="bw-in">in</motion.span>
    </span>
  );
}
