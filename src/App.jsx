import './styles/globals.css';
import './styles/layout.css';
import { useState, useCallback } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Nav';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { AmbientBackground } from './components/AmbientBackground';
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
              <SkillsSection />
            </div>
            <div className="section-wrapper section-wrapper--experience">
              <AmbientBackground variant="experience" />
              <Experience />
            </div>
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
