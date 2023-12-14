type AccordionProps = {
	title: string
	collapsed: boolean
	setCollapsed: (value: boolean) => void
}
function Accordion({ title, collapsed, setCollapsed }: AccordionProps) {
	return (
		<div>
			<AccordionTitle setCollapsed={() => setCollapsed(!collapsed)} title={title} />
			{!collapsed && <AccordionBody />}
		</div>
	)
}

type AccordionTitleProps = {
	title: string
	setCollapsed: () => void
}

function AccordionTitle({ title, setCollapsed }: AccordionTitleProps) {
	return <h3 onClick={setCollapsed}>{title}</h3>
}

function AccordionBody() {
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	)
}

export default Accordion
