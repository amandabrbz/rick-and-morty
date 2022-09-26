import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { CharacterWrapper } from './CharacterWrapper'

const handlePagination = jest.fn()

const mockResults = {
  characters: {
    info: {
      pages: 1,
      next: null,
      prev: null,
    },
    results: [
      {
        id: '1',
        name: 'Rick Sanchez',
        status: 'Alive',
        gender: 'Male',
        species: 'Human',
        origin: {
          name: 'Earth (C-137)',
        },
        location: {
          name: 'Citadel of Ricks',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        id: '8',
        name: 'Adjudicator Rick',
        status: 'Dead',
        gender: 'Male',
        species: 'Human',
        origin: {
          name: 'unknown',
        },
        location: {
          name: 'Citadel of Ricks',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      },
    ],
  },
}

describe('CharacterWrapper', () => {
  it('renders the component correctly', () => {
    render(
      <CharacterWrapper
        results={mockResults}
        handlePagination={handlePagination}
      />
    )

    const wrapper = screen.getByTestId('character-wrapper')
    const pagination = screen.getByTestId('pagination')

    expect(wrapper).toBeInTheDocument()
    expect(pagination).toBeInTheDocument()
  })
})
