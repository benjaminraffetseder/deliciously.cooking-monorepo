import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@chakra-ui/react'
import { expect } from '@storybook/jest'
import { within } from '@storybook/testing-library'

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    variant: {
      options: ['primary', 'outline', 'danger'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'sm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Button/gi)).toBeTruthy()
  },
}
