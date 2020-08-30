import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { useSpring, animated, useSprings, useTrail } from "react-spring";
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
  const [iconHover, setIconHover] = useState(false);

  const [navHover, setNavHover] = useState(false);
  const [dialog, setDialog] = useState("");

  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [display, setDisplay] = useState("");

  const animateSideMessage = useSpring({
    transform: `translateY(${navHover ? 0 : 100}px)`,
    opacity: navHover ? 1 : 0,
    from: { opacity: 0, transform: `translateY(100px)` },
  });

  const logoAnimate = useSpring({
    to: {
      transform: `translateY(${clicked ? -100 : 0}px)`,
    },
  });

  const navigation = [
    { name: "Projects", dialog: "Projects", link: "/projects" },
    { name: "Bio", dialog: "Bio", link: "/bio" },
    { name: "Experience", dialog: "Experience", link: "/experience" },
  ];

  const animateNavigation = useTrail(navigation.length, {
    transform: `translateY(${clicked ? 0 : 100}px) scale(${clicked ? 1 : 0})`,
    opacity: clicked ? 1 : 0,
    onRest: () => {
      clicked
        ? setDisplay("grid")
        : setTimeout(() => {
            setDisplay("none");
          }, 500);
    },
  });

  const iconContainerAnimate = useSpring({
    transform: `scale(${iconContainerHover ? 1.2 : 1})`,
    backgroundColor: `${
      iconContainerHover ? "rgba(244, 91, 105,1)" : "rgba(244, 91, 105,0)"
    }`,
  });

  const [iconSprings, setIconSprings] = useSprings(icons.length, (index) => ({
    transform: `translateY(0px)`,
  }));

  return (
    <div className={classes.container}>
      <p className={classes.cornerText}>I Design Sometimes too...</p>
      <animated.p
        className={classes.sideMessage}
        style={{
          ...animateSideMessage,
        }}
      >
        {dialog}
      </animated.p>
      <animated.div
        className={classes.centerLogo}
        style={logoAnimate}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setClicked(!clicked)}
      >
        <img src={logoCenter} alt="logoCenter" />
        <text className={classes.logoText}>A</text>
      </animated.div>
      <nav className={classes.navigation}>
        {animateNavigation.map((navItem, index) => (
          <animated.div style={navItem}>
            <Link
              to={navigation[index].link}
              className={classes.link}
              onMouseEnter={() => {
                setNavHover(true);
                setDialog(navigation[index].dialog);
              }}
              onMouseLeave={() => setNavHover(false)}
            >
              <p className={classes.navItem}>{navigation[index].name}</p>
            </Link>
          </animated.div>
        ))}
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
    // gridColumns
    color: "var(--main-font-color)",
    fontFamily: "var(--main-font)",
  },
  centerLogo: {
    alignSelf: "flex-end",
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
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    columnGap: "5rem",
    overflow: "hidden",
  },
  navItem: {
    fontSize: "1.4rem",
    padding: "0.5rem",
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: "5px",
    justifySelf: "center",
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
  sideMessage: {
    position: "absolute",
    top: "50%",
    left: 100,
    padding: "1rem",
    fontSize: "1.4rem",
  },
  cornerText: {
    position: "absolute",
    bottom: 30,
    left: 100,
    padding: "1rem",
    fontSize: "1.4rem",
  },
  logoText: {
    position: "absolute",
    left: "50%",
    transform: `translate(-50%)`,
  },
});
