import React from "react";
import "./About.scss";
import Carouselleftright from "./Carouselleftright";
import Carouselupdown from "./Carouselupdown";

import bubblegumgif from '../assests/bubblegumgif.gif'

// import Properties from "../data";


 class About extends React.Component {

  constructor()  {
    super();
    this.state = {
      isToggled: false,
      isMounted: true,
    }

  }

   handleCallBack = (isToggled) => {
    if (window.innerWidth < 1500) {
      this.setState({isToggled: true});
   
    } 
   }

   componentDidMount() {
     if(this.state.isMounted) {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
     }
  }


  tick() {
    this.setState({
      isToggled: false,
    });
  }
  

render() {
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
              <img src={bubblegumgif} className="bubblegumgif" alt="loading..."></img>
            </div>
                <div className="paracontainer">
            <p className="aboutfirstpara" id="aboutfirstparaid">
            "The only thing worse than starting something and failing... 
            is not starting something." -- Seth Godin.
              </p>
                </div>
              </div>
          
      {(this.state.isToggled === true) ? (<Carouselupdown parentCallback={this.handleCallBack}  />) : (<Carouselleftright parentCallback={this.handleCallBack} />)}
          </div>
        </section>
      );

}
}
export default About;