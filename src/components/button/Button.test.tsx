import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  test('Test render', () => {
    render(<Button/>)
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })

  test('Checking text by children', () => {
    const children: string = 'TEST'
    render(<Button>{ children }</Button>)
    expect(screen.getByTestId('button')).toHaveTextContent(children)
  })

  test('Checking styles by fullwidth property', () => {
    render(<Button fullwidth/>)
    expect(screen.getByTestId('button')).toHaveStyle({
      display: 'flex',
      width: '100%'
    })
  })
})
