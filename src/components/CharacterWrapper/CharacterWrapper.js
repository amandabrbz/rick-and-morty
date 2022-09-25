import CharacterCard from 'components/CharacterCard/CharacterCard'
import './CharacterWrapper.scss'

const CharacterWrapper = ({ results }) => {
  return (
    <>
      {results && (
        <section className="character-wrapper">
          {results?.characters.results.map((char) => (
            <CharacterCard data={char} size="avatar" key={char.id} />
          ))}
        </section>
      )}
    </>
  )
}

export default CharacterWrapper
