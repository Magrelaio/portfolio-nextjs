const projects = [
  { title: "Kanbanly", desc: "Gerenciador de tarefas estilo Trello" },
  //{ title: "Star Wars Catalog", desc: "Catálogo de filmes com API externa" },
  { title: "Adventure Codex", desc: "Sistema de RPG online" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-12 text-center">Projetos</h3>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-primary transition"
          >
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
