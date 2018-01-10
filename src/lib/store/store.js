import { createStore } from 'redux'

import { reducers } from './reducers'
import { initialState } from './initial-state'

export const store = createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // TODO: remove on production
)
