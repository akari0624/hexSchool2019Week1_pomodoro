import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'

import './styles.css'
import MoveCircle from './components/movecircle'
import Styled from 'styled-components'

const CanvasWrapDiv = Styled.div`
  width: 500px;
  height:500px;
`

function App() {
  const [isPaused, setIsPaused] = useState(false)

  const handleIsPause = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsPaused((isPaused: boolean) => !isPaused)
  }, [])

  return (
    <div className="App">
      <CanvasWrapDiv onClick={handleIsPause}>
        <MoveCircle
          width={'500px'}
          height={'500px'}
          outterCanvasColor={isPaused ? '#000000' : '#FF4384'}
        />
      </CanvasWrapDiv>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
