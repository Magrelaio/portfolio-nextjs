"use client";
import Reveal from "./reveal";

const projects = [
  { title: "Kanbanly", desc: "Gerenciador de tarefas estilo Trello" },
  { title: "Star Wars Catalog", desc: "Consumo de API + Backend próprio" },
  { title: "Adventure Codex", desc: "Sistema online para RPG" },
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
              <div className="bg-slate-800 p-6 rounded-xl border border-white/5 hover:border-green-500/40 transition">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
