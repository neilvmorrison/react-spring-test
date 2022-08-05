import { animated, useSpring, easings } from "react-spring";
import Circle from "../Circle";
import styles from "./styles.module.css";

export default function Container() {
  const containerStyles = useSpring({
    loop: { reverse: true },
    to: {
      transform: "rotate(45deg) translate(225px, 0px)",
      height: 48,
      width: 48,
    },
    from: {
      transform: "rotate(0deg) translate(-625px, 80px)",
      height: 265,
      width: 256,
    },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  const otherContainerStyles = useSpring({
    loop: { reverse: true },
    to: { transform: "rotate(90deg) translateX(225px)" },
    from: { transform: "rotate(0deg) translateX(-525px)" },
    config: {
      duration: 6000,
      easing: easings.easeInOutQuart,
    },
  });
  return (
    <div className={styles.container}>
      <animated.div className={styles.circlesContainer}>
        <h1>Get Fucked, Bud</h1>
        <Circle style={containerStyles} />
        <Circle style={otherContainerStyles} />
        {/* <Circle
          size={48}
          style={{ transform: "rotate(90deg) translateX(225px)" }}
        />
        <Circle
          size={48}
          style={{ transform: "rotate(135deg) translateX(225px)" }}
        />
        <Circle
          size={48}
          style={{ transform: "rotate(180deg) translateX(225px)" }}
        />
        <Circle
          size={48}
          style={{ transform: "rotate(225deg) translateX(225px)" }}
        />
        <Circle
          size={48}
          style={{ transform: "rotate(270deg) translateX(225px)" }}
        />
        <Circle
          size={48}
          style={{ transform: "rotate(315deg) translateX(225px)" }}
        /> */}
      </animated.div>
    </div>
  );
}
