import { render, screen } from '@testing-library/react'
import Home from 'pages/Home/Home'

describe('renders home page', () => {
  it('should render the Rick and Mortys logo', () => {
    render(<Home />)

    const logo = screen.getByRole('img', {
      name: /rick and morty's logo in blue and yellow/i,
    })

    expect(logo).toBeInTheDocument()
  })

  it('should render the background', () => {
    render(<Home />)

    const backgroundImage = screen.getByRole('img', {
      name: /draw from the rick and morty's universe/i,
    })

    expect(backgroundImage).toBeInTheDocument()
  })

  it('should render form for search characters', () => {
    render(<Home />)

    const form = screen.getByTestId('form-character')

    expect(form).toBeInTheDocument()
  })
})
