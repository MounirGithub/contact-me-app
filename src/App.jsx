import './styles/globals.css';
import './styles/layout.css';
import { useState, useCallback } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Nav';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { Experience } from './components/Experience';
import { ProjectsSection } from './components/ProjectsSection';
import { Contact } from './components/Contact';
import { AmbientBackground } from './components/AmbientBackground';
import { OceanCreatures } from './components/OceanCreatures';
import { ScrollIndicator } from './components/ScrollIndicator';
import { useLenis } from './hooks/useLenis';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollTo } = useLenis();

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      {!loading && (
        <>
          <CustomCursor />
          <Navbar scrollTo={scrollTo} />
          <main className="ocean-depth">
            <Hero />
            <ScrollIndicator />
            <div className="section-wrapper section-wrapper--skills">
              <AmbientBackground variant="skills" />
              <OceanCreatures depth="surface" />
              <SkillsSection />
            </div>
            <div className="section-wrapper section-wrapper--experience">
              <AmbientBackground variant="experience" />
              <OceanCreatures depth="meso" />
              <Experience />
            </div>
            <div className="section-wrapper section-wrapper--projects">
              <AmbientBackground variant="projects" />
              <OceanCreatures depth="bathy" />
              <ProjectsSection />
            </div>
            <div className="section-wrapper section-wrapper--contact">
              <AmbientBackground variant="projects" />
              <OceanCreatures depth="abyss" />
              <Contact />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
