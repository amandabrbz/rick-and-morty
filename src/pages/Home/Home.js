import { useState, createContext } from 'react'
import CharacterWrapper from 'components/CharacterWrapper/CharacterWrapper'
import Form from 'components/Form/Form'
import Header from 'components/Header/Header'
import './Home.scss'

export const Context = createContext({ data: '', setData: () => {},  });

const Home = () => {
  const [data, setData] = useState('');

  return (
    <>
      <Header />
      <main>
        <Context.Provider value={{ data, setData }}>
          <Form />
          <CharacterWrapper/>
        </Context.Provider>
      </main>
    </>
  )
}

export default Home
