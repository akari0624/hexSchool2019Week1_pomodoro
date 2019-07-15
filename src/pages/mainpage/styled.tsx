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
  position: relative;
  @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 100%;
  }
  
`

export const RightWrapper = Styled.div`
  width: 30%;
  height: 100%;
  background-color: #003164;

  @media (max-width:${props => props.theme.mobileOneColumn}){
    width: 100%;
  }
`

export const InputFormLocatedWrapper = Styled.div`
  margin-left: 85px;
  margin-top: 48px;
`
export const CountdownTimeTextWrapper = Styled.div`
  margin-top: 164px;
  margin-left: 80px;
  width: 454px;
  height: 206px;
`

export const ListAreaWrapper = Styled.div`
  margin-top: 80px;
  margin-left: 80px;
  width: 454px;
  height: 115px;
  overflow: hidden;
`