import React, { useState, useEffect } from 'react'
import Modal from 'components/Modal/Modal'
import './CharacterCard.scss'

const CharacterCard = (props) => {
  const { data, size } = props

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
      {data &&
        data.characters.results.map((item) => (
          <article
            className={`character-card ${size || ''}`}
            key={item.id}
            data-testid="card"
            onClick={ handleClick }
          >
            <figure>
              <img src={item.image} alt={item.name} data-testid="cardImage" />
              <figcaption>
                <h2 data-testid="cardName">{item.name}</h2>
                <p data-testid="cardType">{item.species}</p>
              </figcaption>
            </figure>
          </article>
        ))}
      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Image>
            <CharacterCard size="badge" data={data} />
          </Modal.Image>
          <Modal.Content data={data}/>
        </Modal>
      )}
    </>
  )
}

export default CharacterCard
