export default function Navbar() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-green-600">CaioCesar.dev</h1>

        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:text-green-600">Projetos</a>
          <a href="#about" className="hover:text-green-600">Sobre</a>
          <a href="#contact" className="hover:text-green-600">Contato</a>
        </nav>
      </div>
    </header>
  );
}
