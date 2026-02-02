"use client";
import Reveal from "./reveal";
import { Code2, Server, Database } from "lucide-react";
import Image from "next/image";

export default function About() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-slate-950 overflow-hidden"
    >
      <div className="absolute right-1/2 translate-x-1/2 top-0 w-[700px] h-[700px] bg-green-600/10 blur-[160px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col items-center md:items-start">
          <Reveal>
            {/* Arrumar depois a altura da imagem!!!*/}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
              <Image
                src="/profile-image.jpg"
                alt="foto de Caio Cesar"
                width={220}
                height={220}
                className="relative rounded-full border border-white/10 object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <p className="text-3xl font-bold text-green-400">+20</p>
                <p className="text-slate-400 text-sm">Projetos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400">+15</p>
                <p className="text-slate-400 text-sm">Tecnologias</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400">100%</p>
                <p className="text-slate-400 text-sm">Foco em Qualidade</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="text-left">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Prazer, eu sou{" "}
              <span className="text-green-500">Caio Cesar</span> 👋
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Desenvolvedor focado em <span className="text-white font-medium">backend</span>, 
              <span className="text-white font-medium"> APIs</span> e aplicações web modernas.
              Gosto de transformar problemas complexos em soluções simples,
              rápidas e escaláveis.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href=""
                //download dps que linkar certinho descomenta isso :p
                className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
              >
              Baixar CV
              </a>

              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-xl border border-white/15 text-white font-semibold hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
              >
              Falar comigo
              </button>
            </div>
          </Reveal>

          <div className="grid gap-5 mt-8">
            <Reveal>
              <div className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:border-green-500/40 transition">
                <Server className="text-green-400 mt-1" size={22} />
                <div>
                  <h3 className="text-white font-semibold">Backend & APIs</h3>
                  <p className="text-slate-400 text-sm">
                    Arquitetura escalável, autenticação e integrações.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:border-green-500/40 transition">
                <Database className="text-green-400 mt-1" size={22} />
                <div>
                  <h3 className="text-white font-semibold">Banco de Dados</h3>
                  <p className="text-slate-400 text-sm">
                    Modelagem eficiente e performance de dados.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur hover:border-green-500/40 transition">
                <Code2 className="text-green-400 mt-1" size={22} />
                <div>
                  <h3 className="text-white font-semibold">Web Moderna</h3>
                  <p className="text-slate-400 text-sm">
                    Interfaces rápidas, responsivas e bem estruturadas.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
