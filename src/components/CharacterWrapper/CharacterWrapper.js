import { useContext } from 'react'
import CharacterCard from 'components/CharacterCard/CharacterCard'
import './CharacterWrapper.scss'
import { Context } from 'pages/Home/Home'

const CharacterWrapper = () => {
  const { data } = useContext(Context)

  return (
    <section className="character-wrapper">
      {data &&
        data.characters.results.map((char) => (
          <CharacterCard data={char} size="avatar" key={char.id} />
        ))}
    </section>
  )
}

export default CharacterWrapper
