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
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className="list-item__data">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)}
      </h3>
    </Link>
  )
}

ExpenseListItem.propTypes = propTypes
