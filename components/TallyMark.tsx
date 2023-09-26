"use client";

import { motion } from "framer-motion";

export default function TallyMark({ cross = false }) {
  if (cross) {
    return (
      <motion.i
        aria-hidden
        className="bg-white rotate-45 outline-none block absolute"
        style={{
          rotate: 45,
          height: "min(2vw, 18px)",
          width: "min(24vw, 180px)",
          top: "50%",
          left: "-40%",
        }}
        variants={{
          hidden: {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
          },
          visible: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          },
        }}
        transition={{
          ease: "easeIn",
          duration: 1,
        }}
      />
    );
  }

  return (
    <motion.i
      aria-hidden
      style={{
        height: 0,
        width: "min(2vw, 18px)",
        display: "block",
        backgroundColor: "white",
      }}
      variants={{
        visible: {
          height: "min(24vw, 180px)",
        },
      }}
      transition={{
        ease: "easeIn",
        duration: 1,
      }}
    />
  );
}
