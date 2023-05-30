import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { Link } from "react-scroll";
import geartwo from '../../assests/geartwo.svg';

const AboutHero = () => {
  
  const titleRef = useRef(null);
  
  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 6, 
      autoAlpha: 0, 
      ease: 'none',
      delay: 1
    });
  }, [titleRef])

  return (
        <>
        <div className="aboutinnercontainer" id="aboutinnercontainerid">
        <h1 ref={titleRef} className="abouttitle" id="abouttitleid">
          Haley Moses
        </h1>
       </div>
      
       <div className="gearscontainer">
       <div className="gearandparacontainer">
       <div className="geardiv">
       </div>
         <p className="gearptwo">Full Stack Developer</p>
         <p className="gearpone">Keeping the Gears Turning</p>
          <button className="button-85">     
          <Link to="projects"
        smooth={true}
        offset={-70}
        duration={500}
        spy={true}
        style={{
          color: 'rgba(255, 255, 255, .9)',
          backgroundColor: `rgba(94, 84, 142, 1)`,
          padding: `.1rem`}}
        >
      Check Out My Work
      </Link></button> 
       </div>
       <div>
        <img 
        className="geartwo"
        src={geartwo}
        alt={'loading'}
        width={450}
        height={450}
        />
       </div>
       </div>
       </>
    );
}
export default AboutHero;