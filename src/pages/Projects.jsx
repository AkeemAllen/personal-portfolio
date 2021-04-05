import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import Card from "../components/Card";
import { useSpring, animated, useTrail } from "react-spring";
import useOnClickOutside from "../helpers/useOnClickOutside";
import Backdrop from "../components/Backdrop";
import BackButton from "../components/BackButton";
import projects from "../projects.json";

const Projects = () => {
  const ref = useRef();
  const classes = useStyles();

  const [detailedViewOpen, setDetailedViewOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useOnClickOutside(ref, () => setDetailedViewOpen(false));

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
