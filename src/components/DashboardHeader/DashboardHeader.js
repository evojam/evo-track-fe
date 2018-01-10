import React from 'react'
import { Button } from 'reactstrap'

export const DashboardHeader = props => (
  <div>
    <div>
      <Button color="secondary">
        {'<'}
      </Button>
      <Button color="secondary">
        {'>'}
      </Button>
    </div>
  </div>
)
