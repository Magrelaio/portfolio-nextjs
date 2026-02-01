"use client";
import Reveal from "./reveal";

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
    <section className="py-28 px-6 bg-slate-950 relative overflow-hidden">
    
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[500px] bg-green-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Tecnologias & <span className="text-green-500">Ferramentas</span>
          </h2>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, i) => (
            <Reveal key={i}>
              <span className="px-5 py-2.5 bg-slate-900 border border-white/5 rounded-xl text-slate-300 font-medium hover:border-green-500/40 hover:text-green-400 transition-all duration-300 hover:scale-105 shadow-md shadow-black/30">
                {tech}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
