import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { Form } from 'components/Form'

const onSubmit = jest.fn()

describe('Form', () => {
  it('renders the form component', () => {
    render(<Form onSubmit={onSubmit} />)

    const submitButton = screen.getByTestId('submit')
    const searchInput = screen.getByTestId('search')

    expect(submitButton).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
  })

  it('inserts the value correctly on the input text', () => {
    render(<Form onSubmit={onSubmit} />)

    const searchInput = screen.getByTestId('search')

    fireEvent.change(searchInput, { target: { value: 'R$150,00' } })
    expect(searchInput.value).toBe('R$150,00')
  })

  it('calls onSubmit when the user submits the form', () => {
    render(<Form onSubmit={onSubmit} />)

    const submitButton = screen.getByTestId('submit')
    const searchInput = screen.getByTestId('search')

    fireEvent.change(searchInput, { target: { value: 'Rick' } })
    fireEvent.click(submitButton)

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith('Rick')
  })
})
