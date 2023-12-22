import type { Meta, StoryObj } from '@storybook/react'
import Select from './Select'

const meta: Meta<typeof Select> = {
	component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Collapsed: Story = {
	args: {
		items: [
			{ title: 'red', value: '1' },
			{ title: 'blue', value: '2' },
			{ title: 'orange', value: '3' },
		],
		value: '',
	},
}
