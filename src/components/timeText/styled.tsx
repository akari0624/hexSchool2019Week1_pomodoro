import React from 'react'
import Styled from 'styled-components'

const TEXT_LINE_HEIGHT = '176px'

const TimeTetxWrapper = Styled.div`
  height: ${TEXT_LINE_HEIGHT};
  width: 100%;
  text-align: center;
`

const TimeText = Styled.div`
  color: #FF4384;
  font-size: 176px;
  line-height: ${TEXT_LINE_HEIGHT};
`

interface Props {
  children: string | Function
}

export const TimeTextStyledComp = ({children}: Props) => (
  <TimeTetxWrapper>
    <TimeText>{children}</TimeText>
  </TimeTetxWrapper>
)
