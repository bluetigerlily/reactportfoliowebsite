import React from "react";
import "./App.scss";

//component imports
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import ParticleInstance from "./components/Particles";

import { ParallaxProvider } from 'react-scroll-parallax';
// Parallax scrolling effects


function App() {
  return (
    <div className="containerclass" id="containerid">

     
      <div className="navbardivclass" id="navbardivid">
        <Navbar />
      </div>
      <ParallaxProvider> 
      <main className='appbodyclass' id='appbodyid'>    

        <About />
        <Projects />
        <Skills />
        <Contact />

      </main>
      </ParallaxProvider>  

      {/* <div className="particlesdivclass">
        <ParticleInstance />
      </div> */}
    </div>
  );
}

export default App;
