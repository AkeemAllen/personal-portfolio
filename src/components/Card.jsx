import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { animated, useSpring } from "react-spring";

const Card = ({ screenshot, name, url, onClick }) => {
  const [hover, setHover] = useState(false);

  const { transform } = useSpring({
    transform: hover ? 1.1 : 1,
  });

  const classes = useStyles();
  return (
    <animated.div
      className={classes.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ transform: transform.interpolate((s) => `scale(${s})`) }}
    >
      <img src={screenshot} alt="website" className={classes.media} />
      <div
        style={{
          marginLeft: "1rem",
          display: "grid",
          // color: "var(--main-font-color)",
        }}
      >
        <h2 className={classes.projectName}>{name}</h2>
        <a href={url} target="blank" className={classes.projectUri}>
          {url}
        </a>
      </div>
    </animated.div>
  );
};

export default Card;

const useStyles = createUseStyles({
  container: {
    "@media (min-width: 1024px)": {
      width: "30rem",
      height: "20rem",
    },
    backgroundColor: "#EBF2FA",
    borderRadius: "5px",
    boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.25);",
    display: "grid",
    padding: "1rem",
    color: "black",
    width: "15rem",
    height: "15rem",
  },
  projectName: {
    fontSize: "1.1rem",
    "@media (min-width: 1024px)": {
      fontSize: "1.6rem",
    },
  },
  projectUri: {
    fontSize: "0.8rem",
    "@media (min-width: 1024px)": {
      fontSize: "1rem",
    },
  },
  media: {
    "@media (min-width: 1024px)": {
      width: "30rem",
      height: "15rem",
    },
    display: "block",
    width: "15rem",
    height: "10rem",
    borderRadius: "5px",
    objectFit: "cover",
  },
});
