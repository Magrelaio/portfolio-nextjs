const projects = [
  { title: "Kanbanly", description: "Gerenciador de tarefas estilo Trello" },
 // { title: "Star Wars API", description: "Catálogo de filmes usando API externa" },
  { title: "Adventure Codex", description: "Sistema RPG online" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
