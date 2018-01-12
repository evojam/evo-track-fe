import React from 'react'

import { changeMinutesToString } from 'helpers'

import './HeaderCounter.css'

export const HeaderCounter = props => (
  <div className="header-counter">
    <span>Total Hours:</span> {changeMinutesToString(props.sum)}
  </div>
)
