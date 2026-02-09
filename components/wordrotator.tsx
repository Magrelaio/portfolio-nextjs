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
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            textShadow: "0 0 8px rgba(34,197,94,0.35)",
          }}
          exit={{ y: -20, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5 }}
          className="inline-block text-green-400 font-medium whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
