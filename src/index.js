import React from 'react'
import ReactDOM from 'react-dom'
import 'assets/styles/reset.scss'
import 'assets/styles/global.scss'
import { Home } from 'pages/Home'

import { ApolloProvider } from '@apollo/client'

import client from 'service'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)