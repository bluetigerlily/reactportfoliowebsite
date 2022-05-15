import React from "react";
import { FaAws, FaCss3, FaHtml5, FaPython, FaReact, FaJs, FaJava, FaNode, FaGithub, FaFoursquare } from "react-icons/fa"
import { SiApachemaven, SiPostgresql, SiJquery, SiCypress, SiFirebase, SiHibernate, SiJunit5 } from "react-icons/si";

export const projects = [
    {
      title: "Bicycle Store Application",
      subtitle: "Java 8 with PostgreSQL",
      description:
        `The Bicycle Shop Application is a console-based application in Java with a PostGreSQL Database.  
        Designed with a three tier User approach of Customer, Employee, and Manager; it allows for offers to be made and accepted on bicycles, optional payment plans, 
        inventory management, hiring and firing of employees, 
        creating accounts, and also showcases JUnit Testing, Log4J Logging, and Best Practices against SQL Injection Attacks. `,
      image: "https://live.staticflickr.com/65535/52008691617_d1914b4fce_n.jpg",
      link: "https://github.com/bluetigerlily/portfolio/tree/main/projects/BicycleStore",
    },
    {
      title: "React Jamming Spotify Playlist Application",
      subtitle: "React with API Integration",
      description:
        `React Web Application called Jamming which allows users to search for music using the Spotify API and create a custom playlist and also save it to their Spotify account.
          Showcases knowledge of React Components, Passing State Properties, and using Api's.`,
      image: "https://live.staticflickr.com/65535/52009983884_9ea580af4e_n.jpg",
      link: "https://github.com/bluetigerlily/project/tree/master",
    },
    {
      title: "Excursion - Travel Website",
      subtitle: "HTML & CSS",
      description:
        `Excursion is a Travel Website made using HTML and CSS.  Showcases knowledge and use of HTML, CSS, and hosting on Github Pages.  
        Also demonstates ability to follow a design document, as this was a project from Codeacademy.com.`,
      image: "https://live.staticflickr.com/65535/52009795018_4988047345_n.jpg",
      link: "https://github.com/bluetigerlily/portfoliopart2/tree/main/projects/Excursion",
    },
    

  ];

  export const codingskills = [
  
  ["Java", <FaJava />],
  ["HTML", <FaHtml5 />],
  ["CSS", <FaCss3 />],
  ["Javascript", <FaJs />],
  ["React", <FaReact />],
  ["SQL", <SiPostgresql />],
  ["Hibernate", <SiHibernate />],
  ["Python", <FaPython />],
  ["JUnit Testing", <SiJunit5 />],
  ["Log4J Data Logging", ],
  ["Cypress", <SiCypress />],
  ["AWS", <FaAws />],
  ["Firebase", <SiFirebase />], 
  ["JQuery", <SiJquery />],
  ["JDBC", ],
  ["APIs", <FaFoursquare />],
  ["Node.js", <FaNode />],
  ["Maven", <SiApachemaven />],
  ["GitHub", <FaGithub />]
 
];


  export default function Properties(props) {
    
    
    return (
      <div>
        <p>Title: {props.title}</p>
        <p>Count: {props.count}</p>
      </div>
    )
  }