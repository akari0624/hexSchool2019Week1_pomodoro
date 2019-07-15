
import { all, put, take, call } from 'redux-saga/effects'
import { AppConditionSagaActionTypes } from '../../actionTypes/sagas/appconditions'
import { toggleAppCondition } from '../../actionCreator/reducers/appconditions'
import {Action} from 'redux-actions'

function* toggleAppConditionFlow() {
  while(true){
    yield take(AppConditionSagaActionTypes.TOGGLE_APP_CONDITION_SAGA)
    yield put(toggleAppCondition())
  }
}


export default function* appconditionsRootSaga() {
  yield all(
    [toggleAppConditionFlow(),]
  )
}