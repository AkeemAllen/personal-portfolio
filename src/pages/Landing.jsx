import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useSpring, animated } from "react-spring";
import github from "../assets/Contact Icons/github.svg";
import mail from "../assets/Contact Icons/mail.svg";
import twitter from "../assets/Contact Icons/twitter.svg";
import instagram from "../assets/Contact Icons/instagram.svg";
import logoCenter from "../assets/Logo Center.svg";
import logo from "../assets/Logo.svg";

const Landing = () => {
  const classes = useStyles();

  const [hover, setHover] = useState(false);

  const { transform } = useSpring({
    transform: `translateY(${hover ? -10 : 0}px)`,
  });

  return (
    <div className={classes.container}>
      <img
        src={logo}
        alt="logo"
        style={{ position: "absolute", top: 10, left: 30 }}
        width="50"
      />
      <p
        style={{
          position: "absolute",
          bottom: 30,
          left: 100,
          padding: "1rem",
          fontSize: "1.4rem",
        }}
      >
        I Design Sometimes too...
      </p>
      <div className={classes.centerLogo}>
        <img src={logoCenter} alt="logoCenter" />
        <text
          style={{
            position: "absolute",
            left: "50%",
            transform: `translate(-50%)`,
          }}
        >
          A
        </text>
      </div>
      <nav className={classes.navigation}>
        <animated.p
          className={classes.navItem}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          style={{ transform }}
        >
          Projects
        </animated.p>
        <p className={classes.navItem}>Bio</p>
        <p className={classes.navItem}>Experience</p>
      </nav>
      <div className={classes.contactIcons}>
        <img src={github} alt="github" className={classes.icon} />
        <img src={mail} alt="mail" className={classes.icon} />
        <img src={twitter} alt="twitter" className={classes.icon} />
        <img src={instagram} alt="instagram" className={classes.icon} />
      </div>
    </div>
  );
};

export default Landing;

const useStyles = createUseStyles({
  container: {
    height: "100vh",
    backgroundImage: "linear-gradient(180deg,#114B5F,#028090)",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    color: "var(--main-font-color)",
    fontFamily: "var(--main-font)",
  },
  centerLogo: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    width: "320px",
    height: "320px",
    backgroundColor: "#1D1D1D",
    borderRadius: "50%",
    color: "var(--main-color)",
    fontSize: "10rem",
    position: "relative",
  },
  navigation: {
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "5rem",
    top: "50%",
    right: 0,
    transform: "translate(40%, -50%) rotate(-90deg)",
  },
  navItem: {
    fontSize: "1.4rem",
  },
  contactIcons: {
    position: "absolute",
    bottom: 30,
    right: 100,
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    columnGap: "4rem",
    // backgroundColor: "var(--highlight-color)",
    padding: "1rem",
    borderRadius: "5px",
  },
  icon: {
    width: 22,
  },
});
