import React, { useState } from "react";
import reactjs from '../../assests/reactjs.jpg';
import './button.scss';

const Button = () => {
    
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="backgroundContainer">
            <div className="buttonContainer">
                <button className="neumorphicBtn"
                         onClick={() => setToggle(!toggle)}
                         >-</button>
                         {toggle && (
                <div className="imgContainer">
                    <img
                    src={reactjs}
                    alt="react js logo used for background parallax effect"
                    className="backgroundimgReact__one"/>
                    <img
                    src={reactjs}
                    alt="react js logo used for background parallax effect"
                    className="backgroundimgReact__two"/>
                    <img
                    src={reactjs}
                    alt="react js logo used for background parallax effect"
                    className="backgroundimgReact__three"/>
                    <img
                    src={reactjs}
                    alt="react js logo used for background parallax effect"
                    className="backgroundimgReact__four"/>
                    <img
                    src={reactjs}
                    alt="react js logo used for background parallax effect"
                    className="backgroundimgReact__five"/>
                </div>
             )}
            </div>
       </div>
    );
}

export default Button;