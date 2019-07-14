import {createAction} from 'redux-actions'
import { TodoReducerActionTypes } from '../../../actionTypes/reducers/todos'
import { TodoVO } from '../../../entities/todo'

const addNewTodoToCurrTask = createAction(TodoReducerActionTypes.Add_TODO_TO_CURRENT_TASK, (payload: TodoVO) => payload)

const addNewTodoToTodoList = createAction(TodoReducerActionTypes.Add_TODO_TO_TODO_LIST, (payload: TodoVO) => payload)

const updateTodo = createAction(TodoReducerActionTypes.Update_TODO, (payload: TodoVO) => payload)

const updateCurrTaskTomatoCount = createAction(TodoReducerActionTypes.UPDATE_CURR_TASK_TOMATO_COUNT_PLUS_1, (payload: TodoVO) => payload)


export {addNewTodoToCurrTask, addNewTodoToTodoList, updateTodo, updateCurrTaskTomatoCount}