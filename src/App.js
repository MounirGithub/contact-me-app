import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';

import backGround from './assets/pexels_videos_4703 (1080p).mp4';

function App() {
  const firstItemRef = useRef(null);

  return (
    <div className="App">
      <video autoPlay loop muted id="video" className='blurred'>
        <source src={backGround} type="video/mp4"></source>
      </video>
      <NavBar firstItemRef={firstItemRef} />
      <Banner />
      <ContactForm firstItemRef={firstItemRef} />
      <Footer />
    </div>
  );
}

export default App;
