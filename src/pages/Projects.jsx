import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import Card from "../components/Card";
import portfolio from "../assets/photos/Portfolio.png";
import blog from "../assets/photos/Blog.png";
import alfheim from "../assets/photos/Alfheim.png";
import { useSpring, animated, useTrail } from "react-spring";
import useOnClickOutside from "../helpers/useOnClickOutside";
import Backdrop from "../components/Backdrop";
import BackButton from "../components/BackButton";

const Projects = () => {
  const ref = useRef();
  const classes = useStyles();

  const [detailedViewOpen, setDetailedViewOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useOnClickOutside(ref, () => setDetailedViewOpen(false));

  const projects = [
    {
      screenshot: portfolio,
      name: "Personal Portfolio",
      url: "https://akeem-allen.netlify.app/",
      description: `
                      This website serves as a portfolio of my best pieces of work. 
                      It also serves as a testament to the growth of my skills as it took me less than a week to go
                      from design and code implementation to delivery.
                      I am truly proud of this creation and it will serve as a test bench for many future ideas.
                    `,
      technologiesUsed: [
        "React",
        "Figma (For Designs)",
        "Netlify (For Hosting)",
        "Git",
      ],
      github: "https://github.com/AkeemAllen/personal-portfolio",
    },
    {
      screenshot: blog,
      name: "Personal Blog",
      url: "https://akeem-blog.netlify.app/",
      description: `
        During one summer vacation, when I had a lot of free time and was getting into reading,
        I decided to try my hand at blogging. I also realized that it might be a great
        way to build my web design skills. Essentially killing two birds with one stone.

        In building this website I learned a great deal about web hosting, website design,
        SEO, headless CMSs and static sites. This project holds a special place in my heart as it helped
        catapult my skills and confidence in my skills to a whole new level.
      `,
      technologiesUsed: [
        "React",
        "Gatsby",
        "Git",
        "Contentful (headless CMS)",
        "Linode (Web Hosting)",
        "Graphql",
        "Express",
      ],
      github: "https://github.com/AkeemAllen/what-i-learned",
    },
    {
      screenshot: alfheim,
      name: "Alfheim(In Development)",
      url: "https://alfheim.netlify.app/",
      description: `
      (In development) Having gone through the struggle of searching for a room to
      rent as a college student in Jamaica, I understand the issue. So I decided to try building a solution.

      This is one of the larger projects I have tackled on my own. It's meant to connect landlords in a
      specific geographical region (Kingston, Jamaica) to student rentors who are looking for decent
      rooms for their college tenure. I believe there is room for later expansion in terms of scale and use
      but there are many kinks I have to work out first.
      `,
      technologiesUsed: [
        "React",
        "GraphQl",
        "Git",
        "Express",
        "Apollo Studio and Client(Api Management)",
      ],
      github: "https://github.com/AkeemAllen/project-alfheim",
    },
  ];

  const { transform, opacity } = useSpring({
    transform: detailedViewOpen
      ? window.innerWidth === 1024
        ? -150
        : -10
      : 500,
    opacity: detailedViewOpen ? 1 : 0,
  });

  const animateProjects = useTrail(projects.length, {
    transform: `translateY(0px) scale(1)`,
    opacity: 1,
    from: {
      transform: `translateY(100px) scale(0)`,
      opacity: 0,
    },
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Projects</h1>
      <div className={classes.projectsContainer}>
        {animateProjects.map((project, index) => {
          return (
            <animated.div style={project}>
              <Card
                screenshot={projects[index].screenshot}
                name={projects[index].name}
                url={projects[index].url}
                onClick={() => {
                  setDetailedViewOpen(true);
                  setIndex(index);
                }}
              />
            </animated.div>
          );
        })}
      </div>
      {detailedViewOpen ? <Backdrop /> : null}
      <animated.div
        ref={ref}
        style={{
          transform: transform.interpolate((t) => `translateX(${t}px)`),
          opacity: opacity.interpolate((o) => o),
        }}
        className={classes.detailedView}
      >
        <h1>{projects[index].name}</h1>
        <a href={projects[index].url} target="blank">
          {projects[index].url}
        </a>
        <img
          src={projects[index].screenshot}
          alt="screenshot"
          className={classes.media}
        />
        <h3>Source Code</h3>
        <a href={projects[index].github} target="blank">
          {projects[index].github}
        </a>
        <h3>Description</h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "2rem",
            fontFamily: "Oxygen",
          }}
        >
          {projects[index].description}
        </p>
        <h3>Technologies Used</h3>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "2rem",
            fontFamily: "Oxygen",
            whiteSpace: "pre-line",
          }}
        >
          {projects[index].technologiesUsed.map((tech) => `${tech}, `)}
        </p>
      </animated.div>
      <BackButton />
    </div>
  );
};

export default Projects;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateRows: "1fr 10fr",
    fontFamily: "Share Tech",
    minHeight: "100vh",
  },
  header: {
    paddingLeft: "6rem",
    paddingTop: "1rem",
    color: "var(--main-font-color)",
  },
  detailedView: {
    position: "fixed",
    zIndex: 1,
    width: "80vw",
    padding: "0.5rem",
    fontSize: "0.8rem",
    backgroundColor: "white",
    boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.25);",
    marginTop: "2rem",
    right: 0,
    display: "grid",
    gridAutoRows: "min-content",
    borderRadius: "5px",
    rowGap: "0.5rem",
    // overflow: "auto",
    "@media (min-width: 1024px)": {
      fontSize: "1rem",
      height: "90vh",
      width: "30rem",
      rowGap: "1rem",
      padding: "1rem",
      right: 0,
    },
  },
  media: {
    width: "15rem",
    height: "10rem",
    borderRadius: "5px",
    objectFit: "cover",
    "@media (min-width: 1024px)": {
      width: "30rem",
      height: "15rem",
    },
  },
  projectsContainer: {
    display: "grid",
    gridTemplateColumns: "min-content",
    justifyContent: "center",
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "min-content min-content min-content",
    },
    columnGap: "3rem",
    paddingTop: "1.5rem",
    rowGap: "2rem",
  },
});
