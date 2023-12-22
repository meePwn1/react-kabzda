import { FC, useState } from 'react'

type ItemsType = {
	title: string
	value: string
}

interface SelectProps {
	value: string
	items: ItemsType[]
	onChange: () => void
}

const Select: FC<SelectProps> = ({ value, items, onChange }) => {
	const [selectedValue, setSelectedValue] = useState(value || 'Select...')
	const [collapsed, setCollapsed] = useState(true)

	const handlerOnClick = () => {
		setCollapsed(!collapsed)
	}
	return (
		<div style={{ maxWidth: '200px' }}>
			<div style={{ border: '1px solid #000', padding: '5px', marginBottom: '5px' }} onClick={handlerOnClick}>
				{selectedValue}
			</div>
			{collapsed || (
				<SelectBody
					items={items}
					selectedValue={selectedValue}
					setSelectValue={setSelectedValue}
					setCollapsed={setCollapsed}
				/>
			)}
		</div>
	)
}

interface SelectBodyProps {
	items: ItemsType[]
	selectedValue: string
	setSelectValue: (value: string) => void
	setCollapsed: (value: boolean) => void
}

const SelectBody: FC<SelectBodyProps> = ({ items, selectedValue, setSelectValue, setCollapsed }) => {
	return (
		<ul style={{ listStyle: 'none', padding: '5px', border: '1px solid #000', margin: '0px' }}>
			{items.map(el => {
				const handlerOnClick = () => {
					setSelectValue(el.title)
					setCollapsed(true)
				}
				return (
					<li
						key={el.value}
						style={selectedValue === el.title ? { color: 'red' } : { color: 'unset' }}
						value={el.value}
						onClick={handlerOnClick}
					>
						{el.title}
					</li>
				)
			})}
		</ul>
	)
}

export default Select
