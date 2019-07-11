import { combineReducers } from 'redux'
import {TodosReducerState} from '../reducers/todos/types'
import { TodosReducer } from '../reducers/todos'

export type AppState = {
  todo: TodosReducerState
}

const rootReducer = combineReducers<AppState>({

    todo: TodosReducer
})

export default rootReducer