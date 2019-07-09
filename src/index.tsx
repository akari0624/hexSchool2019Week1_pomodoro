import React from 'react'
import MainPage from './pages/mainpage'
import { render } from 'react-dom'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
    <MainPage />
  </>,
  rootElement,
)
