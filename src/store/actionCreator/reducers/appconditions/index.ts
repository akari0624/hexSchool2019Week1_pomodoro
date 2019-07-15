import {createAction} from 'redux-actions'
import { AppConditionReducersActionTypes } from '../../../actionTypes/reducers/appconditions'

const toggleAppCondition = createAction(AppConditionReducersActionTypes.TOGGLE_APP_CONDITION, () => {})

export {toggleAppCondition}