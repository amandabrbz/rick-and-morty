import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Form from 'components/Form/Form'

describe('form testing', () => {
  it('should have a submit button and a input text', () => {
    render(<Form />)

    const submitButton = screen.getByTestId('submit')
    const searchInput = screen.getByTestId('search')

    expect(submitButton).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
  })

  describe('testing input changes', () => {
    it('should insert a value into the input', () => {
      render(<Form />)
      
      const searchInput = screen.getByTestId('search')

      fireEvent.change(searchInput, { target: { value: 'R$150,00' } })
      expect(searchInput.value).toBe('R$150,00')
    })
  })
})
