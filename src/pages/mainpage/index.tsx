import React, { useState, useCallback, useEffect } from 'react'
import MoveCircle from '../../components/movecircle'
import Styled from 'styled-components'
import { FlexWrapper, LeftWrapper, RightWrapper } from './styled'

const CanvasWrapDiv = Styled.div`
  position: absolute;
  width: 550px;
  height:550px;
  z-index: 3000;
  margin-left: -275px;
  margin-top: calc(50vh - 540px / 2);
`

const countDownMinutes = 25

function MainPage() {
  const [isPaused, setIsPaused] = useState(true)
  const [passedSeconds, setPassedSeconds] = useState(0)

  const handleIsPause = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsPaused((isPaused: boolean) => !isPaused)
  }, [])

  useEffect(() => {
    const doSetPassedSeconds = () => {
      if (!isPaused) {
        setPassedSeconds((passedSeconds: number) => passedSeconds + 1)
      }
    }

    const intervalID = setInterval(doSetPassedSeconds, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [isPaused])

  return (
    <FlexWrapper>
      <LeftWrapper>
        <div> 過了{passedSeconds}秒</div>
      </LeftWrapper>
      <RightWrapper>
        <CanvasWrapDiv onClick={handleIsPause}>
          <MoveCircle
            width={'540px'}
            height={'540px'}
            outterCanvasColor={isPaused ? '#FF4384' : '#FF4384'}
            isPaused={isPaused}
            passedSeconds={passedSeconds}
          />
        </CanvasWrapDiv>
      </RightWrapper>
    </FlexWrapper>
  )
}

export default MainPage