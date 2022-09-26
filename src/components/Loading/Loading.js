import Load from 'assets/images/loading-image.png'

import './Loading.scss'

export const Loading = () => {
  return (
    <section className="loading">
      <img
        src={Load}
        alt="a little square with a scene from Ricky and Morty"
        data-testid="loadingImg"
      />
      <h2 data-testid="loadingText">Loading...</h2>
    </section>
  )
}
