import { render, screen } from '@testing-library/react'

import { Header } from 'components/Header'

describe('Header', () => {
  it('renders the component correctly', () => {
    render(<Header />)

    const header = screen.getByTestId('header')
    const image = screen.getByRole('img')

    expect(header).toBeInTheDocument()
    expect(image).toBeInTheDocument()
  })
})
