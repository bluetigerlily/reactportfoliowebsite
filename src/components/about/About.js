import React from "react";
import "./About.scss";
import Carouselleftright from "./Carouselleftright";
import AboutHero from "./AboutHero";
import AboutQuote from "./AboutQuote";
import reactjs from '../../assests/reactjs.jpg';


// import Properties from "../data";


 class About extends React.Component {
   


render() {
    return (
        <section id="about">
          <div className="about" id="aboutcontainerid">
          
            <div id="background">
            <div className="backgroundContainer">
        <img
        src={reactjs}
        alt="react js logo used for background parallax effect"
        className="backgroundimgReact"
         />
       </div>
              <AboutHero />
              
            </div> 
          
              <div className="svgparacarouselcontainer">
                <AboutQuote />
                <Carouselleftright  />
              </div>
          </div>
        </section>
        
      );

}
}
export default About;