function App() {
	return (
		<div className='App'>
			<PageTitle title={'Hello World'} />
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
