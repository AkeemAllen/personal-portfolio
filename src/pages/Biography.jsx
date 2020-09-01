import React from "react";
import { createUseStyles } from "react-jss";
import profilePhoto from "../assets/photos/Simplistic Design.png";
import { useSpring, animated, config } from "react-spring";
import BackButton from "../components/BackButton";

const Biography = () => {
  const classes = useStyles();
  const animatedPhoto = useSpring({
    from: { transform: `translateY(300px) scale(0)`, opacity: 0 },
    to: { transform: `translateY(0px) scale(1)`, opacity: 1 },
    config: config.gentle,
  });
  const animateBody = useSpring({
    from: { transform: `translateY(300px)`, opacity: 0 },
    to: { transform: `translateY(0px)`, opacity: 1 },
    // config: { mass: 9, tension: 200, friction: 40 },
    config: config.gentle,
  });
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Biography</h1>
      <div className={classes.content}>
        <animated.img
          style={animatedPhoto}
          src={profilePhoto}
          alt="profile"
          className={classes.media}
        />
        <animated.div
          className={classes.bio}
          style={{
            ...animateBody,
          }}
        >
          Ok. So here's where I tell you a bit about myself. Similar my wording
          on the Landing Page, I'll try to keep it Simple.
          <h3>TLDR;</h3>
          I live by the mantra Simple, Sleek and Efficient. I like going for
          walks after work sessions. I also enjoy playing the guitar.
          <br />
          <br />
          <h3>Work Flow and History</h3>
          I work by the mantra Simple, Sleek and Efficient. I believe that smart
          people are the ones who are able to remove the complexities of life
          and reduce it to its BARE NECESSITIES while achieving greater
          efficiency. They understand that complexity isn't planned but creeps
          in as we add more tasks to our workflow. Refocusing on one's end goal
          will allow one to remove waste and clutter from the worlflow and bring
          about greater efficiency. This is the model I aim to work by.
          <br />
          <br />
          I should also point out that I am a very results-oriented person. I
          believe that individuals should be rewarded based on the results they
          produce rather than how long they spend sitting at a desk pretending
          to work. That is, given that the time frame and price are fair for the
          work at hand.
          <br />
          <br />
          Moving on from that, I consider myself to be a fairly driven person.
          Having a mother who is not afraid to go after what she wants, and a
          father who understands the value of teaching his kids to stand on
          their own, it was only natural that I inherited some superpowers from
          this super couple. These instilled and observed traits would guide me
          towards improving my abilities little by little over time.
          <br />
          <br />I managed to develop alot of my skills while in college
          (University of Technology, Jamaica). Not from the actual classes
          however. But from surrounding myself with like-minded individuals
          eager to learn and grow. These people became my mentors, rivals,
          partners and friends. Most of us worked for a group called the Sapna
          Initiative where up and coming engineers and developers like me can
          work on and gain experience from real projects. I cannot even begin to
          describe how helpful this has been for my long term growth. I am truly
          grateful for this initiative.
          <br />
          <br />
          <h3>Hobbies and Pleasures</h3>
          Well that covers my work values and history, so I'll mention a bit of
          what I do for fun. I LOVE walking. Seems pretty plain, I know. But
          after a good session of hammering out code or being hammered by my own
          code I like to rejuvenate myself through this light exercise. Another
          hobby of mine is playing the guitar. I wouldn't consider myself a
          rockstar programmer but I definitely like the feeling of plucking
          strings when I run into a headscratcher of a problem.
          <br />
          <br />I said I was gonna keep it simple but I feel like I rambled a
          bit. I'm guessing a tldr might be in order. Either way, thanks for
          being interested in me. If you're a stranger I hope to meet you one
          day 👋
        </animated.div>
        <BackButton />
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
  bio: {
    display: "grid",
    padding: "2rem",
    backgroundColor: "aliceblue",
    borderRadius: "10px",
    maxWidth: "70vw",
    fontFamily: "Oxygen",
    lineHeight: "2rem",
    marginBottom: "3rem",
    fontSize: "0.9rem",
    "@media (min-width: 1024px)": {
      maxWidth: "40vw",
      borderRadius: "20px",
      fontSize: "1rem",
    },
  },
  media: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50%",
    "@media (min-width: 1024px)": {
      width: "320px",
      height: "320px",
    },
  },
  content: {
    display: "grid",
    rowGap: "3rem",
    justifyItems: "center",
  },
});
