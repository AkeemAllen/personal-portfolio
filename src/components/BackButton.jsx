import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const BackButton = () => {
  const [hover, setHover] = useState(false);

  const { transform, x } = useSpring({
    x: hover ? 1.1 : 1,
  });
  return (
    <Link
      to="/"
      style={{ position: "fixed", bottom: 10, right: 20 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <animated.button
        style={{
          padding: "1rem 4rem",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "var(--main-color)",
          fontSize: "1.2rem",
          color: "var(--main-font-color)",
          fontWeight: "bold",
          transform: x.interpolate((x) => `scale(${x})`),
          cursor: "pointer",
        }}
      >
        Back
      </animated.button>
    </Link>
  );
};

export default BackButton;
