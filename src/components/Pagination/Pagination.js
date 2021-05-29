import { useContext } from 'react'
import { Context } from 'pages/Home/Home'

const Pagination = () => {
  const { data } = useContext(Context)

  const totalOfPages = (pages) => {
    let totalOfPagesArr = []
    for (let i = 0; i <= pages.length; i++) {
      totalOfPagesArr.unshift(i)
    }

    return totalOfPagesArr
  }

  const pages = totalOfPages(data.character.info.pages)

  return (
    <>
      {data && pages && (
        <nav>
          {pages.map(page => <button>{page}</button>)}
        </nav>
      )}
    </>
  )
}

export default Pagination
