import CharacterCard from 'components/CharacterCard/CharacterCard'
import Mock from 'assets/images/image-mock-rick.png'
import './CharacterWrapper.scss'

const CharacterWrapper = () => {

  const mock = [
    {
      id: 1,
      imagem: Mock,
      background: Mock,
      name: 'Rick Sanchez',
      type: 'Human',
      planet: 'Human',
      description: 'loremloremloremloremlorem loremloremlorem loremloremloremlorem lorem loremloremlorem loremlorem loremlorem',
      residents: 'Human',
    }
  ]

  return (
    <section className="character-wrapper">
      <CharacterCard characters={mock} size="avatar" />
    </section>
  )
}

export default CharacterWrapper
