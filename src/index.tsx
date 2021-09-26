import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// Redux imports
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './app/store'

// Style imports
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'

// Apollo imports
import { ApolloProvider } from '@apollo/client'
import { client } from './app/apollo'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
