import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import { useSpring, animated, useSprings, useTrail } from "react-spring";
import github from "../assets/Contact Icons/github.svg";
import mail from "../assets/Contact Icons/mail.svg";
import twitter from "../assets/Contact Icons/twitter.svg";
import instagram from "../assets/Contact Icons/instagram.svg";
import linkedIn from "../assets/Contact Icons/linkedin.svg";
import logoCenter from "../assets/Logo Center.svg";
import { Link } from "react-router-dom";
import useOnClickOutside from "../helpers/useOnClickOutside";
import Backdrop from "../components/Backdrop";

const Landing = () => {
  const classes = useStyles();

  const ref = useRef();

  useOnClickOutside(ref, () => setClicked(false));

  const [iconContainerHover, setIconContainerHover] = useState(false);
  // const [iconHover, setIconHover] = useState(false);

  const [navHover, setNavHover] = useState(false);
  const [dialog, setDialog] = useState("");

  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const animateSideMessage = useSpring({
    transform: `translateY(${navHover ? 0 : 100}px)`,
    opacity: navHover ? 1 : 0,
    from: { opacity: 0, transform: `translateY(100px)` },
  });

  const { xyz, boxShadowOpacity } = useSpring({
    xyz: [clicked ? -200 : 0, hover ? 360 : 0, hover ? 1.1 : 1],
    boxShadowOpacity: hover ? 0.5 : 0,
  });

  const navigation = [
    {
      name: "Projects",
      dialog: "See The Projects I've Done",
      link: "/projects",
    },
    { name: "Bio", dialog: "Learn More About Me", link: "/bio" },
    // { name: "Skills", dialog: "See What I Can Do", link: "/my-skills" },
    // { name: "My Resume", dialog: "", link: "/experience" },
  ];

  const animateNavigation = useTrail(navigation.length, {
    transform: `translateY(${clicked ? 0 : 100}px) scale(${clicked ? 1 : 0})`,
    opacity: clicked ? 1 : 0,
  });

  const { backgroundOpacity } = useSpring({
    backgroundOpacity: iconContainerHover ? 1 : 0,
    // transform: 0,
    // opacity: 1,
    from: {
      // transform: 500,
      // opacity: 0,
    },
  });

  const icons = [
    { icon: mail, alt: "mail", url: "mailto:allenakeem8@gmail.com" },
    { icon: github, alt: "github", url: "https://github.com/AkeemAllen" },
    {
      icon: linkedIn,
      alt: "linkedIn",
      url: "https://www.linkedin.com/in/akeem-allen-796278162/",
    },
    {
      icon: twitter,
      alt: "twitter",
      url: "https://twitter.com/Akstar39306982/",
    },
    {
      icon: instagram,
      alt: "instagram",
      url: "https://www.instagram.com/beyond4321/",
    },
  ];

  const [iconIndex, setIconIndex] = useState();

  const iconSprings = useSprings(
    icons.length,
    icons.map((icon, i) => ({
      transform: `scale(${i === iconIndex ? 1.5 : 1})`,
      backgroundColor: `rgba(228, 253, 225, ${i === iconIndex ? 0.25 : 0})`,
      borderRadius: "5px",
      padding: "0.3rem",
    }))
  );

  return (
    <div className={classes.container}>
      <p className={classes.cornerText}>
        I value <strong>Simple, Sleek, Efficient</strong>
      </p>
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
        style={{
          transform: xyz.interpolate(
            (x, y, z) => `translateY(${x}px) rotate(${y}deg) scale(${z})`
          ),
          boxShadow: boxShadowOpacity.interpolate(
            (o) => `0px 0px 40px 20px rgba(0,0,0,${o})`
          ),
          cursor: "pointer",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setClicked(!clicked)}
      >
        <img src={logoCenter} alt="logoCenter" className={classes.media} />
        <text className={classes.logoText}>A</text>
      </animated.div>
      {clicked ? <Backdrop page="Landing" /> : null}
      <nav className={classes.navigation} ref={ref}>
        {animateNavigation.map((navItem, index) => (
          <animated.div
            style={
              index === 3
                ? { backgroundColor: "var(--highlight-color)", ...navItem }
                : navItem
            }
          >
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
        style={{
          // transform: transform.interpolate((t) => `translateX(${t}px)`),
          backgroundColor: backgroundOpacity.interpolate(
            (o) => `rgba(244, 91, 105,${o})`
          ),
          // opacity: opacity,
        }}
      >
        {iconSprings.map((prop, index) => {
          return (
            <animated.a
              href={icons[index].url}
              style={prop}
              className={classes.icon}
              target="blank"
            >
              <img
                onMouseEnter={() => setIconIndex(index)}
                onMouseLeave={() => setIconIndex(null)}
                key={index}
                src={icons[index].icon}
                alt={icons[index].alt}
              />
            </animated.a>
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
    display: "grid",
    justifyItems: "center",
    color: "var(--main-font-color)",
    fontFamily: "var(--main-font)",
    gridTemplateRows: "1fr 0.4fr 0.25fr",
    "@media (min-width: 1024px)": {},
  },
  centerLogo: {
    alignSelf: "flex-end",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1D1D1D",
    borderRadius: "50%",
    color: "var(--main-color)",
    position: "relative",
    fontSize: "3rem",
    "@media (min-width: 1024px)": {
      width: "320px",
      height: "320px",
      fontSize: "10rem",
    },
    width: "120px",
    height: "120px",
  },
  media: {
    "@media (min-width: 1024px)": {
      width: "13rem",
    },
    width: "5rem",
  },
  navigation: {
    display: "grid",
    zIndex: 1,
    gridTemplateRows: "min-content min-content",
    rowGap: "2rem",
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "1fr 1fr",
      alignItems: "flex-start",
      columnGap: "5rem",
      overflow: "hidden",
    },
  },
  navItem: {
    fontSize: "1.4rem",
    padding: "0.5rem",
    width: "10rem",
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: "5px",
    justifySelf: "center",
    display: "grid",
    justifyContent: "center",
  },
  contactIcons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    columnGap: "1rem",
    "@media (min-width: 1024px)": {
      position: "fixed",
      bottom: 30,
      right: 100,
      columnGap: "4rem",
      padding: "1rem",
      borderRadius: "5px",
      zIndex: "1",
    },
  },
  icon: {
    display: "flex",
    justifyContent: "center",
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
    fontSize: "1.6rem",
  },
  cornerText: {
    "@media (min-width: 1024px)": {
      position: "absolute",
      bottom: 30,
      left: 100,
      padding: "1rem",
      fontSize: "1.4rem",
      display: "block",
    },
    display: "none",
  },
  logoText: {
    position: "absolute",
    left: "50%",
    transform: `translate(-50%)`,
  },
});
