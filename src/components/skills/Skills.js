import React from "react";
import { codingskills } from "../../data";
import "./Skills.scss";
import { FaHackerrank } from "react-icons/fa";
import { SiCodecademy } from "react-icons/si";
import womanstanding from '../../assests/womanstanding.mp4';


const Skills = () => {

  const titleSkills = `Skills & Technologies`;
  const paraSkills = `as learning resources along with following Programming Youtubers, Online Articles, and Completeing Projects.  
  Below are some of the Skills and Technologies I've learned during my time Programming:  `;
  



  
  return (
        <section id="skills">
          <div className="skillsouterdivclass" id="skillsouterdivid">
            <div className="titleparaskills">
            <div className="skillsinnerdivclass" id="skillsinnerdivid">
              <h1 className="skillstitleclass" id="skillstitleid">
                {titleSkills}
              </h1>
              <p className="skillsparadescriptionclass" id="skillsparadescriptionid">
                I use: &nbsp;
                <a href="https://www.codecademy.com/learn" target="_blank" id="codeacademy" rel="noreferrer"><SiCodecademy /> Codecademy</a> 
                &nbsp;&amp;&nbsp;
                <a href="https://www.hackerrank.com/vhr825" target="_blank" id="hackerrank" rel="noreferrer"><FaHackerrank /> Hackerrank</a>&nbsp; 
                {paraSkills}
              </p>
            </div>

            <div className="skillsmappingdivcontainerclass" id="skillsmappingdivcontainerid">
              {codingskills.map((skill) => (
                <div key={skill} className="skillsmappinginngclass">
                  <div className="skillsmappinginnerdivclass">
                    <span className="skillsmappinginnerspanclass">
                      {skill[0]} {skill[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            </div>
            <div className="skillsvid">
            <video className="skillsdiv" 
              autoPlay={true}
              loading={'lazy'}
              muted={true}
              loop={true}
              playsInline={true}>
              <source src={womanstanding} type="video/mp4" />
              </video>           
            </div>
          </div>
        </section>
      );
}

export default Skills;