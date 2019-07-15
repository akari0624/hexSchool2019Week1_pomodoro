import React from 'react'
import { ThemeType } from '../../themes/theme'
import { useSelector, useDispatch } from 'react-redux'
import { Decimal } from 'decimal.js'
import {
  AppConfigStateType,
  AppCondition,
} from '../../store/reducers/app_configs/types'
import { toggleAppCondition } from '../../store/actionCreator/sagas/appconditions'
import { AppState } from '../../store/reducers'
import MainPage from './mainpage'
interface Props {
  changeTheme: (string) => void
  appTheme: ThemeType
}

export default function MainPageWrapper(props: Props) {
  const appConfig = useSelector<AppState, AppConfigStateType>(
    appState => appState.appConfig,
  )

  const dispatcher = useDispatch()

  const toggleAppStatus = () => dispatcher(toggleAppCondition())

  let countDownMinutes: Decimal
  const appConditionNow = appConfig.appNowStatus
  if (appConditionNow === AppCondition.ACTIVE) {
    countDownMinutes = appConfig.taskOneTomatowaitMinutes
  } else {
    console.log('break...')
    countDownMinutes = appConfig.betweenTomatoTaskBreakMinutes
  }

  return (
    <MainPage
      changeTheme={props.changeTheme}
      appTheme={props.appTheme}
      countDownMinutes={countDownMinutes}
      toggleAppStatus={toggleAppStatus}
      appConditionNow={appConditionNow}
    />
  )
}
