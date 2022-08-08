import {
  animated,
  useSpring,
  easings,
  useSpringRef,
  useChain,
  useTransition,
} from "react-spring";
import styles from "./HeartbeatContainer.module.css";

export default function HeartbeatContainer() {
  const ballRef = useSpringRef();
  const menuRef = useSpringRef();

  const ballAnimation = useSpring({
    to: [
      { top: "50%", left: 285, height: 125, width: 125 },
      { top: "25%", left: 385, height: 96, width: 96 },
      { top: "75%", left: 485, height: 84, width: 84 },
      { top: "50%", left: 500, height: 75, width: 75 },
      { top: "80%", left: 550, height: 60, width: 60 },
      { top: "50%", left: 650, height: 48, width: 48 },
      { top: "35%", left: 1050, height: 24, width: 24 },
    ],
    from: {
      top: "50%",
      left: 285,
      height: 125,
      width: 125,
    },
    config: {
      easing: easings.easeInOutQuart,
    },
    ref: ballRef,
  });

  const menuAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    ref: menuRef,
  });

  useChain([ballRef, menuRef]);

  return (
    <animated.div className={styles.container}>
      <animated.div className={styles.ball} style={ballAnimation} />
      <animated.div className={styles.menuBallContainer} style={menuAnimation}>
        <div className={styles.menuBall} />
        <div className={styles.menuBall} />
        <div className={styles.menuBall} />
        <div className={styles.menuBall} />
        <div className={styles.menuBall} />
      </animated.div>
    </animated.div>
  );
}
