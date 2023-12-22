import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Accordion from './Accordion'

const meta: Meta<typeof Accordion> = {
	component: Accordion,
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Collapsed: Story = {
	args: {
		title: 'Accordion',
		collapsed: true,
	},
}

export const ToggleAccordion = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const handleOnChange = () => {
		setCollapsed(!collapsed)
	}

	return (
		<Accordion items={['azamat', 'miwa', 'dima']} collapsed={collapsed} onChange={handleOnChange} title='Accordion' />
	)
}
