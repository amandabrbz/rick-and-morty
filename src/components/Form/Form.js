import './Form.scss'

const Form = () => {
  return (
    <form className="form" id="formCharacter" data-testid="form-character">
      <input
        type="text"
        placeholder="Type to search one character..."
        className="form--input"
        id="search"
        name="search"
        data-testid="search"
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
  )
}

export default Form
