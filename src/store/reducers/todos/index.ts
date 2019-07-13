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
    case TodoReducerActionTypes.Add_TODO:
      if (state.todos.length === 0) {
        return { todos: [...state.todos, payload], nowTaskTodo: payload }
      }
      return { ...state, todos: [...state.todos, payload] }

    default:
      return state
  }
}
