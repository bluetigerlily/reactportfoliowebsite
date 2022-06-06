import React from "react";
import "./App.scss";

//component imports
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
