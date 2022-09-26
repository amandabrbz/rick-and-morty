import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import { Pagination } from './Pagination'

const props = {
  page: 1,
  next: 2,
  prev: null,
  handlePagination: jest.fn(),
}

describe('Pagination', () => {
  it('renders the component correctly', () => {
    render(<Pagination {...props} />)

    const next = screen.getByRole('button', {
      name: /next/i,
    })

    const prev = screen.queryByRole('button', {
      name: /prev/i,
    })

    const pageText = screen.getByTestId('page-text')

    expect(next).toBeInTheDocument()
    expect(pageText).toBeInTheDocument()
    expect(prev).not.toBeInTheDocument()
  })

  it('calls handlePagination when the user clicks on the next button', async () => {
    render(<Pagination {...props} />)

    const next = screen.getByRole('button', {
      name: /next/i,
    })

    fireEvent.click(next)

    expect(props.handlePagination).toHaveBeenCalledTimes(1)
  })
})
