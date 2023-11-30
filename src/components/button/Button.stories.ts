import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    type: {
      control: 'select',
      options: ['contained', 'outlined']
    },
    fullwidth: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Button',
    type: 'contained'
  }
}

export const PrimaryFullwidth: Story = {
  args: {
    color: 'primary',
    children: 'Button',
    fullwidth: true,
    type: 'contained'
  }
}

export const PrimaryOutlined: Story = {
  args: {
    color: 'primary',
    children: 'Button',
    type: 'outlined'
  }
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Button',
    type: 'contained'
  }
}

export const SecondaryFullwidth: Story = {
  args: {
    color: 'secondary',
    children: 'Button',
    fullwidth: true,
    type: 'contained'
  }
}

export const SecondaryOutlined: Story = {
  args: {
    color: 'secondary',
    children: 'Button',
    type: 'outlined'
  }
}
