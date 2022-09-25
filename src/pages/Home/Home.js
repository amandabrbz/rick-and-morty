import { useState } from 'react'
import CharacterWrapper from 'components/CharacterWrapper/CharacterWrapper'
import Form from 'components/Form/Form'
import Header from 'components/Header/Header'
import './Home.scss'

const Home = () => {
  const [results, setResults] = useState(null)

  return (
    <>
      <Header />
      <main>
        <Form onSubmit={setResults} />
        <CharacterWrapper results={results} />
      </main>
    </>
  )
}

export default Home
