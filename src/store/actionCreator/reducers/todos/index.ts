import {createAction} from 'redux-actions'
import { TodoReducerActionTypes } from '../../../actionTypes/reducers/todos'
import { TodoVO } from '../../../entities/todo'

const addNewTodoToCurrTask = createAction(TodoReducerActionTypes.Add_TODO_TO_CURRENT_TASK, (payload: TodoVO) => payload)

const addNewTodoToTodoList = createAction(TodoReducerActionTypes.Add_TODO_TO_TODO_LIST, (payload: TodoVO) => payload)

const updateTodo = createAction(TodoReducerActionTypes.Update_TODO, (payload: TodoVO) => payload)

export {addNewTodoToCurrTask, addNewTodoToTodoList, updateTodo}