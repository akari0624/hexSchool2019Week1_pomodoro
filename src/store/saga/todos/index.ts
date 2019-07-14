import { all, put, take, select, call } from 'redux-saga/effects'
import { TodoSagaActionTypes } from '../../actionTypes/sagas/todo'
import {
  addNewTodoToCurrTask,
  addNewTodoToTodoList,
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

export default function* todosRootSaga() {
  yield all([addNewTodoFlow()])
}
