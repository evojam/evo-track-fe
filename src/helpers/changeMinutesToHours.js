export const changeMinutesToHours = minutes =>
  `${Math.floor(minutes / 60)}.${10 * (minutes % 60) / 60}h`
