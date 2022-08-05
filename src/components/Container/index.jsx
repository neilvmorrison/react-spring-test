import { Children, useEffect, useState } from "react";
import { animated, useSpring, easings, useTrail } from "react-spring";
import Circle from "../Circle";
import styles from "./styles.module.css";

const TextTrail = ({ children }) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    to: {
      color: "white",
      textShadow:
        "-0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff",
    },
    from: {
      color: "black",
      textShadow:
        "-0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #fff",
    },
    config: {
      duration: 850,
    },
  });
  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <animated.div
          style={{ fontSize: "2.25rem", display: "block", ...style }}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default function Container() {
  const [textSlide, setTextSlide] = useState(0);
  const circle1 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(315deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(225deg) translate(725px, -450px)",
      height: 265,
      width: 256,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const circle2 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(360deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(270deg) translate(225px, -380px)",
      height: 96,
      width: 96,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const circle3 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(405deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(315deg) translate(225px, -280px)",
      height: 125,
      width: 125,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const circle4 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(450deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(360deg) translate(225px, -280px)",
      height: 175,
      width: 175,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const circle5 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(490deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(405deg) translate(325px, -580px)",
      height: 105,
      width: 105,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const circle6 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(535deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(445deg) translate(225px, -480px)",
      height: 315,
      width: 315,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const circle7 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(580deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(490deg) translate(125px, -280px)",
      height: 64,
      width: 64,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const circle8 = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(625deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(535deg) translate(325px, -180px)",
      height: 225,
      width: 225,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });

  const textContainer = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 10000,
      easing: easings.easeInOutQuart,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setTextSlide(1);
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <animated.div className={styles.circlesContainer}>
        {textSlide === 0 && (
          <TextTrail>
            <span>Confidence </span>
            <span>in </span>
            <span>your </span>
            <span>pocket </span>
          </TextTrail>
        )}
        {textSlide === 1 && (
          <animated.div style={textContainer}>
            <h1>For those who want access instead of advice</h1>
          </animated.div>
        )}
        <Circle style={circle1} />
        <Circle style={circle2} />
        <Circle style={circle3} />
        <Circle style={circle4} />
        <Circle style={circle5} />
        <Circle style={circle6} />
        <Circle style={circle7} />
        <Circle style={circle8} />
      </animated.div>
    </div>
  );
}
