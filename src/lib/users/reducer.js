import {
  FETCHING_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from './const'

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
}

export function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCHING_USERS:
      return {
        ...state,
        loading: true,
      }

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case FETCH_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default: return state
  }
}
