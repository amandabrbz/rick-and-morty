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
    <section className="pagination">
      {prev && (
        <button
          className="pagination__button"
          onClick={() => handlePagination((prev) => (prev -= 1))}
        >
          previous
        </button>
      )}

      <p className="pagination__text">
        {actualPage} of {pages}
      </p>

      {next && (
        <button
          className="pagination__button"
          onClick={() => handlePagination((prev) => (prev += 1))}
        >
          next
        </button>
      )}
    </section>
  )
}
