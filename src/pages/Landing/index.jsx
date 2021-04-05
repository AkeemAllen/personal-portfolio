import React, { useState, useRef } from "react";
import { useSpring, animated, useSprings, useTrail } from "react-spring";
import github from "../../assets/Contact Icons/github.svg";
import mail from "../../assets/Contact Icons/mail.svg";
import twitter from "../../assets/Contact Icons/twitter.svg";
import instagram from "../../assets/Contact Icons/instagram.svg";
import linkedIn from "../../assets/Contact Icons/linkedin.svg";
import logoCenter from "../../assets/Logo Center.svg";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../helpers/useOnClickOutside";
import Backdrop from "../../components/Backdrop";
import "./index.scss";

const Landing = () => {
  const ref = useRef();

  useOnClickOutside(ref, () => setClicked(false));

  const [iconContainerHover, setIconContainerHover] = useState(false);

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
    <div className={"landing-page"}>
      <p className={"landing-page__corner-text"}>
        I value <strong>Simple, Sleek, Efficient</strong>
      </p>
      <animated.p
        className={"landing-page__side-message"}
        style={{
          ...animateSideMessage,
        }}
      >
        {dialog}
      </animated.p>
      <animated.div
        className={"landing-page__center-logo"}
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
        <img
          src={logoCenter}
          alt="logoCenter"
          className={"landing-page__center-logo__media"}
        />
        <text className={"landing-page__center-logo__logo-text"}>A</text>
      </animated.div>
      {clicked ? <Backdrop page="Landing" /> : null}
      <nav className={"landing-page__navigation"} ref={ref}>
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
              style={{
                textDecoration: "none",
                color: "var(--main-font-color)",
              }}
              onMouseEnter={() => {
                setNavHover(true);
                setDialog(navigation[index].dialog);
              }}
              onMouseLeave={() => setNavHover(false)}
            >
              <p className={"landing-page__navigation__nav-item"}>
                {navigation[index].name}
              </p>
            </Link>
          </animated.div>
        ))}
      </nav>
      <animated.div
        className={"landing-page__contact-icons"}
        onMouseEnter={() => setIconContainerHover(true)}
        onMouseLeave={() => setIconContainerHover(false)}
        style={{
          backgroundColor: backgroundOpacity.interpolate(
            (o) => `rgba(244, 91, 105,${o})`
          ),
        }}
      >
        {iconSprings.map((prop, index) => {
          return (
            <animated.a
              href={icons[index].url}
              style={prop}
              className={"landing-page__contact-icons__icon"}
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
