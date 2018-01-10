import moment from 'moment'

const INITIAL_STATE = {
  startDate: moment().startOf('month').format('DD-MM-YYYY'),
  endDate: moment().endOf('month').format('DD-MM-YYYY'),
}

export function datesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state
  }
}
