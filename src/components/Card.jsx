import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { animated, useSpring } from "react-spring";

const Card = ({ screenshot, name, url, onClick }) => {
  const [hover, setHover] = useState(false);

  const { transform } = useSpring({
    transform: `scale(${hover ? 1.1 : 1})`,
  });

  const classes = useStyles();
  return (
    <animated.div
      className={classes.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ transform }}
    >
      <img src={screenshot} alt="website" className={classes.media} />
      <div
        style={{
          marginLeft: "1rem",
          display: "grid",
          color: "var(--main-font-color)",
        }}
      >
        <h2>{name}</h2>
        <a href="google.com" style={{ color: "var(--main-font-color)" }}>
          {url}
        </a>
      </div>
    </animated.div>
  );
};

export default Card;

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#456990",
    borderRadius: "5px",
    width: "30rem",
    height: "20rem",
    boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.25);",
    display: "grid",
    padding: "1rem",
  },
  media: {
    width: "30rem",
    height: "15rem",
    borderRadius: "5px",
  },
});
