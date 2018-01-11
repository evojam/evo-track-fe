export const changeMinutesToString = minutes => {
  const min = minutes % 60
  return `${Math.floor(minutes / 60)}h${min !== 0 ? ` ${min}min` : '' }`
}
