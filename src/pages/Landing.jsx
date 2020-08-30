import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useSpring, animated, useSprings } from "react-spring";
import github from "../assets/Contact Icons/github.svg";
import mail from "../assets/Contact Icons/mail.svg";
import twitter from "../assets/Contact Icons/twitter.svg";
import instagram from "../assets/Contact Icons/instagram.svg";
import logoCenter from "../assets/Logo Center.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  const classes = useStyles();

  const icons = [
    { icon: mail, alt: "mail", transform: 0 },
    { icon: github, alt: "github", transform: 0 },
    { icon: twitter, alt: "twitter", transform: 0 },
    { icon: instagram, alt: "instagram", transform: 0 },
  ];

  const [iconContainerHover, setIconContainerHover] = useState(false);
  // const [iconHover, setIconHover] = useState(false);

  const iconContainerAnimate = useSpring({
    transform: `scale(${iconContainerHover ? 1.2 : 1})`,
    backgroundColor: `${
      iconContainerHover ? "rgba(244, 91, 105,1)" : "rgba(244, 91, 105,0)"
    }`,
  });

  const [iconSprings, setIconSprings] = useSprings(icons.length, (index) => ({
    transform: `translateY(${index ? 0 : 0}px)`,
  }));

  return (
    <div className={classes.container}>
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
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: 100,
          padding: "1rem",
          fontSize: "1.4rem",
        }}
      >
        Projects
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
        <Link to="/projects" className={classes.link}>
          <animated.p className={classes.navItem}>Projects</animated.p>
        </Link>
        <Link to="/bio" className={classes.link}>
          <p className={classes.navItem}>Bio</p>
        </Link>
        <Link to="/experience" className={classes.link}>
          <p className={classes.navItem}>Experience</p>
        </Link>
      </nav>
      <animated.div
        className={classes.contactIcons}
        onMouseEnter={() => setIconContainerHover(true)}
        onMouseLeave={() => setIconContainerHover(false)}
        style={iconContainerAnimate}
      >
        {iconSprings.map((props, index) => {
          return (
            <animated.img
              onMouseEnter={() =>
                setIconSprings((i) => ({
                  transform: `translateY(${index ? -10 : 0}px)`,
                }))
              }
              onMouseLeave={() =>
                setIconSprings((i) => ({ transform: `translateY(0px)` }))
              }
              key={index}
              src={icons[index].icon}
              alt={icons[index].alt}
              className={classes.icon}
              style={props}
            />
          );
        })}
      </animated.div>
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
  link: {
    textDecoration: "none",
    color: "var(--main-font-color)",
  },
});
