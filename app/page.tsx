import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
