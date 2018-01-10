import React from 'react'
import { Button } from 'reactstrap'

import { DateRangePickerWrapper } from '../DateRangeSelector'
import { HeaderCounter } from '../HeaderCounter'

export const DashboardHeader = props => (
  <div>
    <div>
      <Button color="secondary">
        {'<'}
      </Button>
      <Button color="secondary">
        {'>'}
      </Button>
      <DateRangePickerWrapper dates={props.dates} />
      <HeaderCounter sum={props.sum} />
    </div>
  </div>
)
