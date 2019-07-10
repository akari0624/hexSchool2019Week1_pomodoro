
import baseStyled, { ThemedStyledInterface } from 'styled-components'

export type ThemeType = {
  mobileOneColumn: string,
  inputTextColor: string,
}


const ActiveThemes: ThemeType = {mobileOneColumn: '550px', inputTextColor: '#FF4384'}

const BreakTheme: ThemeType = {mobileOneColumn: '550px', inputTextColor: '#00A7FF'}

export const styled = baseStyled as ThemedStyledInterface<ThemeType>;

export { ActiveThemes, BreakTheme }