import { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import CHARACTER_SEARCH from 'query'
import Loading from 'components/Loading/Loading'
import ModalError from 'components/ModalError/ModalError'
import './Form.scss'

const Form = ({ onSubmit }) => {
  const [searchChar, setSearchChar] = useState('')
  const [isErrorVisible, setIsErrorVisible] = useState(false)

  const [getCharacters, { loading, data }] = useLazyQuery(CHARACTER_SEARCH, {
    onError: (err) => {
      console.error(err)
      setIsErrorVisible(true)
    },
  })

  const handleChange = ({ target }) => {
    let { value } = target
    setSearchChar(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getCharacters({ variables: { searchChar } })
  }

  useEffect(() => {
    if (data !== undefined) {
      onSubmit(data)
    }
  }, [data, onSubmit])

  if (loading) {
    return <Loading />
  }

  const closeModal = () => {
    setIsErrorVisible(false)
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
          placeholder="Search a character..."
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

      {isErrorVisible && (
        <ModalError active={isErrorVisible} closeModal={closeModal} />
      )}
    </section>
  )
}

export default Form
