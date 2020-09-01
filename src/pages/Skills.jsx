import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useSprings, animated } from "react-spring";

const Skills = () => {
  const classes = useStyles();
  const skillLevels = [
    { name: "Experienced", desc: "I am confident in what I am doing" },
    {
      name: "Intermediate",
      desc: "I have a fair understanding of what I'm doing",
    },
    { name: "Novice", desc: "I have no idea what I'm doing" },
  ];

  const [index, setIndex] = useState();

  const animateSkillLevels = useSprings(
    skillLevels.length,
    skillLevels.map((skillLevel, i) => ({
      transform: `scale(${i === index ? 1.1 : 1})`,
    }))
  );

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Skills</h1>
      <div className={classes.experienceContainer}>
        {animateSkillLevels.map((skillLevel, index) => {
          return (
            <animated.div
              style={{
                display: "grid",
                rowGap: "0.5rem",
                padding: "5rem",
                backgroundColor: "aliceblue",
                borderRadius: "5px",
                textAlign: "center",
                ...skillLevel,
              }}
              onMouseEnter={() => setIndex(index)}
              onMouseLeave={() => setIndex(null)}
            >
              <h2 style={{ fontSize: "30px" }}>{skillLevels[index].name}</h2>
              {/* <p>{skillLevel.desc}</p> */}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateRows: "min-content min-content",
    // rowGap: "1rem",
    minHeight: "100vh",
    paddingLeft: "6rem",
  },
  header: {
    paddingTop: "1rem",
    color: "var(--main-font-color)",
    // marginBottom: "5rem",
  },
  experienceContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyItems: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  },
});
