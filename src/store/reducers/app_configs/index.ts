import { AppConfigStateType, AppCondition } from './types'
import { AppConditionReducersActionTypes } from '../../actionTypes/reducers/appconditions'

const getDefaultStateOfAppConfigReducer = (): AppConfigStateType => {
  return {
    taskOneTomatowaitMinutes: 25,
    betweenTomatoTaskBreakMinutes: 5,
    appNowStatus: AppCondition.ACTIVE,
  }
}

export const AppConfigReducer = (
  state = getDefaultStateOfAppConfigReducer(),
  action: any,
): AppConfigStateType => {
  const { type, payload } = action
  switch (type) {
    case AppConditionReducersActionTypes.TOGGLE_APP_CONDITION:
      return {...state, appNowStatus:  state.appNowStatus === AppCondition.ACTIVE ?  AppCondition.BREAK : AppCondition.ACTIVE}
    default:
      return state
  }
}
