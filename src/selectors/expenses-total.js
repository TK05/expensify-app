export default (expenses) => {
  let expensesTotal = 0
  expenses.forEach((expense) => {
    expensesTotal += Number(expense.amount)
  })

  return expensesTotal
}
