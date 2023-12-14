import { FC } from 'react'
import style from './OnOff.module.scss'

interface OnOffType {
	isOn: boolean
	setIsOn: (value: boolean) => void
}

const OnOff: FC<OnOffType> = ({ isOn, setIsOn }) => {
	return (
		<div className={style.root}>
			<div onClick={() => setIsOn(true)} className={isOn ? style.green : ''}>
				On
			</div>
			<div onClick={() => setIsOn(false)} className={isOn ? '' : style.red}>
				Off
			</div>
			<span className={isOn ? style.green : style.red}></span>
		</div>
	)
}

export default OnOff
