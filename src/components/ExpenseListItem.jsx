import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


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
      <p>{amount} - {createdAt}</p>
    </div>
  )
}

ExpenseListItem.propTypes = propTypes