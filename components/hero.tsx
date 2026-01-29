export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
        Sou Desenvolvedor Full-Stack
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-xl">
        Construindo aplicações web, automações e soluções escaláveis com performance, organização e foco em resultados.
      </p>

      <a href="#projects"
         className="text-white bg-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
        Ver Projetos
      </a>
    </section>
  );
}
