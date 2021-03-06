import moment from 'moment'

const expenses = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: '1.95',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: '1095.00',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: '45.00',
  createdAt: moment(0).add(4, 'days').valueOf()
}]

const calcTotal = () => {
  let total = 0
  expenses.forEach((expense) => {
    total += Number(expense.amount)
  })
  return total
}

const expensesTotal = calcTotal()

export { expenses as default, expensesTotal }
