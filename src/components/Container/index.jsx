import { animated, useSpring, easings } from "react-spring";
import Circle from "../Circle";
import styles from "./styles.module.css";

export default function Container() {
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
  return (
    <div className={styles.container}>
      <animated.div className={styles.circlesContainer}>
        <h1>This is Text</h1>
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
