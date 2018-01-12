export const sumAllByDay = data => {
  return data.reduce((aggregation, user) => {
    user.data.map((item, index) => {
      aggregation[index]
        ? aggregation[index] = aggregation[index] + item.minutes
        : aggregation[index] = item.minutes
      return null
    })
    return aggregation
    }, [])
}
