import React from 'react'
import MainPage from './pages/mainpage'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import {Provider} from 'react-redux'
import { Themes } from './themes'
import {appStore} from './store'
import { StyledComponentGlobalStyle } from './themes/globalStyle'


const rootElement = document.getElementById('root')
render(
  <>
    <StyledComponentGlobalStyle />
    <Provider store={appStore}>
    <ThemeProvider theme={Themes}>
      <MainPage />
    </ThemeProvider>
    </Provider>
  </>,
  rootElement,
)
