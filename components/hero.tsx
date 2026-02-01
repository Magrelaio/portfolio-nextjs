"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
    
      <motion.div
        className="absolute w-[700px] h-[700px] bg-green-500/30 rounded-full blur-[160px] -z-10"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Olá, eu sou <span className="text-green-500">Caio Cesar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-slate-400 text-lg max-w-2xl mb-10"
      >
        Desenvolvedor focado em {/* sistemas modernos, performáticos e experiências web elegantes FAZER ROTAÇÃO AQ*/}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        onClick={scrollToProjects}
        className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/30 transition hover:scale-105"
      >
        Ver Projetos
      </motion.button>
    </section>
  );
}
