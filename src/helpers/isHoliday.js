import moment from 'moment'

import { DATE_FORMAT } from 'const'

// MM-DD
const CONSTANT_HOLIDAYS = [
  '01-01',
  '01-06',
  '05-01',
  '05-03',
  '08-15',
  '11-01',
  '11-11',
  '12-25',
  '12-26',
]

const A = 24
const B = 5

const checkMovingHoliday = date => {
  const year = Number(date.format('YYYY'))
  const a = year % 19
  const b = year % 4
  const c = year % 7
  const d = (a * 19 + A) % 30
  const e = (2 * b + 4 * c + 6 * d + B) % 7
  const easter = moment(`22-03-${year}`, 'DD-MM-YYYY').add(d + e, 'd')

  const holidays = [
    easter.format(DATE_FORMAT),
    easter.add(1, 'd').format(DATE_FORMAT),
    easter.subtract(1, 'd').add(7, 'w').format(DATE_FORMAT),
    easter.subtract(7, 'w').add(8, 'w').add(4, 'd').format(DATE_FORMAT)
  ]

  return holidays.indexOf(date.format(DATE_FORMAT)) >= 0
}

export const isHoliday = date => CONSTANT_HOLIDAYS.indexOf(date.format('MM-DD')) >= 0
  ? true
  : checkMovingHoliday(date)
