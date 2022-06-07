import React from "react";
import "./About.scss";
import Carouselleftright from "./Carouselleftright";
import { Link } from "react-scroll";
import bubblegumgif from '../assests/bubblegumgif.mp4'

// import Properties from "../data";


 class About extends React.Component {
   


render() {
    return (
        <section id="about">
          <div className="about" id="aboutcontainerid">

            <div className="aboutinnercontainer" id="aboutinnercontainerid">
              <h1 className="abouttitle" id="abouttitleid">
                Haley Moses
              </h1>
             </div>
             <div className="gearandparacontainer">
             <div className="geardiv">
             </div>
               <p className="gearptwo">A Full Stack Experience</p>
               <p className="gearpone">That Brings It All Together</p>
                <button className="button-85">     
                <Link to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              >
            Check Out My Work
            </Link></button> 
             </div>

            <div className="svgparacarouselcontainer">
             <div className="svgandparacontainer">
            <div className="inner_poligon">
            <video className="bubblegumgif" 
              autoPlay={true}
              loading={'lazy'}
              muted={true}
              loop={true}
              alt={'loading...'}
              playsinline={true}>
              <source src={bubblegumgif} type="video/mp4" />
              </video>            </div>
            <div className="gridcontainer">
 <div className='panelcontainer'>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
   <div className="panel"></div>
 </div>
 </div>
             <div className="paracontainer">
            <p className="aboutfirstpara" id="aboutfirstparaid">
            "The only thing worse than starting something and failing... 
            is not starting something." -- Seth Godin.
              </p>
                </div>
              </div>
            <Carouselleftright  />
            </div>
          </div>
              
        </section>
        
      );

}
}
export default About;