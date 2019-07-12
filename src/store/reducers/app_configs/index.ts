import { AppConfigStateType } from './types'
import { TodoReducerActionTypes } from '../../actionTypes/reducers/todos'
const getDefaultStateOfAppConfigReducer = (): AppConfigStateType => {
  return {
    waitMinutes: 25,
  }
}

export const AppConfigReducer = (
  state = getDefaultStateOfAppConfigReducer(),
  action: any,
): AppConfigStateType => {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}
