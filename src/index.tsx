import React from 'react'
import MainPage from './pages/mainpage'
import { render } from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {Provider} from 'react-redux'
import { Themes } from './themes'
import {appStore} from './store'

const GlobalStyle = createGlobalStyle`

  html, body {
    width: 100vw;
    height: 100vh;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
`

const rootElement = document.getElementById('root')
render(
  <>
    <GlobalStyle />
    <Provider store={appStore}>
    <ThemeProvider theme={Themes}>
      <MainPage />
    </ThemeProvider>
    </Provider>
  </>,
  rootElement,
)
