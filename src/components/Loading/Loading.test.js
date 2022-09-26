import { render, screen } from '@testing-library/react'

import { Loading } from 'components/Loading'

describe('Loading', () => {
  it('appears the loading', () => {
    render(<Loading />)

    const image = screen.getByTestId('loadingImg')
    const text = screen.getByTestId('loadingText')

    expect(image).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
