import React from 'react'
import Styled from 'styled-components'

const TEXT_LINE_HEIGHT = '176px'

const TimeTetxWrapper = Styled.div`
  height: ${TEXT_LINE_HEIGHT};
  width: 100%;
  text-align: center;
`

type TimeTextProps = {
  textLength: number
}

const TimeText = Styled.div<TimeTextProps>`
  color: ${ props => props.theme.countDownTextColor};
  font-size: ${props => props.textLength > 5 ? '50px' : '176px'};
  line-height: ${TEXT_LINE_HEIGHT};
  font-family: 'Roboto', sans-serif;
   @media (max-width:${props => props.theme.mobileOneColumn}){
    font-size: 100px;
  }
`

interface Props {
  children: () => string
}

const renderBigOrSmallText = (textToRender: string): JSX.Element => {
  const textLength = textToRender.length
  return <TimeText textLength={textLength}>{textToRender}</TimeText>
}

export const TimeTextStyledComp = ({children}: Props) => (
  <TimeTetxWrapper>
    {renderBigOrSmallText(children())}
  </TimeTetxWrapper>
)
