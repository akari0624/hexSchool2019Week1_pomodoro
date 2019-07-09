import React, { useState, useCallback, useEffect } from 'react'
import { render } from 'react-dom'

import './styles.css'
import MoveCircle from './components/movecircle'
import Styled from 'styled-components'

const CanvasWrapDiv = Styled.div`
  width: 500px;
  height:500px;
`

const countDownMinutes = 25

let countDownAllMillSeconds = countDownMinutes * 60 // 1500 秒

function App() {
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
    <div className="App">
      <div> 過了{passedSeconds}秒</div>
      <CanvasWrapDiv onClick={handleIsPause}>
        <MoveCircle
          width={'500px'}
          height={'500px'}
          outterCanvasColor={isPaused ? '#FF4384' : '#FF4384'}
          isPaused={isPaused}
          passedSeconds={passedSeconds}
        />
      </CanvasWrapDiv>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
