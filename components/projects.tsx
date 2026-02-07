"use client";
import Reveal from "./reveal";
import { ExternalLink, Github } from "lucide-react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Kanbanly",
    desc: "Gerenciador de tarefas estilo Trello",
    url: "https://kanbanly.caiocesardev.com.br",
    github: "https://github.com/Magrelaio/kanbanly",
    image: "/kanbanly.png",
    techs: ["PHP", "Laravel", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Star Wars Catalog",
    desc: "Aplicação full stack consumindo API externa, com backend próprio e armazenamento de logs.",
    url: "https://sw-catalogue.caiocesardev.com.br",
    github: "https://github.com/Magrelaio/sw-catalogue",
    image: "/sw-catalogue.png",
    techs: ["Next.JS","React","Tailwind", "API RESTful" ],
  },
  // {
  //   title: "Adventure Codex",
  //   desc: "Sistema online para campanhas de RPG com mapas interativos e fichas.",
  //   url: "https://adventurecodex.caiocesardev.com.br/",
  //   github: "https://github.com/Magrelaio/adventure-codex",
  //   image: "/projects/adventure.png",
  //   techs: ["Laravel", "WebSockets", "MySQL"],
  // },
  {
    title: "Modron",
    desc: "Bot de dados para a plataforma Discord.",
    url: "https://modron.caiocesardev.com.br",
    github: "https://github.com/Magrelaio/site-modron",
    image: "/ModronSite.png",
    techs: ["Python", "Next.JS","React", "DiscordAPI", "Tailwind", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-slate-900 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[700px] bg-green-600/10 blur-[150px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-20">
            Meus <span className="text-green-500">Projetos</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <Reveal key={i}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.03}
                transitionSpeed={2500}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="h-full"
              >
                <div className="group h-full flex flex-col bg-slate-800/60 backdrop-blur border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-500/40 hover:shadow-xl hover:shadow-green-500/10">

                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition">
                        {p.title}
                      </h3>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition">
                        <ExternalLink className="text-slate-500 group-hover:text-green-400 transition" size={18} />
                      </a>  
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.techs.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1 rounded-md bg-slate-700/60 text-slate-300 border border-white/5 group-hover:border-green-500/30 group-hover:text-green-300 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-sm bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg transition font-medium"
                      >
                        Ver Projeto
                      </a>

                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm border border-white/10 hover:border-green-500/40 hover:text-green-400 text-slate-300 py-2 px-4 rounded-lg transition"
                      >
                        <Github size={16} /> {/*??? NAO ENTENDO OQ É ESSE ERRO DO "Github"! DIZ 'Github' is deprecated. MAS NAO TEM NADA PRA SUBSTITUÍ-L E ELE ESTA FUNCIONANDO PERFEITAMENTE!*/}
                        Código
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
