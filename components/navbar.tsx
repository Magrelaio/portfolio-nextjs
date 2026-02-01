"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full z-50 bg-slate-950/30 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-green-500">CaioCesar.dev</h1>

        <nav className="space-x-6 text-sm text-slate-300">
          <button onClick={() => scrollTo("projects")} className="hover:text-green-500 transition pointer">Projetos</button>
          <button onClick={() => scrollTo("about")} className="hover:text-green-500 transition">Sobre</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-green-500 transition">Contato</button>
        </nav>
      </div>
    </header>
  );
}

