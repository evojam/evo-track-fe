export const sumUserTime = data => data.reduce((counter, item) => counter + item.minutes, 0)
