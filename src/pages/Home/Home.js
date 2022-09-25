import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import CHARACTER_SEARCH from 'query'

import CharacterWrapper from 'components/CharacterWrapper/CharacterWrapper'
import Form from 'components/Form/Form'
import Header from 'components/Header/Header'
import Loading from 'components/Loading/Loading'
import ModalError from 'components/ModalError/ModalError'

import './Home.scss'

const Home = () => {
  const [isErrorVisible, setIsErrorVisible] = useState(false)
  const [page, setPage] = useState(1)
  const [character, setCharacter] = useState('')

  const [getCharacters, { loading, data }] = useLazyQuery(CHARACTER_SEARCH, {
    onError: (err) => {
      console.error(err)
      setIsErrorVisible(true)
    },
  })

  useEffect(() => {
    if (character !== '') {
      getCharacters({ variables: { page, searchChar: character } })
    }
  }, [page, data, getCharacters, character])

  const handleSubmit = (formData) => {
    setCharacter(formData)
  }

  const closeModal = () => setIsErrorVisible(false)

  return (
    <>
      <Header />
      <main>
        <Form onSubmit={handleSubmit} />
        {loading && <Loading />}
        <CharacterWrapper results={data} handlePagination={setPage} />
        <ModalError active={isErrorVisible} closeModal={closeModal} />
      </main>
    </>
  )
}

export default Home
