import React, { useState, useCallback, useEffect } from 'react'
import Styled from 'styled-components'
import { Decimal } from 'decimal.js'
import { useSelector } from 'react-redux'
import {
  FlexWrapper,
  LeftWrapper,
  RightWrapper,
  InputFormLocatedWrapper,
  CountdownTimeTextWrapper,
  ListAreaWrapper,
  NowTaskBarWrapper,
} from './styled'
import MoveCircle from '../../components/movecircle'
import CountdownTimeText from '../../components/countdownTimeText'
import InputForm from './container/InputForm'
import NowTaskBar from './container/NowTaskBar'
import ListArea from '../../components/listArea'
import { AppCondition } from '../../store/reducers/app_configs/types'
import { ThemeType } from '../../themes/theme'
import { AppState } from '../../store/reducers'
import { Todo } from '../../store/reducers/todos/types'

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
  countDownMinutes: Decimal
  toggleAppStatus: () => void
  appConditionNow: AppCondition
}

function MainPage(props: Props) {
  const { countDownMinutes, appTheme, changeTheme, toggleAppStatus, appConditionNow } = props

  const nowTaskTodo = useSelector<AppState, Todo | null>( state => state.todo.nowTaskTodo)
  const isHaveTodosToBeginPomodoro = nowTaskTodo ? true : false
  const specilaText = isHaveTodosToBeginPomodoro ? '' : 'add Some Todos'
  const [isPaused, setIsPaused] = useState(true)
  const [passedSeconds, setPassedSeconds] = useState(0)

  const handleIsPause = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if(!isHaveTodosToBeginPomodoro){
      return
    }
    setIsPaused((isPaused: boolean) => !isPaused)
  }, [isHaveTodosToBeginPomodoro])

  useEffect(() => {
    const doSetPassedSeconds = () => {
      if (!isPaused) {
        setPassedSeconds((passedSeconds: number) => passedSeconds + 1)
      }

      if(Decimal.mul(countDownMinutes, new Decimal(60)).eq(passedSeconds) ){
        if(appConditionNow === AppCondition.ACTIVE){
          changeTheme('break')
        }else{
          changeTheme('active')
        } 
        toggleAppStatus()
        setPassedSeconds(prevState => 0)
      }
    }

    const intervalID = setInterval(doSetPassedSeconds, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [isPaused, countDownMinutes, passedSeconds, props, changeTheme])

  return (
    <FlexWrapper>
      <LeftWrapper>
        <InputFormLocatedWrapper>
          <InputForm />
        </InputFormLocatedWrapper>
        <NowTaskBarWrapper>
          <NowTaskBar />
        </NowTaskBarWrapper>
        <CountdownTimeTextWrapper>
          <CountdownTimeText
            wholeMinutes={countDownMinutes.toNumber()}
            passedSeconds={passedSeconds}
            specialText={specilaText}
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
            tomatoClockMinutes={countDownMinutes.toNumber()}
            outterCanvasColor={isPaused ? appTheme.canvasThemeColor : appTheme.canvasThemeColor}
            isPaused={isPaused}
            passedSeconds={passedSeconds}
          />
        </CanvasWrapDiv>
      </RightWrapper>
    </FlexWrapper>
  )
}

export default MainPage
