import { useEffect, useState } from 'react'
import s from './Clock.module.scss'

const Clock = () => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const intervalID = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => clearInterval(intervalID)
	}, [])

	const hours = time.getHours() % 12
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()

	return (
		<>
			<div className={s.title}> Analog Clock </div>
			<div className={s.clock}>
				<div
					className={s.hour}
					style={{ transform: `rotate(${30 * hours}deg)` }}
				></div>
				<div
					className={s.min}
					style={{ transform: `rotate(${6 * minutes}deg)` }}
				></div>
				<div
					className={s.sec}
					style={{ transform: `rotate(${6 * seconds}deg)` }}
				></div>
			</div>
		</>
	)
}

export default Clock
