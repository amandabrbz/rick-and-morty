import { useState, useContext } from 'react'
import { useLazyQuery } from '@apollo/client'
import CHARACTER_SEARCH from 'query'
import Loading from 'components/Loading/Loading'
import { Context } from 'pages/Home/Home'
import './Form.scss'

const Form = () => {
  const { setData } = useContext(Context);

  const [searchChar, setSearchChar] = useState('')

  const handleChange = ({ target }) => {
    let { value } = target
    setSearchChar(value)
  }

  const [getCharacters, { loading, data, error }] =
    useLazyQuery(CHARACTER_SEARCH)

  const handleSubmit = (e) => {
    e.preventDefault()
    getCharacters({ variables: { searchChar } })
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>an error occurred...</p>
  }

  if(data !== undefined) {
    setData(data)
    console.log(data)
  }

  return (
    <section>
      <form
        className="form"
        id="formCharacter"
        data-testid="form-character"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search" className="sr-only">
          Search a character from Rick and Morty's universe
        </label>
        <input
          type="text"
          placeholder="Type to search one character..."
          className="form--input"
          id="search"
          name="search"
          data-testid="search"
          onChange={handleChange}
          value={searchChar}
        />
        <button
          type="submit"
          className="form--submit"
          title="click to search a character"
          data-testid="submit"
        >
          Search
        </button>
      </form>
    </section>
  )
}

export default Form
