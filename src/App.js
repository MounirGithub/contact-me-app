import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import "bootstrap-icons/font/bootstrap-icons.css";

import mobileBackGround from './assets/pexels-cup-of-couple-6177737 (Original).mp4';
import backGround from './assets/production_id_4990233 (1080p).mp4';

function App() {
  const firstItemRef = useRef(null);

  return (
    <div className="App">
      <BrowserView>
        <video autoPlay loop muted id="video" className='blurred'>
          <source src={backGround} type="video/mp4"></source></video>
      </BrowserView>

      <MobileView>
        <video autoPlay loop muted id="video" className='blurred'>
          <source src={mobileBackGround} type="video/mp4"></source></video>
      </MobileView>

      <NavBar firstItemRef={firstItemRef} />
      <Banner />
      <Skills></Skills>
      <ContactForm firstItemRef={firstItemRef} />
      <Footer />
    </div>
  );
}

export default App;
