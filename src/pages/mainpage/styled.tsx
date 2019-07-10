import React from 'react'
import Styled from 'styled-components'

export const FlexWrapper = Styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  @media (max-width:${props => props.theme.mobileOneColumn}){
    flex-direction: column;
  }
`

export const LeftWrapper = Styled.section`
  width: 70%;
  height: 100%;
  background-color: #FFEDF7;

  @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 100%;
  }
  
`

export const RightWrapper = Styled.div`
  width: 30%;
  height: 100%;
  background-color: #003164;
  position: relative;

  @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 100%;
  }
`
