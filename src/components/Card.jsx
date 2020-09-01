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
        <h2>{name}</h2>
        <a href={url} target="blank" style={{ color: "black" }}>
          {url}
        </a>
      </div>
    </animated.div>
  );
};

export default Card;

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#EBF2FA",
    borderRadius: "5px",
    width: "30rem",
    height: "20rem",
    boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.25);",
    display: "grid",
    padding: "1rem",
    color: "black",
  },
  media: {
    width: "30rem",
    height: "15rem",
    borderRadius: "5px",
  },
});
