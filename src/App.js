import React from "react";
import "./App.scss";

//component imports
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {

  return (

  

    <div className="containerclass" id="containerid">

      <div className="navbardivclass" id="navbardivid">
        <Navbar />
      </div>

      
      <main className='appbodyclass' id='appbodyid'>    

        <About />     
        <Projects />
        <Skills />
        <Contact />

      </main>

    </div>
  );
}
export default App;
