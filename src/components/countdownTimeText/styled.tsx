import React from 'react'
import Styled from 'styled-components'

const TEXT_LINE_HEIGHT = '176px'

const TimeTetxWrapper = Styled.div`
  height: ${TEXT_LINE_HEIGHT};
  width: 100%;
  text-align: center;
`

const TimeText = Styled.div`
  color: ${ props => props.theme.countDownTextColor};
  font-size: 176px;
  line-height: ${TEXT_LINE_HEIGHT};
  font-family: 'Roboto', sans-serif;
   @media (max-width:${props => props.theme.mobileOneColumn}){
    font-size: 100px;
  }
`

interface Props {
  children: string | Function
}

export const TimeTextStyledComp = ({children}: Props) => (
  <TimeTetxWrapper>
    <TimeText>{children}</TimeText>
  </TimeTetxWrapper>
)
