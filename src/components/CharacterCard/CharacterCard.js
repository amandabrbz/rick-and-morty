import React, { useState, useEffect } from 'react'
import Modal from 'components/Modal/Modal'
import './CharacterCard.scss'

const CharacterCard = (props) => {
  const { characters, size } = props

  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')

    isModalVisible ? body.classList.add("block-scroll") :  body.classList.remove("block-scroll")
    
  }, [isModalVisible])

  const handleClick = () => {
    if(size === 'avatar') {
      setIsModalVisible(true)
    }
  }

  return (
    <>
      {characters &&
        characters.map((item) => (
          <article
            className={`character-card ${size || ''}`}
            key={item.id}
            data-testid="card"
            onClick={ handleClick }
          >
            <figure>
              <img src={item.imagem} alt={item.name} data-testid="cardImage" />
              <figcaption>
                <h2 data-testid="cardName">{item.name}</h2>
                <p data-testid="cardType">{item.type}</p>
              </figcaption>
            </figure>
          </article>
        ))}
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Image>
            <CharacterCard size="badge" characters={characters} />
          </Modal.Image>
          <Modal.Content data={characters}/>
        </Modal>
      )}
    </>
  )
}

export default CharacterCard
