import uuidv4 from 'uuid/v4'


export const addExpense = (
  {
    description = '',
    note = '',
    amount = '0',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount: Number(amount).toFixed(2),
    createdAt
  }
})

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
