import React from "react";
import { FaCss3, FaHtml5, FaPython, FaReact, FaJs, FaJava, FaNode, FaGithub, FaFoursquare } from "react-icons/fa"
import { SiApachemaven, SiPostgresql, SiJunit5 } from "react-icons/si";

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
      target: '_blank',
    },
    {
      title: "React Jamming Spotify Playlist Application",
      subtitle: "React with Spotify API",
      description:
        `React Web Application called Jamming which allows users to search for music using the Spotify API and create a custom playlist and also save it to their Spotify account.
          Showcases knowledge of React Components, Passing State Properties, and using Api's.`,
      image: "https://live.staticflickr.com/65535/52009983884_9ea580af4e_n.jpg",
      link: "https://bespoke-paprenjak-7522cb.netlify.app/",
      target: '_blank',
    },
    {
      title: "Excursion - Travel Website",
      subtitle: "React",
      description:
        `Excursion is a Travel Website made using React, Material UI, React Router, and Axios.  Allows users to Login, Register, and Book a Travel Package. `,
      image: 'https://live.staticflickr.com/65535/52100546811_38e3d61658_n.jpg',
      link: "https://jocular-madeleine-0bc72c.netlify.app/",
      target: '_blank',
    },
    

  ];

  export const imagesArray = [
    {
      className: "imageone__img",
      alt: "Haley Moses full-stack developer portfolio website seeking employment",
      img: "https://live.staticflickr.com/65535/52010246990_e81c3828dc_z.jpg",
      message: "I'm a Full-Stack Developer and Mechanical Engineer."
    },
    {
      className: "imagetwo__img",
      alt: "Haley Moses has a Mechanical Engineering Degree",
      img: "https://live.staticflickr.com/65535/52101125909_d670bb23bd_n.jpg",
      message: `I have a Bachelor's of Science in Mechanical Engineering from the University of Texas at San Antonio.`
    }, 
    {
      className: "imagethree__img",
      alt: "Haley Moses full-stack developer's experience",
      img: "https://live.staticflickr.com/65535/52127588524_db36d61db8_w.jpg",
      message: `I have experience in Engineering, Problem Solving, Front & Back-end Development, Communication, Math, and Computer Aided Design.`
    }, 
    {
      className: "imagefour__img",
      alt: "Haley Moses is a Capybara Fanatic",
      img: "https://live.staticflickr.com/65535/52127332851_fe00b0eaca_n.jpg",
      message: `My favorite animal is the Capybara, the world's largest Rodent.` 
    },
    {
      className: "imagefive__img",
      alt: "What I'm interested in.",
      img: 'https://live.staticflickr.com/65535/52110617287_14ef38d9b0_z.jpg',
      message: `I want to find work in the Tech Industry where I can use my talents to solve problems, grow, and learn.`,
    },
  ]

  export const codingskills = [
  
  ["Java", <FaJava />],
  ["HTML", <FaHtml5 />],
  ["CSS", <FaCss3 />],
  ["Javascript", <FaJs />],
  ["React", <FaReact />],
  ["SQL", <SiPostgresql />],
  ["Python", <FaPython />],
  ["JUnit Testing", <SiJunit5 />],
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