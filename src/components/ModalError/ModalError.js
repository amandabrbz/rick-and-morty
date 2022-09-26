import React, { useEffect, useRef } from 'react'

import ErrorImg from 'assets/images/loading-image.png'
import './ModalError.scss'

export const ModalError = ({ active, closeModal }) => {
  const modalRef = useRef(null)

  const handleTabKey = (e) => {
    const focusableModalElements = modalRef.current.querySelectorAll('button')
    const firstElement = focusableModalElements[0]
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
    [27, closeModal],
    [9, handleTabKey],
  ])

  function keyListener(e) {
    const listener = keyListenersMap.get(e.keyCode)
    return listener && listener(e)
  }

  useEffect(() => {
    document.addEventListener('keydown', keyListener)

    return () => document.removeEventListener('keydown', keyListener)
  })

  return (
    <>
      {active && (
        <section role="dialog" className="error-container" ref={modalRef}>
          <article className="error-content">
            <button
              className="error-content__close"
              title="close modal"
              onClick={closeModal}
            >
              <span className="error-content__close--text">Close</span>{' '}
              <span className="error-content__close--symbol">&times;</span>
            </button>
            <figure>
              <img src={ErrorImg} alt="" />
            </figure>
            <section className="error-content__description">
              <h2 className="error-content__description--title">
                Ops! Not found
              </h2>
              <p>
                We couldn't find your character. Maybe it's not in the Rick and
                Morty's universe?
              </p>
              <p>Try some of these names: </p>
              <ul className="error-content__description--list">
                <li>Rick</li>
                <li>Morty</li>
                <li>Centaur</li>
                <li>Summer</li>
                <li>Strange</li>
              </ul>
            </section>
          </article>
        </section>
      )}
    </>
  )
}
