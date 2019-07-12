import { combineReducers } from 'redux'
import { TodosReducerState } from '../reducers/todos/types'
import { TodosReducer } from '../reducers/todos'
import { AppConfigStateType } from '../reducers/app_configs/types'
import { AppConfigReducer } from '../reducers/app_configs'

export type AppState = {
  todo: TodosReducerState,
  appConfig: AppConfigStateType,
}

const rootReducer = combineReducers<AppState>({
  appConfig: AppConfigReducer,
  todo: TodosReducer,
})

export default rootReducer
