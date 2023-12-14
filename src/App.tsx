import { useState } from 'react'
import Accordion from './components/Accordion/Accordion'
import OnOff from './components/OnOff/OnOff'
import Rating, { StarType } from './components/Rating/Rating'
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion'
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff'
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating'

function App() {
	const [collapsed, setCollapsed] = useState<boolean>(true)
	const [ratingValue, setRatingValue] = useState<StarType>(0)
	const [isOn, setIsOn] = useState<boolean>(false)
	return (
		<div className='App'>
			<PageTitle title={'Hello World'} />

			<Accordion title='Menu' collapsed={collapsed} setCollapsed={setCollapsed} />
			<UncontrolledAccordion title='Menu-2' />

			<Rating value={ratingValue} setValue={setRatingValue} />
			<UncontrolledRating />

			<OnOff isOn={isOn} setIsOn={setIsOn} />
			<UncontrolledOnOff />
		</div>
	)
}

type PagePropsType = {
	title: string
}

function PageTitle({ title }: PagePropsType) {
	return <h2>{title}</h2>
}

export default App
