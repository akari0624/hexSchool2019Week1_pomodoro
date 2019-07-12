import {createAction} from 'redux-actions'
import { TodoSagaActionTypes } from '../../../actionTypes/sagas/todo'
import { TodoVO } from '../../../entities/todo'

const addNewTodo = createAction(TodoSagaActionTypes.Add_TODO, (payload: TodoVO) => payload)

const updateTodo = createAction(TodoSagaActionTypes.Update_TODO, (payload: TodoVO) => payload)

export {addNewTodo, updateTodo}