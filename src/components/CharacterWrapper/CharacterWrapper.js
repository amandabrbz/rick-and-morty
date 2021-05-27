import CharacterCard from 'components/CharacterCard/CharacterCard'
import './CharacterWrapper.scss'
import { useQuery } from "@apollo/client";
import INFO_PERSON from "query/index";
import Loading from 'components/Loading/Loading';

const CharacterWrapper = () => {
  const { loading, error, data } = useQuery(INFO_PERSON);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  return (
    <section className="character-wrapper">
      <CharacterCard characters={data.characters.results} size="avatar" />
    </section>
  )
}

export default CharacterWrapper
