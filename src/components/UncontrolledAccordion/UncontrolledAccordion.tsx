import { useState } from 'react'

type AccordionPropsType = {
	title: string
}
function UncontrolledAccordion({ title }: AccordionPropsType) {
	const [collapsed, setCollapsed] = useState<boolean>(true)
	return (
		<div>
			<AccordionTitle setCollapsed={() => setCollapsed(!collapsed)} title={title} />
			{!collapsed && <AccordionBody />}
		</div>
	)
}

type AccordionTitlePropsType = {
	title: string
	setCollapsed: () => void
}

function AccordionTitle({ title, setCollapsed }: AccordionTitlePropsType) {
	return <h3 onClick={() => setCollapsed()}>{title}</h3>
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

export default UncontrolledAccordion
