import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import Card from "../components/Card";
import websitePhoto from "../assets/photos/Example Website 2.png";
import websitePhoto2 from "../assets/photos/Example Website 3.png";
import { useSpring, animated, useTrail } from "react-spring";
import useOnClickOutside from "../helpers/useOnClickOutside";
import Backdrop from "../components/Backdrop";

const Projects = () => {
  const ref = useRef();
  const classes = useStyles();

  const [detailedViewOpen, setDetailedViewOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useOnClickOutside(ref, () => setDetailedViewOpen(false));

  const projects = [
    {
      screenshot: websitePhoto,
      name: "Personal Portfolio",
      url: "https://akeemallen.com",
      description: `A portfolio meant to show off my abilities and achievements`,
      technologiesUsed: ["React", "Figma(For Designs)"],
    },
    {
      screenshot: websitePhoto2,
      name: "Personal Blog",
      url: "https://what-i-learned-mp7em1d6l.now.sh/",
      description: `My Personal Blog Site`,
      technologiesUsed: ["React", "Gatsby", "Contentful"],
    },
  ];

  const { transform, opacity } = useSpring({
    transform: detailedViewOpen ? -150 : 500,
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "min-content min-content min-content",
          columnGap: "3rem",
          paddingTop: "1.5rem",
          paddingLeft: "3rem",
          rowGap: "2rem",
        }}
      >
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
        <a href={projects[index].url}>{projects[index].url}</a>
        <img
          src={projects[index].screenshot}
          alt="screenshot"
          className={classes.media}
        />
        <p style={{ fontSize: "1.2rem" }}>{projects[index].description}</p>
      </animated.div>
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
    marginTop: "2rem",
    height: "90vh",
    width: "30rem",
    padding: "1rem",
    backgroundColor: "white",
    boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.25);",
    right: 0,
    borderRadius: "5px",
    display: "grid",
    gridAutoRows: "min-content",
    rowGap: "1rem",
    zIndex: 1,
  },
  media: {
    width: "30rem",
    height: "15rem",
    borderRadius: "5px",
  },
});
