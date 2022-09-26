import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import CHARACTER_SEARCH from 'query'

import { Header } from 'components/Header'
import { Form } from 'components/Form'
import { CharacterWrapper } from 'components/CharacterWrapper'
import { Loading } from 'components/Loading'
import { ModalError } from 'components/ModalError'

export const Home = () => {
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
