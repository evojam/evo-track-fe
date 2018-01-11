import {
  FETCHING_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from './const'

// TODO: remove when server data ready
const data = require('data/users_fake.json')

export const fetchUsersSuccess = response => {
  console.log(response)
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  }
}

export const fetchUsersError = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  }
}

export const fetchUsers = (onSuccess, onError, startDate, endDate) => {
  fetch(`/api/dashboard?from=${startDate}&to=${endDate}`)
    .then(response => {
      console.log(response)
      onSuccess(response)
    })
    .catch(error => onError(error))
  return {
    type: FETCHING_USERS,
  }
}
