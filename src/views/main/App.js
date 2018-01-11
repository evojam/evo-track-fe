import React from 'react'
import { Provider } from 'react-redux'

import { store } from 'lib/store'
import { ConnectedDashboard } from 'views/dashboard'

export const App = () => (
  <Provider store={store}>
    <div className="container">
      <ConnectedDashboard />
    </div>
  </Provider>
)
