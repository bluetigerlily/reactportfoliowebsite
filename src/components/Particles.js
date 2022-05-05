import React from "react";
import Particles from "react-tsparticles";

// $black: #000000ff;
// $champagne-pink: #f9dec9ff;
// $wild-blue-yonder: #99b2ddff;
// $white: #ffffff;
// $purple-navy: #5e548eff;

const ParticleInstance = () => {
    const particlesInit = (main) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (
      <div className="particlesdiv" id="particlesdivid">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#99b2ddff",
            },
          },
            fpsLimit: 120, 
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.1,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#5e548eff",
            },
            links: {
              color: "#5e548eff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "star",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      /> 
    </div>
    );
  };
  
  export default ParticleInstance;