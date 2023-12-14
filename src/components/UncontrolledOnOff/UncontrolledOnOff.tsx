import { FC, useState } from 'react'
import style from './UncontrolledOnOff.module.scss'

interface OnOffType {}

const UncontrolledOnOff: FC<OnOffType> = () => {
	const [on, setOn] = useState<boolean>(true)

	return (
		<div className={style.root}>
			<div onClick={() => setOn(true)} className={on ? style.green : ''}>
				On
			</div>
			<div onClick={() => setOn(false)} className={on ? '' : style.red}>
				Off
			</div>
			<span className={on ? style.green : style.red}></span>
		</div>
	)
}

export default UncontrolledOnOff
