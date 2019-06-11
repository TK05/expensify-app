import moment from 'moment'


const filters = {
  text: '',
  sortBy: 'date',
  startDateObj: moment(0),
  endDateObj: moment(0).add(3, 'days')
}

const altFilters = {
  text: 'bills',
  sortBy: 'amount',
  startDateObj: moment(0),
  endDateObj: moment(0).add(3, 'days')
}

export { filters, altFilters }
