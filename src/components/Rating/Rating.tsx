export type StarType = 1 | 2 | 3 | 4 | 5 | 0

interface RatingProps {
	value: StarType
	onClick: (value: StarType) => void
}

function Rating({ value, onClick }: RatingProps) {
	return (
		<div>
			<Star onClick={() => onClick(1)} selected={value >= 1} />
			<Star onClick={() => onClick(2)} selected={value >= 2} />
			<Star onClick={() => onClick(3)} selected={value >= 3} />
			<Star onClick={() => onClick(4)} selected={value >= 4} />
			<Star onClick={() => onClick(5)} selected={value >= 5} />
		</div>
	)
}

type StarPropsType = {
	selected: boolean
	onClick: () => void
}

function Star({ selected, onClick }: StarPropsType) {
	return <span onClick={() => onClick()}>{selected ? <b>Star </b> : 'Star'}</span>
}

export default Rating
