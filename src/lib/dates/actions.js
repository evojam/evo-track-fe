import {
  CHANGE_DATES,
} from './const'


export const changeDates = (startDate, endDate) => {
  return {
    type: CHANGE_DATES,
    payload: {
      startDate,
      endDate,
    },
  }
}
