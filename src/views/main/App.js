import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'lib/store'
import { Dashboard } from 'views/dashboard'

export const App = () => (
  <Provider store={store}>
    <Dashboard />
  </Provider>
)
