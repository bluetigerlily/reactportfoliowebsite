import React from "react";
import "./About.scss";
import Carousel from "./Carousel";
import bubblegumgif from '../assests/bubblegumgif.gif'

// import Properties from "../data";



export default function About() {

 


    return (
        <section id="about">
          <div className="about" id="aboutcontainerid">

            <div className="aboutinnercontainer" id="aboutinnercontainerid">
              <h1 className="abouttitle" id="abouttitleid">
                Haley Moses
              </h1>
             </div>


             <div className="svgandparacontainer">
            <div className="inner_poligon">
              <img src={bubblegumgif} alt="loading..."></img>
            </div>
                <div className="paracontainer">
            <p className="aboutfirstpara" id="aboutfirstparaid">
            "The only thing worse than starting something and failing... 
            is not starting something." -- Seth Godin.
              </p>
                </div>
              </div>
          

        <Carousel />
         
         
         
          
        


          </div>
        </section>
      );

}