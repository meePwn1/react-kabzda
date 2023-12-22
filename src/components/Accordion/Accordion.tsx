import style from './Accordion.module.scss'

type AccordionProps = {
	title: string
	collapsed: boolean
	items: string[]
	onChange: () => void
}
function Accordion({ title, items, collapsed, onChange }: AccordionProps) {
	return (
		<div>
			<AccordionTitle onChange={onChange} title={title} />
			{!collapsed && <AccordionBody items={items} />}
		</div>
	)
}

type AccordionTitleProps = {
	title: string

	onChange: () => void
}

function AccordionTitle({ title, onChange }: AccordionTitleProps) {
	return (
		<h3 className={style.title} onClick={() => onChange()}>
			{title}
		</h3>
	)
}

type AccordionBodyProps = {
	items: string[]
}

function AccordionBody({ items }: AccordionBodyProps) {
	return (
		<ul className={style.list}>
			{items.map((el, i) => {
				return <li key={i}>{el}</li>
			})}
		</ul>
	)
}

export default Accordion
