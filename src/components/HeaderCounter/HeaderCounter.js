import React from 'react'

import { changeMinutesToString } from 'helpers'

import './HeaderCounter.css'

export const HeaderCounter = props => (
  <div className="header-counter">
    Total Hours: {changeMinutesToString(props.sum)}
  </div>
)
