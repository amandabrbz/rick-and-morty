import './Form.scss'

const Form = () => {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Type to search one character..."
        className="form--input"
      />
      <button type="submit" className="form--submit" title="click to search a character">Search</button>
    </form>
  )
}

export default Form
