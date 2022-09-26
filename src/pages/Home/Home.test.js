import { render, screen } from '@testing-library/react'

import { Home } from 'pages/Home'

describe('Home', () => {
  it('renders the home page', () => {
    render(<Home />)

    const logo = screen.getByRole('img', {
      name: /rick and morty's logo in blue and yellow/i,
    })
    const form = screen.getByTestId('form-character')

    expect(logo).toBeInTheDocument()
    expect(form).toBeInTheDocument()
  })
})
