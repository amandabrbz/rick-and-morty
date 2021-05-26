import { render, screen } from '@testing-library/react'
import Loading from 'components/Loading/Loading'

describe('Loading testing', () => {
  it('should appear a loading animation', () => {
    render(<Loading />)

    const image = screen.getByTestId('loadingImg')
    const text = screen.getByTestId('loadingText')

    expect(image).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
