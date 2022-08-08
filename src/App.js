import "./App.css";
import Container from "./components/Container";
import FirstAnimation from "./components/FirstAnimation";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";
import HeartbeatContainer from "./components/HeartbeatContainer";

function App() {
  const firstAnimation = useSpring({
    from: { opacity: 1, display: "flex" },
    to: { opacity: 0, display: "none" },
    delay: 4000,
  });

  const [show, setShow] = useState(false);
  const [slide, setSlide] = useState(0);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const delaySecondAnimation = async () => {
    await delay(4000);
    setSlide(1);
  };

  const delayThirdAnimation = async () => {
    await delay(12000);
    setSlide(2);
  };

  useEffect(() => {
    delaySecondAnimation();
    delayThirdAnimation();
  }, []);

  return (
    <>
      {slide === 0 ? (
        <>
          <animated.div style={firstAnimation} class="first-animation">
            <FirstAnimation />
          </animated.div>
        </>
      ) : null}
      {slide === 1 ? <Container /> : null}
      {slide === 2 ? <HeartbeatContainer /> : null}
    </>
  );
}

export default App;
