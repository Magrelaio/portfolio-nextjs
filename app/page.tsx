import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechStack from "@/components/techStack";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
