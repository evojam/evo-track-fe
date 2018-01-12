export const changeMinutesToHours = minutes =>
  `${(Math.floor(minutes / 60) + (minutes % 60) / 60).toFixed(1)}`
