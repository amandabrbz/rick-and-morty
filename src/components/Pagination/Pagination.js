import './Pagination.scss'

export const Pagination = ({ pages, next, prev, handlePagination }) => {
  let actualPage

  if (next) {
    actualPage = next - 1
  } else if (prev) {
    actualPage = prev + 1
  } else {
    actualPage = 1
  }

  return (
    <section className="pagination" data-testid="pagination">
      {prev && (
        <button
          className="pagination__button"
          onClick={() => handlePagination((prev) => (prev -= 1))}
          title="previous"
        >
          previous
        </button>
      )}

      <p className="pagination__text" data-testid="page-text">
        {actualPage} of {pages}
      </p>

      {next && (
        <button
          className="pagination__button"
          onClick={() => handlePagination((prev) => (prev += 1))}
          title="next"
        >
          next
        </button>
      )}
    </section>
  )
}
