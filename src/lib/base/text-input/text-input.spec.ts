import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/svelte'
import TextInput from './text-input.component.svelte'

describe('<TextInput/>', () => {
  it('should render input with error message', () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(TextInput, { props: { label: 'Test', errorMessage: 'this is a test error message' } })
    expect(getByText('this is a test error message')).toBeInTheDocument()
    expect(getByText('this is a test error message')).toHaveClass('text-danger')
    expect(getByLabelText('Test')).toHaveClass('border-danger')
    expect(getByPlaceholderText('Test')).toHaveClass('border-danger')
  })
})