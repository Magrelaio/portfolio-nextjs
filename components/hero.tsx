export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
        Olá, eu sou <span className="text-primary">Caio Cesar</span>
      </h2>

      <p className="text-gray-400 max-w-2xl text-lg mb-8">
        Desenvolvedor focado em criar sistemas performáticos,
        experiências modernas e soluções inteligentes.
      </p>

      <a
        href="#projects"
        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        Ver Projetos
      </a>
    </section>
  );
}