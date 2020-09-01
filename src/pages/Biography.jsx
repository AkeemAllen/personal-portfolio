import React from "react";
import { createUseStyles } from "react-jss";
import profilePhoto from "../assets/photos/Simplistic Design.png";

const Biography = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Biography</h1>
      <div className={classes.content}>
        <img src={profilePhoto} alt="profile" className={classes.media} />
        <div
          style={{
            display: "grid",
            padding: "2rem",
            backgroundColor: "aliceblue",
            borderRadius: "20px",
            maxWidth: "40vw",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
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
  media: {
    width: "320px",
    height: "320px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  content: {
    display: "grid",
    rowGap: "3rem",
    // justifyContent: "center",
    justifyItems: "center",
  },
});
