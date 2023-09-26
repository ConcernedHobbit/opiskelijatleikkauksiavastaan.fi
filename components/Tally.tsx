"use client";

import { motion } from "framer-motion";
import TallyGroup from "@/components/TallyGroup";

/**
 * Displays an animated tally counter. Client-side only, non-accessible!
 * Remember to add screen reader text.
 */
export default function Tally({ days: marks }: { days: number }) {
  const groups = Math.floor(marks / 5);
  const leftover = marks % 5;

  return (
    <motion.div
      aria-hidden
      className="flex flex-wrap"
      style={{
        gap: "min(8vw, 60px)",
      }}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 1.2 * 5 + 0.5,
          },
        },
      }}
    >
      {groups > 0
        ? Array(groups)
            .fill(0)
            .map((_, i) => <TallyGroup key={i} />)
        : undefined}
      {leftover > 0 ? <TallyGroup marks={leftover} /> : undefined}
    </motion.div>
  );
}
