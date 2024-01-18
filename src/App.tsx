import Clock from './components/Clock/Clock'

function App() {
	return (
		<div className='App'>
			<Clock />
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
