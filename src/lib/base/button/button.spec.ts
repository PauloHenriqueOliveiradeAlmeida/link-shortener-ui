import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Button from './button.component.svelte'

describe('<Button/>', () => {
  it('should be a primary filled button', () => {
    const { getByTestId } = render(Button, { props: { label: 'Test', variant: 'filled', color: 'primary' } })
    expect(getByTestId('button-test')).toHaveClass('bg-primary text-light border-primary hover:bg-primary-light')
  })

  it('should be a primary outlined button', () => {
    const { getByTestId } = render(Button, { props: { label: 'Test', variant: 'outlined', color: 'primary' } })
    expect(getByTestId('button-test')).toHaveClass('bg-light text-primary border-primary hover:bg-gray')
  })

  it('should be a caution filled button', () => {
    const { getByTestId } = render(Button, { props: { label: 'Test', variant: 'filled', color: 'caution' } })
    expect(getByTestId('button-test')).toHaveClass('bg-caution text-light border-caution hover:bg-caution-light')
  })

  it('should be a caution outlined button', () => {
    const { getByTestId } = render(Button, { props: { label: 'Test', variant: 'outlined', color: 'caution' } })
    expect(getByTestId('button-test')).toHaveClass('bg-light text-caution border-caution hover:bg-gray')
  })

  it('should render empty label when label is undefined and be a primary filled button when color and variant are undefined', () => {
    const { getByTestId } = render(Button)
    const button = getByTestId('button-')
    expect(button).toHaveTextContent('')
    expect(button).toHaveClass('bg-primary text-light border-primary hover:bg-primary-light')
  })

  it('should render empty label when label is null and be a primary filled button when color and variant are null', () => {
    const { getByTestId } = render(Button, { props: { label: null, color: null, variant: null } })
    const button = getByTestId('button-')
    expect(button).toHaveTextContent('')
    expect(button).toHaveClass('bg-primary text-light border-primary hover:bg-primary-light')
  })
})
