import React from "react";
import { createUseStyles } from "react-jss";
import { useSpring, animated } from "react-spring";

const DetailedView = () => {
  const classes = useStyles();
  //   const {transform} = useSpring({
  //       from:
  //   })
  return <div className={classes.container}>DetailedView</div>;
};

export default DetailedView;

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    zIndex: 500,
    backgroundColor: "white",
    width: "25rem",
  },
});
