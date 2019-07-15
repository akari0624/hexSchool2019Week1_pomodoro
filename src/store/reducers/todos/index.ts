import { Action } from 'redux-actions'
import { TodosReducerState, Todo } from './types'
import { TodoReducerActionTypes } from '../../actionTypes/reducers/todos'
const getDefaultStateOfThisTodoReducer = (): TodosReducerState => {
  return {
    todos: [],
    nowTaskTodo: null,
  }
}

export const TodosReducer = (
  state = getDefaultStateOfThisTodoReducer(),
  action: Action<Todo>,
): TodosReducerState => {
  const { type, payload } = action
  switch (type) {
    case TodoReducerActionTypes.Add_TODO_TO_CURRENT_TASK:
      return { ...state, nowTaskTodo: payload }
    case TodoReducerActionTypes.Add_TODO_TO_TODO_LIST:
      return { ...state, todos: [...state.todos, payload] }
    case TodoReducerActionTypes.UPDATE_CURR_TASK_TOMATO_COUNT_PLUS_1:
      return {...state, nowTaskTodo: payload}

    default:
      return state
  }
}
