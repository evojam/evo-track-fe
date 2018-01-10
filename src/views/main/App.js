import React from 'react'
import {Provider} from 'react-redux'

import {store} from 'lib/store'

import './App.css'

export const App = () => (
  <Provider store={store}>
    <div>element</div>
  </Provider>
)
