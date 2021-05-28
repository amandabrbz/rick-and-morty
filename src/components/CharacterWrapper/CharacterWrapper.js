
import { useContext } from "react";
import CharacterCard from 'components/CharacterCard/CharacterCard'
import './CharacterWrapper.scss'
import { Context } from 'pages/Home/Home'

const CharacterWrapper = () => {
  const { data } = useContext(Context);

  return (
    <section className="character-wrapper">
      <CharacterCard data={data} size="avatar" />
    </section>
  )
}

export default CharacterWrapper
