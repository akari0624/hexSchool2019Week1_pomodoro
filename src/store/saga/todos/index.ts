
import { all, put, take, call } from 'redux-saga/effects'
import { TodoSagaActionTypes } from '../../actionTypes/sagas/todo'
import { addNewTodo } from '../../actionCreator/reducers/todos'
import {Action} from 'redux-actions'
import { TodoVO } from '../../entities/todo'

function* addNewTodoFlow() {
  while(true){
    const action: Action<TodoVO> = yield take(TodoSagaActionTypes.Add_TODO)
    console.log('in saga generator func')
    yield put(addNewTodo(action.payload))
  }
}


export default function* todosRootSaga() {
  yield all(
    [addNewTodoFlow(),]
  )
}