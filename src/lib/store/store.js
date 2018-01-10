import {createStore} from 'redux'

import {reducers} from './reducers'
import {initialState} from './initial-state'

export const store = createStore(reducers, initialState)
