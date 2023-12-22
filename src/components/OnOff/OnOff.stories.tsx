import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import OnOff from './OnOff'

const meta: Meta<typeof OnOff> = {
	component: OnOff,
}

export default meta
type Story = StoryObj<typeof OnOff>

export const OnMode: Story = {
	args: {
		isOn: false,
	},
}

export const ToggleOnOff = () => {
	const [isOn, setIsOn] = useState(false)

	return <OnOff isOn={isOn} setIsOn={setIsOn} />
}
