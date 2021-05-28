import React, { createContext, useContext, useEffect, createRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from 'assets/images/icon-people.svg'
import './Modal.scss'

const modalContext = createContext()

export default function Modal({ children, onModalClose }) {
  useEffect(() => {
    function keyListener(e) {
      const listener = keyListenersMap.get(e.keyCode)
      return listener && listener(e)
    }
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  })

  const modalRef = createRef()
  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll('button')
    const firstElement = focusableModalElements
    const lastElement =
      focusableModalElements[focusableModalElements.length - 1]

    if (!e.shiftKey && document.activeElement !== firstElement) {
      firstElement.focus()
      return e.preventDefault()
    }

    if (e.shiftKey && document.activeElement !== lastElement) {
      lastElement.focus()
      e.preventDefault()
    }
  }

  const keyListenersMap = new Map([
    [27, onModalClose],
    [9, handleTabKey],
  ])

  return createPortal(
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal-content" ref={modalRef}>
        <modalContext.Provider value={{ onModalClose }}>
          {children}
        </modalContext.Provider>
      </div>
    </div>,
    document.body
  )
}

Modal.Image = function ModalImage({ background, children }) {
  const { onModalClose } = useContext(modalContext)

  const applyBackground = background && {
    backgroundImage: `url(${background})`,
  }

  return (
    <div className="modal-content__image" style={applyBackground}>
      {children}
      <button className="modal-content__close" title="close modal" onClick={onModalClose}>
      <span className="modal-content__close--text">Close</span> <span className="modal-content__close--symbol">&times;</span>
      </button>
    </div>
  )
}

Modal.Content = function ModalContent({data}) {
  return (
    <main className="modal-content__description">
    <section className="modal-content__description--wrapper">
      <h2 className="modal-content__description--title">About</h2>
      <p className="modal-content__description--description">
        {data.name} is a {data.species} from the gender {data.gender} and it's currrent status is {data.status}.
      </p>
    </section>
    <section className="modal-content__description--wrapper">
      <h2 className="modal-content__description--title">Origin</h2>
      <h3 className="modal-content__description--obs">Planet</h3>
      <p className="modal-content__description--highlight">
        {data.origin.name}
      </p>
      <p className="modal-content__description--highlight__small">
        {data.origin.name}
      </p>
      <p className="modal-content__description--obs">
        <img src={Icon} alt="icon representing population" role="presentation"/> 
        <span>{data.residents || `Non Identified`} </span>
        residents
      </p>
    </section>
    <section className="modal-content__description--wrapper">
      <h2 className="modal-content__description--title">Location</h2>
      <h3 className="modal-content__description--obs">Planet</h3>
      <p className="modal-content__description--highlight">
        {data.location.name}
      </p>
      <p className="modal-content__description--highlight__small">
        {data.origin.name}
      </p>
      <p className="modal-content__description--obs">
        <img src={Icon} alt="icon representing population" role="presentation"/> 
        <span>{data.residents || `Non Identified`} </span>
        residents
      </p>
    </section>
  </main>
  )
}
