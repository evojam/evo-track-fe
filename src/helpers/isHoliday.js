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

export const isHoliday = date => CONSTANT_HOLIDAYS.indexOf(date.format('MM-DD')) >= 0
