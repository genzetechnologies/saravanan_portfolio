import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EngineeringHighlights from './components/EngineeringHighlights';
import Education from './components/Education';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EC] font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EngineeringHighlights />
        <Education />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
