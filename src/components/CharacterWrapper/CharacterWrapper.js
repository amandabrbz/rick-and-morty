import CharacterCard from 'components/CharacterCard/CharacterCard'
import Mock from 'assets/images/image-mock-rick.png'
import './CharacterWrapper.scss'

const CharacterWrapper = () => {

  const mock = [
    {
      id: 1,
      imagem: Mock,
      name: 'Rick Sanchez',
      type: 'Human',
    }
  ]

  return (
    <section className="character-wrapper">
      <CharacterCard characters={mock} />
    </section>
  )
}

export default CharacterWrapper
