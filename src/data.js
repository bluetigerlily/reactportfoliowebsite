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
      link: "https://bespoke-paprenjak-7522cb.netlify.app/",
    },
    {
      title: "Excursion - Travel Website",
      subtitle: "HTML & CSS",
      description:
        `Excursion is a Travel Website made using HTML and CSS.  Showcases knowledge and use of HTML, CSS, and hosting on Github Pages.  
        Also demonstates ability to follow a design document, as this was a project from Codeacademy.com.`,
      image: "https://live.staticflickr.com/65535/52009795018_4988047345_n.jpg",
      link: "https://lustrous-sfogliatella-351fd1.netlify.app/",
    },
    

  ];

  export const imagesArray = [
    {
      className: "image__img",
      alt: "Haley Moses full-stack developer portfolio website seeking employment",
      img: "https://live.staticflickr.com/65535/52010246990_c9d29d50b5_c.jpg?compress=1&resize=355x226&vertical=top",
      message: "I'm a self taught full-stack developer"
    },
    {
      className: "image__img",
      alt: "Haley Moses has a Mechanical Engineering Degree",
      img: "https://d12oja0ew7x0i8.cloudfront.net/image-handler/ts/20210614094458/ri/1000/src/images/Article_Images/ImageForArticle_20492_16236782958233468.jpg?compress=1&resize=355x226&vertical=top",
      message: `I have a Bachelor's of Science in Mechanical Engineering.`
    }, 
    {
      className: "image__img",
      alt: "Haley Moses full-stack developer's exerpience",
      img: "https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png?compress=1&resize=355x226&vertical=top",
      message: `What I lack in experience. I make up with in Passion, Drive, and Creativity.`
    }, 
    {
      className: "image__img",
      alt: "Haley Moses is a Capybara Fanatic",
      img: "https://p0.pikist.com/photos/875/214/capybara-faunapark-animal-park-rodent-mammal-fur-hairy-fauna-caviidae-thumbnail.jpg",
      message: `Capybaras are my favorite animal!` 
    },
  ]

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