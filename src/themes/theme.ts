
import baseStyled, { ThemedStyledInterface } from 'styled-components'

export type ThemeType = {
  mobileOneColumn: string,
  inputTextColor: string,
  countDownTextColor: string,
  canvasThemeColor: string,
  leftWrapperBgColor: string,
}


const ActiveThemes: ThemeType = {mobileOneColumn: '550px', inputTextColor: '#FF4384', countDownTextColor: '#FF4384', canvasThemeColor: '#FF4384', leftWrapperBgColor: '#FFEDF7'}

const BreakTheme: ThemeType = {mobileOneColumn: '550px', inputTextColor: '#00A7FF', countDownTextColor: '#00A7FF', canvasThemeColor: '#00A7FF', leftWrapperBgColor: '#E5F3FF'}

export const styled = baseStyled as ThemedStyledInterface<ThemeType>;

export { ActiveThemes, BreakTheme }