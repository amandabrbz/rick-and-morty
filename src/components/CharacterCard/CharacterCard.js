import { useState, useEffect } from 'react'

import { Modal } from 'components/Modal'

import './CharacterCard.scss'

export const CharacterCard = (props) => {
  const { data, size } = props

  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')

    isModalVisible
      ? body.classList.add('block-scroll')
      : body.classList.remove('block-scroll')
  }, [isModalVisible])

  const handleClick = () => {
    if (size === 'avatar') {
      setIsModalVisible(true)
    }
  }

  return (
    <>
      {data && (
        <article
          className={`character-card ${size || ''}`}
          key={data.id}
          data-testid="card"
        >
          <button onClick={handleClick} title="Click to see more information">
            <figure>
              <img
                src={data.image}
                alt={`${data.name} avatar`}
                data-testid="cardImage"
              />
              <figcaption>
                <h2 data-testid="cardName">{data.name}</h2>
                <p data-testid="cardType">{data.species}</p>
              </figcaption>
            </figure>
          </button>
        </article>
      )}

      {isModalVisible && (
        <Modal onModalClose={() => setIsModalVisible(false)}>
          <Modal.Image background={data.image}>
            <CharacterCard size="badge" data={data} />
          </Modal.Image>
          <Modal.Content data={data} />
        </Modal>
      )}
    </>
  )
}
