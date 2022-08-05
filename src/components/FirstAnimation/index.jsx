import { useSpring, animated, easings } from 'react-spring';

const Circle = ({ style, children }) => {
	return (
		<animated.div style={style} className="circle">
			{children}
		</animated.div>
	);
};

const ROTATE_DELAY = 1500;
const ROTATE_DURATION = 2000;

function FirstAnimation() {
	const circleOne = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: 'translate(100px, -100px) scale(1)',
				opacity: 1,
				config: { duration: 1000, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(0px, 0px) scale(1)',
				delay: ROTATE_DELAY,
				config: { duration: 900, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(0px, 0px) scale(500)',
				config: { duration: 1200, easing: easings.easeInOutQuart }
			});
		},
		from: { transform: 'translate(100px, -100px) scale(0.7)', opacity: 0 }
	});

	const circleTwo = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: 'translate(0px, -150px) scale(1)',
				opacity: 1,
				config: { duration: 1000, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(0px, -150px) scale(0)',
				delay: 150,
				config: { duration: 2000, easing: easings.easeInOutQuart }
			});
		},
		from: { transform: 'translate(0px, -150px) scale(0.7)', opacity: 0 }
	});

	const circleThree = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: 'translate(-100px, -100px) scale(1)',
				opacity: 1,
				config: { duration: 1000, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(-100px, -100px) scale(0)',
				delay: 300,
				config: { duration: 2000, easing: easings.easeInOutQuart }
			});
		},
		from: { transform: 'translate(-100px, -100px) scale(0.7)', opacity: 0 }
	});

	const circleFour = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: 'translate(-150px, 0px) scale(1)',
				opacity: 1,
				config: { duration: 1000, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(-150px, 0px) scale(0)',
				delay: 450,
				config: { duration: 2000, easing: easings.easeInOutQuart }
			});
		},
		from: { transform: 'translate(-150px, 0px) scale(0.7)', opacity: 0 }
	});

	const circleFive = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: 'translate(-100px, 100px) scale(1)',
				opacity: 1,
				config: { duration: 1000, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(-100px, 100px) scale(0)',
				delay: 600,
				config: { duration: 2000, easing: easings.easeInOutQuart }
			});
		},
		from: { transform: 'translate(-100px, 100px) scale(0.7)', opacity: 0 }
	});

	const circleSix = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: 'translate(0px, 150px) scale(1)',
				opacity: 1,
				config: { duration: 1000, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(0px, 150px) scale(0)',
				delay: 750,
				config: { duration: 2000, easing: easings.easeInOutQuart }
			});
		},
		from: { transform: 'translate(0px, 150px) scale(0.7)', opacity: 0 }
	});

	const circleSeven = useSpring({
		to: async (next, cancel) => {
			await next({
				transform: 'translate(100px, 100px) scale(1)',
				opacity: 1,
				config: { duration: 1000, easing: easings.easeInOutQuart }
			});
			await next({
				transform: 'translate(100px, 100px) scale(0)',
				delay: 750,
				config: { duration: 2000, easing: easings.easeInOutQuart }
			});
		},
		from: { transform: 'translate(100px, 100px) scale(0.7)', opacity: 0 }
	});

	// circle Container
	const rotation = useSpring({
		from: { transform: 'rotate(0deg)' },
		to: { transform: 'rotate(140deg)' },
		delay: ROTATE_DELAY,
		config: { duration: ROTATE_DURATION, easing: easings.easeInOutQuart }
	});

	return (
		<div className="App">
			<animated.div className="circle-container" style={rotation}>
				<Circle style={circleOne} />
				<Circle style={circleTwo} />
				<Circle style={circleThree} />
				<Circle style={circleFour} />
				<Circle style={circleFive} />
				<Circle style={circleSix} />
				<Circle style={circleSeven} />
			</animated.div>
		</div>
	);
}

export default FirstAnimation;
