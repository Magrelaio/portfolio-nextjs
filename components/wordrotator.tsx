"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = [
  "sistemas modernos",
  "APIs escaláveis",
  "experiências web elegantes",
  "interfaces performáticas",
  "aplicações inteligentes",
];

export default function WordRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const baseTime = 1200;
    const extraTime = words[index].length * 40;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, baseTime + extraTime);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <span className="relative inline-block h-7 align-bottom">
      <span className="invisible whitespace-nowrap font-medium">
        experiências web elegantes
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            textShadow: "0 0 8px rgba(34,197,94,0.35)",
          }}
          exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1 top-0 text-green-400 font-medium whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
