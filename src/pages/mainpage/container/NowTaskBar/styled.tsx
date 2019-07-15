import React from 'react'
import Styled from 'styled-components'

export const MainTaskBaWrapper = Styled.div`
  width: 445px;
  height: 48px;
  display: flex;
`



export const ToggleDoneCirclieWrapper = Styled.div`
  width: 48px;
  height: 48px;

  & > i {
    font-size: 48px;
    font-weight: normal;
    color: #003164;
  }
`

export const LeftWrapper = Styled.div`
  width: 397px;
  height: 48px;
  color: #003164
`

export const TodoDescWrapper = Styled.div`
  width: 348px;
  height: 28px;
  font-size: 24px;
  text-align: left;
  text-transform: uppercase;
`

export const TomatoCountWrapper = Styled.div`
  width: 348px;
  height: 20px;
`