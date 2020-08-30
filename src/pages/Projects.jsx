import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import Card from "../components/Card";
import websitePhoto from "../assets/photos/Example Website 2.png";
import { useSpring, animated } from "react-spring";
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
    },
  ];

  const { transform, opacity, display } = useSpring({
    // display: detailedViewOpen ? "" : "none",
    transform: `translateX(${detailedViewOpen ? -150 : 500}px)`,
    opacity: detailedViewOpen ? 1 : 0,
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Projects</h1>
      {projects.map((project, index) => {
        return (
          <Card
            screenshot={project.screenshot}
            name={project.name}
            url={project.url}
            onClick={() => {
              setDetailedViewOpen(true);
              setIndex(index);
            }}
          />
        );
      })}
      {detailedViewOpen ? <Backdrop /> : null}
      <animated.div
        ref={ref}
        style={{ transform, opacity, display }}
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
    rowGap: "5rem",
    paddingLeft: "6rem",
    fontFamily: "Share Tech",
  },
  header: {
    paddingTop: "1rem",
  },
  detailedView: {
    position: "absolute",
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
