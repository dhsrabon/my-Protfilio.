import Hero from '@/components/home/Hero';
import Skills from '@/components/home/Skills';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';
export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20 overflow-hidden">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}