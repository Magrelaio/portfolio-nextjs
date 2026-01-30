"use client";
import Reveal from "./reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-slate-900 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">Contato</h2>
      </Reveal>

      <Reveal>
        <p className="text-slate-400 mb-8">
          Vamos trabalhar juntos ou trocar uma ideia.
        </p>
      </Reveal>

      <Reveal>
        <a
          href="mailto:caiocesar2004gfgff@gmail.com"
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-green-600/30 transition hover:scale-105"
        >
          Enviar Email
        </a>
      </Reveal>
    </section>
  );
}
