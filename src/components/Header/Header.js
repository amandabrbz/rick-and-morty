import Logo from 'assets/images/logo-rick-and-morty.png'

import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <img
        src={Logo}
        alt="Rick and Morty's logo in blue and yellow"
        className="header--logo"
      />
    </header>
  )
}
