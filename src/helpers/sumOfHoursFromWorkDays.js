import moment from 'moment'

import { isHoliday } from './isHoliday'

import { DATE_FORMAT } from 'const'

const getStartDate = date => {
  if (date.format('ddd') !== 'Sun' && date.format('ddd') !== 'Sat' && !isHoliday(date)) return date.format(DATE_FORMAT)
  return getStartDate(date.add(1, 'd'))
}

const getDatesRange = (
  startDate, endDate, dates = [getStartDate(startDate)]) => {

  const next = startDate.add(1, 'd')

  if(next.isAfter(endDate, 'days')) return dates

  return getDatesRange(
    next,
    endDate,
    next.format('ddd') !== 'Sun' && next.format('ddd') !== 'Sat' && !isHoliday(next)
      ? dates.concat(next.format(DATE_FORMAT))
      : dates
  )
}

export const sumOfHoursFromWorkDays = (startDate, endDate) => {
  const range = getDatesRange(moment(startDate, DATE_FORMAT), moment(endDate, DATE_FORMAT))
  return range.length * 8
}
