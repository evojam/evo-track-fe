import { combineReducers } from 'redux'

import { usersReducer } from '../users/reducer'
import { datesReducer } from '../dates/reducer'

export const reducers = combineReducers({
  users: usersReducer,
  dates: datesReducer,
})