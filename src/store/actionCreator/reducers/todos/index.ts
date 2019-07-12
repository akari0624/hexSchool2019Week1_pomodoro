import {createAction} from 'redux-actions'
import { TodoReducerActionTypes } from '../../../actionTypes/reducers/todos'
import { TodoVO } from '../../../entities/todo'

const addNewTodo = createAction(TodoReducerActionTypes.Add_TODO, (payload: TodoVO) => payload)

const updateTodo = createAction(TodoReducerActionTypes.Update_TODO, (payload: TodoVO) => payload)

export {addNewTodo , updateTodo}