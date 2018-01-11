import React from 'react'
import { Button } from 'reactstrap'
import moment from 'moment'

import { DateRangePickerWrapper } from '../DateRangeSelector'
import { HeaderCounter } from '../HeaderCounter'

import { DATE_FORMAT } from 'const'

const countShift = (start, end) => moment(end, DATE_FORMAT)
  .diff(moment(start, DATE_FORMAT), 'days')

export const DashboardHeader = props => {

  const onLeftClick = () => {
    const {startDate, endDate} = props.dates
    props.changeDates(
      moment(startDate, DATE_FORMAT).subtract(countShift(startDate, endDate), 'days').format(DATE_FORMAT),
      moment(endDate, DATE_FORMAT).subtract(countShift(startDate, endDate), 'days').format(DATE_FORMAT)
    )
  }

  const onRightClick = () => {
    const {startDate, endDate} = props.dates
    props.changeDates(
      moment(startDate, DATE_FORMAT).add(countShift(startDate, endDate), 'days').format(DATE_FORMAT),
      moment(endDate, DATE_FORMAT).add(countShift(startDate, endDate), 'days').format(DATE_FORMAT)
    )
  }

  return (
    <div>
      <div>
        <Button color="secondary" onClick={onLeftClick}>
          {'<'}
        </Button>
        <Button color="secondary" onClick={onRightClick}>
          {'>'}
        </Button>
        <DateRangePickerWrapper dates={props.dates} changeDates={props.changeDates} />
        <HeaderCounter sum={props.sum}/>
      </div>
    </div>
  )
}