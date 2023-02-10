import React from "react";
import { FaCss3, FaHtml5, FaPython, FaReact, FaJs, FaJava, FaNode, FaGithub, FaFoursquare } from "react-icons/fa"
import { SiApachemaven, SiPostgresql, SiJunit5 } from "react-icons/si";
import Capybara from './assests/capybara.jpg';
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
      title: "Capybara Website",
      subtitle: "React",
      description:
        `The Capybara Website is Capybara Meme Fan Website made using React and React Router which uses conditional rendering and state management throughout. `,
      image: Capybara,
      link: "https://clinquant-palmier-c67303.netlify.app/",
      target: '_blank',
    },
    

  ];

  export const imagesArray = [
 
    {
      className: "imageone__img",
      alt: "Haley Moses full-stack developer portfolio website seeking employment",
      img: "https://live.staticflickr.com/65535/52428708880_536f2cc12f_m.jpg",
      message: "I'm a Full-Stack Developer and Mechanical Engineer.",
      opacity: 1,
      id: 's1',
    },
    {
      className: "imagetwo__img",
      alt: "Haley Moses has a Mechanical Engineering Degree",
      img: "https://live.staticflickr.com/65535/52427774152_71889c016c_m.jpg",
      message: `I graduated from the University of Texas at San Antonio.`,
      opacity: 1,
      id: 's2',
    }, 
    {
      className: "imagethree__img",
      alt: "Haley Moses full-stack developer's experience",
      img: "https://live.staticflickr.com/65535/52680752648_75aa584dc2_o.jpg",
      message: `I have experience in Engineering, Problem Solving, Front & Back-end Development.`,
      opacity: 1,
      id: 's3',
    }, 
    {
      className: "imagefour__img",
      alt: "Haley Moses is a Capybara Fanatic",
      img: "https://live.staticflickr.com/65535/52428265986_0b7f1f0dc9_m.jpg",
      message: `My favorite animal is the Capybara, the world's largest Rodent.`,
      opacity: .3,
      func: 'handleClickLeft',
      cursor: 'pointer',
      id: 's4',
    },
    {
      className: "imagefive__img",
      alt: "What I'm interested in.",
      img: "https://live.staticflickr.com/65535/52428725005_ee3c99215e_m.jpg",
      message: `I want to find work in the Tech Industry.`,
      opacity: .3,
      func: 'handleClickRight',
      cursor: 'pointer',
      id: 's5',
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


