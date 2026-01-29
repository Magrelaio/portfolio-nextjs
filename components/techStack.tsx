const techs = [
    "Python",
    "APIs",
    "Docker",
    "PHP",
    "Laravel",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "Linux",
    "RESTful Services",
    "GraphQL",
];

export default function TechStack() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Tecnologias & Ferramentas
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, i) => (
            <span key={i} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
