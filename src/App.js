import './styles/globals.css';
import './styles/App.css';
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

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      {!loading && (
        <>
          <CustomCursor />
          <Navbar />
          <main className="ocean-depth">
            <Hero />
            <div className="section-wrapper section-wrapper--skills">
              <AmbientBackground variant="skills" />
              <SkillsSection />
            </div>
            <div className="section-wrapper section-wrapper--experience">
              <AmbientBackground variant="experience" />
              <Experience />
            </div>
            {/* <div className="section-wrapper section-wrapper--projects">
              <AmbientBackground variant="projects" />
              <ProjectsSection />
            </div> */}
            <div className="section-wrapper section-wrapper--contact">
              <AmbientBackground variant="projects" />
              <Contact />
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default App;
