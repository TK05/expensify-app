export default (expenses) => {
  const total = expenses.reduce(
    (sum, value) => sum + Number(value.amount),
    0
  )

  return total
}
