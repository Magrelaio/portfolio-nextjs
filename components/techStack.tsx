"use client";
import { motion } from "framer-motion";
import Reveal from "./reveal";
import {
  SiElectron, SiReact, SiPython, SiPhp, SiLaravel, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiDocker, SiPostgresql,
  SiMysql, SiMongodb, SiGit, SiGithub, SiLinux, SiGraphql,SiNodedotjs, SiBootstrap, SiSass, SiExpo, SiSqlite, SiPostman,
} from "react-icons/si";
import { FaServer, FaCode, FaDatabase, FaTools } from "react-icons/fa";

const techGroups = [
  {
    title: "Backend",
    icon: FaServer,
    techs: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "APIs", icon: SiGraphql, color: "text-pink-500" },
    ],
  },
  {
    title: "Frontend",
    icon: FaCode,
    techs: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
      { name: "Sass", icon: SiSass, color: "text-pink-400" },
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "Electron", icon: SiElectron, color: "text-blue-300" },
      { name: "Expo", icon: SiExpo, color: "text-purple-500" },
    ],
  },
  {
    title: "Banco de Dados",
    icon: FaDatabase,
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
      { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "SQLite", icon: SiSqlite, color: "text-blue-300" },
    ],
  },
  {
    title: "DevOps & Ferramentas",
    icon: FaTools,
    techs: [
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
      { name: "Linux", icon: SiLinux, color: "text-yellow-500" },
      { name: "Git", icon: SiGit, color: "text-orange-500" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
      { name: "Postman", icon: SiPostman, color: "text-gray-400" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-28 px-6 bg-slate-950 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[600px] bg-green-600/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-20 text-white">
            Tecnologias &{" "}
            <span className="text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]">
              Ferramentas
            </span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {techGroups.map((group, index) => (
            <Reveal key={index}>
              <div className="h-full flex flex-col bg-slate-900/60 backdrop-blur border border-white/5 rounded-2xl p-8 shadow-lg shadow-black/40">

                <h3 className="text-xl font-semibold mb-6 text-green-400">
                  <group.icon className="inline mr-2" /> {group.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {group.techs.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        className="flex items-center gap-3 px-4 py-2.5 bg-slate-800 border border-white/5 rounded-xl text-slate-300 font-medium hover:border-green-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] transition-all duration-300"
                      >
                        <Icon className={`text-xl ${tech.color}`} />
                        {tech.name}
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
