import { sumUserTime } from './sumUserTime'

export const sumAllUsersTime = data => data.reduce((counter, user) => counter + sumUserTime(user.data), 0)
