import { AppConfigStateType, AppCondition } from './types'
import { AppConditionReducersActionTypes } from '../../actionTypes/reducers/appconditions'
import {Decimal} from 'decimal.js'

const getDefaultStateOfAppConfigReducer = (): AppConfigStateType => {
  return {
    taskOneTomatowaitMinutes: new Decimal(25),
    betweenTomatoTaskBreakMinutes: new Decimal(5),
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
