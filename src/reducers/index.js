import { combineReducers } from 'redux'
import errors from './errors'
import user from './user'

const reducers = combineReducers({
  errors,
  user
})

export default reducers
