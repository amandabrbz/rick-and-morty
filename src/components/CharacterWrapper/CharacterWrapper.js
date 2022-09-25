import CharacterCard from 'components/CharacterCard/CharacterCard'
import { Pagination } from 'components/Pagination/Pagination'
import './CharacterWrapper.scss'

const CharacterWrapper = ({ results, handlePagination }) => {
  return (
    <>
      {results && (
        <>
          <section className="character-wrapper">
            {results?.characters.results.map((char) => (
              <CharacterCard data={char} size="avatar" key={char.id} />
            ))}
          </section>
          <Pagination
            pages={results.characters.info.pages}
            prev={results.characters.info.prev}
            next={results.characters.info.next}
            handlePagination={handlePagination}
          />
        </>
      )}
    </>
  )
}

export default CharacterWrapper
