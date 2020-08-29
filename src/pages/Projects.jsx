import React, { useState } from "react";

const Projects = () => {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          console.log(clicked);
          setClicked(!clicked);
        }}
        onMouseEnter={() => {
          console.log("entered");
          setHover(true);
        }}
        onMouseLeave={() => {
          console.log("left");
          setHover(false);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Projects;
