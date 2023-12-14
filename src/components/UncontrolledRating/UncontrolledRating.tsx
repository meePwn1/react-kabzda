import { useState } from 'react'

type StarType = 1 | 2 | 3 | 4 | 5 | 0

function UncontrolledRating() {
	const [star, setStar] = useState<StarType>(0)
	return (
		<div>
			<Star setStar={setStar} selected={star >= 1} value={1} />
			<Star setStar={setStar} selected={star >= 2} value={2} />
			<Star setStar={setStar} selected={star >= 3} value={3} />
			<Star setStar={setStar} selected={star >= 4} value={4} />
			<Star setStar={setStar} selected={star >= 5} value={5} />
		</div>
	)
}

type StarPropsType = {
	selected: boolean
	value: StarType
	setStar: (value: StarType) => void
}

function Star({ selected, setStar, value }: StarPropsType) {
	return <span onClick={() => setStar(value)}>{selected ? <b>Star </b> : 'Star'}</span>
}

export default UncontrolledRating
