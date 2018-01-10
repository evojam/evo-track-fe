import { FETCH_USER_SUCCESS } from './const'

export function usersReducer(state = {}, action) {
  switch (action.type) {

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: [],
      }

    default: return state
  }
}
