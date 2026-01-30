"use client";
import Reveal from "./reveal";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-slate-950 text-center">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
        </Reveal>

        <Reveal>
          <p className="text-slate-400 leading-relaxed">
            Sou desenvolvedor focado em backend, APIs e aplicações web modernas.
            Gosto de transformar problemas complexos em soluções simples, rápidas e escaláveis.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
