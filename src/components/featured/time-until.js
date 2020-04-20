import React from 'react';
import Slide from 'react-reveal/Slide';

const TimeUntil = () => {
	const [deadLine, setDeadLine] = React.useState('Dec, 19, 2020');
	const [days, setDays] = React.useState('0');
	const [hours, setHours] = React.useState('0');
	const [minutes, setMinutes] = React.useState('0');
	const [seconds, setSeconds] = React.useState('0');

	const getTimeUntil = (deadLine) => {
		const time = Date.parse(deadLine) - Date.parse(new Date());
		if (time < 0) {
			console.log('Date passed');
		} else {
			setSeconds(Math.floor((time / 1000) % 60));
			setMinutes(Math.floor((time / 1000 / 60) % 60));
			setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
			setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		}
	};

	React.useEffect(() => {
		const interval = setInterval(() => {
			getTimeUntil(deadLine);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<Slide left delay={1000}>
			<div className="countdown_wrapper">
				<div className="countdown_top">Event starts in</div>
				<div className="countdown_bottom">
					<div className="countdown_item">
						<div className="countdown_time">{days}</div>
						<div className="countdown_tag">Days</div>
					</div>
					<div className="countdown_item">
						<div className="countdown_time">{hours}</div>
						<div className="countdown_tag">Hs</div>
					</div>
					<div className="countdown_item">
						<div className="countdown_time">{minutes}</div>
						<div className="countdown_tag">Ms</div>
					</div>
					<div className="countdown_item">
						<div className="countdown_time">{seconds}</div>
						<div className="countdown_tag">Sec</div>
					</div>
				</div>
			</div>
		</Slide>
	);
};

export default TimeUntil;
