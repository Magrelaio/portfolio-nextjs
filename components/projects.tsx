"use client";
import Reveal from "./reveal";

const projects = [
  {
    title: "Kanbanly",
    desc: "Gerenciador de tarefas estilo Trello",
    url: "https://kanbanly.caiocesardev.com.br",
  },
  {
    title: "Star Wars Catalog",
    desc: "Consumo de API + Backend próprio",
    url: "https://example.com/",
  },
  {
    title: "Adventure Codex",
    desc: "Sistema online para RPG",
    url: "https://example.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-16">Projetos</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={i}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title}`}
                className="block"
              >
                <div className="bg-slate-800 p-6 rounded-xl border border-white/5 hover:border-green-500/40 hover:text-green-500 transition">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
