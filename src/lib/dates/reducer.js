import moment from 'moment'
import { DATE_FORMAT } from "const"

import {
  CHANGE_DATES,
} from "./const";

const INITIAL_STATE = {
  startDate: moment().startOf('month').subtract(2, 'months').format(DATE_FORMAT),
  endDate: moment().endOf('month').format(DATE_FORMAT),
}

export function datesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case CHANGE_DATES:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      }

    default: return state
  }
}
