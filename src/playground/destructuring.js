// Object desturcturing
// const person = {
//   name: 'Thomas',
//   age: 32,
//   location: {
//     city: 'Seattle',
//     temp: 69
//   }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { temp: temperature, city } = person.location
// console.log(`It's ${temperature} in ${city}`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher
// console.log(publisherName)

// Array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']
const [, city, state = 'New York'] = address
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, smallPrice, mediumPrice, largePrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)
