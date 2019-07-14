import {createAction} from 'redux-actions'
import { TodoSagaActionTypes } from '../../../actionTypes/sagas/todo'
import { TodoVO } from '../../../entities/todo'

const addNewTodo = createAction(TodoSagaActionTypes.Add_TODO, (payload: TodoVO) => payload)

const updateTodo = createAction(TodoSagaActionTypes.Update_TODO, (payload: TodoVO) => payload)

const updateCurrTaskTomatoCount = createAction(TodoSagaActionTypes.UPDATE_CURR_TASK_TOMATO_COUNT_PLUS_1)

export {addNewTodo, updateTodo, updateCurrTaskTomatoCount}