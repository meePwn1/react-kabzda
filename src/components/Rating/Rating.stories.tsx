import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Rating, { StarType } from './Rating'

const meta: Meta<typeof Rating> = {
	component: Rating,
}

export default meta
type Story = StoryObj<typeof Rating>

export const EmptyRating: Story = {
	args: {
		value: 0,
	},
}

export const RatingWithHooks = () => {
	const [rating, setRating] = useState<StarType>(0)

	return <Rating value={rating} onClick={setRating} />
}
