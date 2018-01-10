import {
  FETCHING_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from './const'

// TODO: remove when server data ready
const data = require('data/users_fake.json')

export const fetchUsersSuccess = response => {
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

export const fetchUsers = (onSuccess, onError) => {
  fetch('/api')
    .then(response => onSuccess(response))
    .catch(error => onError(error))
  return {
    type: FETCHING_USERS,
  }
}
