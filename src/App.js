import './App.css';
import Container from './components/Container';
import FirstAnimation from './components/FirstAnimation';
import { animated, useSpring } from 'react-spring';
import { useEffect, useState } from 'react';

function App() {
	const firstAnimation = useSpring({
		from: { opacity: 1, display: 'flex' },
		to: { opacity: 0, display: 'none' },
		delay: 4000
	});

	const [show, setShow] = useState(false);

	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	const delaySecondAnimation = async () => {
		await delay(4000);
		setShow(true);
	};

	useEffect(() => {
		delaySecondAnimation();
	});

	return (
		<>
			<div className="App">
				{
					<>
						<animated.div style={firstAnimation} class="first-animation">
							<FirstAnimation />
						</animated.div>
					</>
				}
			</div>
			{show ? <Container /> : null}
		</>
	);
}

export default App;
