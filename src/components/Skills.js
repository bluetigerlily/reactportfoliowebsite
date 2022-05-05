import React from "react";
import { codingskills } from "../data";
import "./Skills.scss";


export default function Skills() {
    return (
        <section id="skills">
          <div className="skillsouterdivclass" id="skillsouterdivid">
            <div className="skillsinnerdivclass" id="skillsinnerdivid">
              <h1 className="skillstitleclass" id="skillstitleid">
                Skills &amp; Technologies
              </h1>
              <p className="skillsparadescriptionclass" id="skillsparadescriptionid">
                I use: &nbsp;
                <a href="https://www.codecademy.com/learn" target="_blank" rel="noreferrer">https://www.codecademy.com/learn</a> 
                &nbsp;&amp;&nbsp;<a href="https://www.hackerrank.com/vhr825" target="_blank" rel="noreferrer">https://www.hackerrank.com/vhr825</a>&nbsp; 
                as supplemental learning resources along with following Programming Youtubers, Online Articles, and Completeing Projects.  
                 Below are some of the Skills and Technologies I've learned during my time Programming:  
              </p>
            </div>
            <div className="skillsmappingdivcontainerclass" id="skillsmappingdivcontainerid">
              {codingskills.map((skill) => (
                <div key={skill} className="skillsmappinginngclass">
                  <div className="skillsmappinginnerdivclass">
                    <span className="skillsmappinginnerspanclass">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}