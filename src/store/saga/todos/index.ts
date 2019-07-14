import { all, put, take, select, call } from 'redux-saga/effects'
import { TodoSagaActionTypes } from '../../actionTypes/sagas/todo'
import {
  addNewTodoToCurrTask,
  addNewTodoToTodoList,
  updateCurrTaskTomatoCount,
} from '../../actionCreator/reducers/todos'
import { Action } from 'redux-actions'
import { TodoVO } from '../../entities/todo'
import { AppState } from '../../reducers'
import { TodosReducerState } from '../../reducers/todos/types'

function* addNewTodoFlow() {
  while (true) {
    const action: Action<TodoVO> = yield take(TodoSagaActionTypes.Add_TODO)
    const toReducerState: TodosReducerState = yield select((state: AppState) => state.todo)
    const { todos, nowTaskTodo } = toReducerState
    if (nowTaskTodo) {
      yield put(addNewTodoToTodoList(action.payload))
    } else {
      // todos.length === 0 && !nowTaskTodo
      yield put(addNewTodoToCurrTask(action.payload))
    }
  }
}

function* updateCurrTaskTomatoCountFlow() {
  while (true) {
    yield take(TodoSagaActionTypes.UPDATE_CURR_TASK_TOMATO_COUNT_PLUS_1)
    const selectTodos = (state: AppState) => state.todo
    const toReducerState: TodosReducerState = yield select(selectTodos)
    const { nowTaskTodo } = toReducerState
    console.log(nowTaskTodo)
    if (nowTaskTodo) {
      const newNowTaskTodo = {...nowTaskTodo, nowTomatoCount: nowTaskTodo.nowTomatoCount + 1}
      yield put(updateCurrTaskTomatoCount(newNowTaskTodo))
    } else {
      throw new Error('there is no curr task to update tomato count !!')
    }
  }
}

export default function* todosRootSaga() {
  yield all([
    addNewTodoFlow(),
    updateCurrTaskTomatoCountFlow(),
  ])
}
