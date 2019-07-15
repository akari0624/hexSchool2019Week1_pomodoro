import React, { useState } from 'react'
import MainPage from './pages/mainpage'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ActiveThemes, BreakTheme } from './themes/theme'
import { appStore } from './store'
import { StyledComponentGlobalStyle } from './themes/globalStyle'

const RootComp = () => {
  const [activeOrBreak, setActiveOrBreak] = useState('active')

  const changeTheme = (themeName: string) => {
    setActiveOrBreak(prevThemeName =>
      prevThemeName === 'active' ? 'break' : 'active',
    )
  }

  return (
    <>
      <StyledComponentGlobalStyle />
      <Provider store={appStore}>
        <ThemeProvider theme={activeOrBreak === 'active' ? ActiveThemes : BreakTheme}>
          <MainPage changeTheme={changeTheme} appTheme={ activeOrBreak === 'active' ? ActiveThemes : BreakTheme }/>
        </ThemeProvider>
      </Provider>
    </>
  )
}

const rootElement = document.getElementById('root')
render(<RootComp />, rootElement)
