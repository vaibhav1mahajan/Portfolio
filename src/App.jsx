import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
   <div className="overflow-x-hidden selection:text-cyan-900 selection:bg-cyan-600 text-neutral-300">
    <div className="fixed h-full w-full top-0 -z-10">
    <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className="container mx-auto px-8">

    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    </div>
   </div>
  )
}