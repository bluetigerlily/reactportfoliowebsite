import React from "react";
import reactjs from '../../assests/reactjs.jpg';
import './button.scss';

const Button = () => {
    return (
        <div className="backgroundContainer">
            <div className="buttonContainer">
                <button className="neumorphicBtn">-</button>
                <img
                src={reactjs}
                alt="react js logo used for background parallax effect"
                className="backgroundimgReact"/>
            </div>
       </div>
    );
}

export default Button;