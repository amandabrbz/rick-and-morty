import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { CharacterCard } from 'components/CharacterCard'

describe('CharacterCard', () => {
  it('renders the character card', () => {
    const mock = [
      {
        id: 1,
        imagem: '',
        name: 'Rick Sanchez',
        type: 'Human',
        species: 'Human',
      },
    ]

    render(<CharacterCard data={mock} size="avatar" />)

    const name = screen.getByTestId('cardName')
    const cardImage = screen.getByTestId('cardImage')
    const type = screen.getByTestId('cardType')

    expect(cardImage).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(type).toBeInTheDocument()
  })
})
