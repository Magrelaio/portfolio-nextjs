"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-lg border-b border-green-500/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-green-500 tracking-wide">
          CaioCesar.dev
        </h1>

        <nav className="hidden md:flex space-x-8 text-sm text-slate-300">
          {[
            { label: "Projetos", id: "projects" },
            { label: "Sobre", id: "about" },
            { label: "Contato", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative group hover:text-green-400 transition cursor-pointer"
            >
              {item.label}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 shadow-[0_0_8px_#22c55e] transition-all duration-300 group-hover:w-full" />

            </button>
          ))}
        </nav>


        {/* MOBILE */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="flex flex-col items-center py-6 space-y-6 text-slate-300">
              <button onClick={() => scrollTo("projects")} className="hover:text-green-400 transition">
                Projetos
              </button>
              <button onClick={() => scrollTo("about")} className="hover:text-green-400 transition">
                Sobre
              </button>
              <button onClick={() => scrollTo("contact")} className="hover:text-green-400 transition">
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
