"use client";
import { useState, useRef } from "react";
import Reveal from "./reveal";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("caiocesar2004gfgff@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-slate-950 text-center overflow-hidden"
    >

      <motion.div
        className="absolute w-[700px] h-[700px] bg-green-500/10 blur-[200px] rounded-full -z-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
      />

      <Reveal>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Vamos criar algo <span className="text-green-500">incrível</span>
        </h2>
      </Reveal>

      <Reveal>
        <p className="text-slate-400 max-w-2xl mx-auto mb-14 text-lg">
          Estou disponível para projetos, freelas ou conversas sobre tecnologia
          e produtos digitais.
        </p>
      </Reveal>

      <Reveal>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          whileHover={{ rotateX: 5, rotateY: -5 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
          className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-800 rounded-2xl p-10 max-w-xl mx-auto shadow-2xl shadow-green-500/10 overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(34,197,94,0.15), transparent 60%)",
          }}
        >
          <a
            href="mailto:caiocesar2004gfgff@gmail.com"
            className="group flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-green-600/30 transition hover:scale-105 mb-6"
          >
            <Mail className="w-5 h-5 group-hover:rotate-12 transition" />
            Enviar Email
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-green-400 transition mb-8 mx-auto"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Email copiado
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copiar email
              </>
            )}
          </button>

          <div className="flex justify-center gap-6">
            <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://github.com/Magrelaio" className="p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
              <Github className="w-5 h-5 text-slate-300" />
            </motion.a>

            <motion.a whileHover={{ y: -4, scale: 1.1 }} href="https://www.linkedin.com/in/caio-cesar-santos-930b3823b/" className="p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition">
              <Linkedin className="w-5 h-5 text-slate-300" />
            </motion.a>
          </div>
        </motion.div>
      </Reveal>
    </section>
  );
}
