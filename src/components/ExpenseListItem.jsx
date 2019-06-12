import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import moment from 'moment'


const propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
}

export default function ExpenseListItem({
  id, description, amount, createdAt
}) {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)}
        {' '}-{' '}
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  )
}

ExpenseListItem.propTypes = propTypes
