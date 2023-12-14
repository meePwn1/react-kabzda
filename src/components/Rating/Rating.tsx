export type StarType = 1 | 2 | 3 | 4 | 5 | 0

interface RatingProps {
	value: StarType
	setValue: (value: StarType) => void
}

function Rating({ value, setValue }: RatingProps) {
	return (
		<div>
			<Star setValue={() => setValue(1)} selected={value >= 1} />
			<Star setValue={() => setValue(2)} selected={value >= 2} />
			<Star setValue={() => setValue(3)} selected={value >= 3} />
			<Star setValue={() => setValue(4)} selected={value >= 4} />
			<Star setValue={() => setValue(5)} selected={value >= 5} />
		</div>
	)
}

type StarPropsType = {
	selected: boolean
	setValue: () => void
}

function Star({ selected, setValue }: StarPropsType) {
	return <span onClick={setValue}>{selected ? <b>Star </b> : 'Star'}</span>
}

export default Rating
