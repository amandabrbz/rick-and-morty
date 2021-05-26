import './CharacterCard.scss'

const CharacterCard = (props) => {
  const { characters } = props;
  
  return (
    <>
      {characters &&
        characters.map((item) => (
          <article className="character-card" key={item.id} data-testid="card">
            <figure>
              <img src={item.imagem} alt={item.name} data-testid="cardImage"/>
              <figcaption>
                <h2 data-testid="cardName">{item.name}</h2>
                <p data-testid="cardType">{item.type}</p>
              </figcaption>
            </figure>
          </article>
        ))}
    </>
  )
}

export default CharacterCard
