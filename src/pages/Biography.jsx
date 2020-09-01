import React from "react";
import { createUseStyles } from "react-jss";

const Biography = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Biography</h1>
    </div>
  );
};

export default Biography;

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateRows: "min-content min-content",
    fontFamily: "Share Tech",
    minHeight: "100vh",
  },
  header: {
    paddingTop: "1rem",
    paddingLeft: "6rem",
    color: "var(--main-font-color)",
    marginBottom: "5rem",
  },
});
