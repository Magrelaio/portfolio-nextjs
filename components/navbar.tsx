export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold text-primary">CaioCesar.dev</h1>
      <div className="space-x-6 text-sm">
        <a href="#projects" className="hover:text-primary">Projetos</a>
        <a href="#about" className="hover:text-primary">Sobre</a>
        <a href="#contact" className="hover:text-primary">Contato</a>
      </div>
    </nav>
  );
}
