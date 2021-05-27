import CharacterWrapper from 'components/CharacterWrapper/CharacterWrapper'
import Form from 'components/Form/Form'
import Header from 'components/Header/Header'
import './Home.scss'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Form />
        </section>
        <CharacterWrapper/>
      </main>
    </>
  )
}

export default Home
