import { animated } from "react-spring";
import styles from "./styles.module.css";

export default function Circle({ offset = [null, null], size = 96, style }) {
  return <animated.div className={styles.container} style={{ ...style }} />;
}
