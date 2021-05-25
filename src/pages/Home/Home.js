import Background from 'assets/images/rick-and-morty-background.png'
import Logo from 'assets/images/logo-rick-and-morty.png'
import Form from 'components/Form/Form'
import './Home.scss'

const Home = () => {
  return (
    <main className="home">
      <img
        src={Background}
        alt="draw from the Rick and Morty's universe"
        className="home--background"
      />

      <img
        src={Logo}
        alt="Rick and Morty's logo in blue and yellow"
        className="home--logo"
      />

      <Form />
    </main>
  )
}

export default Home
