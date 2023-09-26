import { motion } from "framer-motion";
import TallyMark from "@/components/TallyMark";

export default function TallyGroup({ marks = 5 }) {
  if (marks > 5) {
    throw new Error("Only 5 marks per group supported");
  }

  const cross = marks === 5;

  return (
    <motion.div
      className="flex relative"
      style={{
        gap: "min(1.5vw, 10px)",
        minHeight: "min(24vw, 180px)",
      }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 1.2,
          },
        },
      }}
    >
      {Array(Math.min(marks, 4))
        .fill(0)
        .map((_, i) => (
          <TallyMark key={i} />
        ))}
      {cross && <TallyMark cross />}
    </motion.div>
  );
}
