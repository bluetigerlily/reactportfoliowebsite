import React from 'react';
import bubblegumgif from '../../assests/bubblegumgif.mp4';

const AboutQuote = () => {
    

    return (
    <div className="svgandparacontainer">
   
        <div className="inner_poligon">
            <video className="bubblegumgif" 
                autoPlay={true}
                loading={'lazy'}
                muted={true}
                loop={true}
                alt={'loading...'}
                playsInline={true}>
                <source src={bubblegumgif} type="video/mp4" />
             
            </video>
        </div>
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
    );
}
export default AboutQuote;