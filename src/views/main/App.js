import React from 'react'
import {Provider} from 'react-redux'
import { Button } from 'reactstrap'

import {store} from 'lib/store'

export const App = () => (
  <Provider store={store}>
    <Button color="danger">Welcome reactstrap! I do nothing.</Button>
  </Provider>
)
