import { TodosReducerState } from './types'
import {TodoReducerActionTypes} from '../../actionTypes/reducers/todos'
const getDefaultStateOfThisTodoReducer = (): TodosReducerState => {
  return {
    todos: []
  }
}


export const TodosReducer = (state= getDefaultStateOfThisTodoReducer(), action: any): TodosReducerState => {

 const {type, payload} = action
  switch(type) {
    
    case TodoReducerActionTypes.Add_TODO:
      return { todos: [...state.todos, payload]}

    default:
      return state
  }

}