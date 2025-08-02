import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import AnimatedStarfield from "./components/AnimatedStarfield";
import { ScrollProgress } from "./components/SectionScroll";
import Particles from "./components/Particles";

function App() {
  return (
    <>
      <ScrollProgress />

      {/* Beautiful OGL Particles Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleCount={300}
          particleSpread={15}
          speed={0.08}
          particleColors={[
            "#00d4ff",
            "#e94560",
            "#00ff88",
            "#ffd700",
            "#ffffff",
          ]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={25}
          disableRotation={false}
        />
      </div>

      {/* Keep the original starfield for additional depth */}
      <AnimatedStarfield />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
