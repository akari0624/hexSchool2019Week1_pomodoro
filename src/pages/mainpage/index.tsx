import React, { useState, useCallback, useEffect } from 'react'
import Styled from 'styled-components'
import { useSelector } from 'react-redux'
import {
  FlexWrapper,
  LeftWrapper,
  RightWrapper,
  InputFormLocatedWrapper,
  CountdownTimeTextWrapper,
  ListAreaWrapper,
} from './styled'
import MoveCircle from '../../components/movecircle'
import CountdownTimeText from '../../components/countdownTimeText'
import InputForm from './container/InputForm'
import ListArea from '../../components/listArea'
import { AppState } from '../../store/reducers'
import {AppConfigStateType as AppConfig} from '../../store/reducers/app_configs/types'
import { ThemeType } from '../../themes/theme'

const CanvasWrapDiv = Styled.div`
  position: absolute;
  width: 550px;
  height:550px;
  z-index: 3000;
  margin-left: -275px;
  margin-top: calc(50vh - 540px / 2);

  @media (max-width:${props => props.theme.mobileOneColumn}){
     margin-left: 0px;
     margin-top: calc(50vh - 540px);
  }
  
`

interface Props {
  changeTheme: (string) => void
  appTheme: ThemeType
}

function MainPage(props: Props) {
  const countDownMinutes = useSelector<AppState, number>(appState => appState.appConfig.waitMinutes)
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

      if(countDownMinutes * 60 === passedSeconds){
        props.changeTheme('break')
      }
    }

    const intervalID = setInterval(doSetPassedSeconds, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [isPaused, countDownMinutes, passedSeconds, props])

  return (
    <FlexWrapper>
      <LeftWrapper>
        <InputFormLocatedWrapper>
          <InputForm />
        </InputFormLocatedWrapper>
        <CountdownTimeTextWrapper>
          <CountdownTimeText
            wholeMinutes={countDownMinutes}
            passedSeconds={passedSeconds}
          />
        </CountdownTimeTextWrapper>
        <ListAreaWrapper>
          <ListArea />
        </ListAreaWrapper>
      </LeftWrapper>
      <RightWrapper>
        <CanvasWrapDiv onClick={handleIsPause}>
          <MoveCircle
            width={'540px'}
            height={'540px'}
            tomatoClockMinutes={countDownMinutes}
            outterCanvasColor={isPaused ? props.appTheme.canvasThemeColor : props.appTheme.canvasThemeColor}
            isPaused={isPaused}
            passedSeconds={passedSeconds}
          />
        </CanvasWrapDiv>
      </RightWrapper>
    </FlexWrapper>
  )
}

export default MainPage
