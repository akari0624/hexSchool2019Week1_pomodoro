import React from 'react'
import MainPage from './pages/mainpage'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import {Provider} from 'react-redux'
import { ActiveThemes } from './themes/theme'
import {appStore} from './store'
import { StyledComponentGlobalStyle } from './themes/globalStyle'


const rootElement = document.getElementById('root')
render(
  <>
    <StyledComponentGlobalStyle />
    <Provider store={appStore}>
    <ThemeProvider theme={ActiveThemes}>
      <MainPage />
    </ThemeProvider>
    </Provider>
  </>,
  rootElement,
)
