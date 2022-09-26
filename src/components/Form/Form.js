import { useState } from 'react'

import './Form.scss'

export const Form = ({ onSubmit }) => {
  const [searchChar, setSearchChar] = useState('')

  const handleChange = ({ target }) => {
    let { value } = target
    setSearchChar(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(searchChar)
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
          className="form__input"
          id="search"
          name="search"
          data-testid="search"
          onChange={handleChange}
          value={searchChar}
        />
        <button
          type="submit"
          className="form__submit"
          title="click to search a character"
          data-testid="submit"
        >
          Search
        </button>
      </form>
    </section>
  )
}
