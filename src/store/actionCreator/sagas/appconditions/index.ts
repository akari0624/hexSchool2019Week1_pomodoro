import {createAction} from 'redux-actions'
import { AppConditionSagaActionTypes } from '../../../actionTypes/sagas/appconditions'

const toggleAppCondition = createAction(AppConditionSagaActionTypes.TOGGLE_APP_CONDITION_SAGA, () => {})

export {toggleAppCondition}