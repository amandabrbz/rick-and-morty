import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import CharacterCard from 'components/CharacterCard/CharacterCard'

describe('CharacterCard testing', () => {
  it('should have an image, a name and type', () => {
    const mock = [
      {
        id: 1,
        imagem: '',
        name: 'Rick Sanchez',
        type: 'Human',
      },
    ]
    
    render(<CharacterCard characters={mock} />)

    const name = screen.getByTestId('cardName')
    const cardImage = screen.getByTestId('cardImage')
    const type = screen.getByTestId('cardType')

    expect(cardImage).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(type).toBeInTheDocument()
  })
})
