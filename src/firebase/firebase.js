import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach(expense => expenses.push({
//       id: expense.key,
//       ...expense.val()
//     }))
//     console.log(expenses)
//   })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((expense) => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     })
//   })
//   console.log(expenses)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// database.ref('expenses').push({
//   description: 'desc 1',
//   amount: '234.43',
//   note: 'note',
//   createdAt: 234
// })

// database.ref('notes/-LhEQZ_X450ICBdnUWtw').update({
//   title: 'Changed title'
// })

// database.ref('notes').push({
//   title: 'First note',
//   body: 'This is my note'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (error) => {
//   console.log('Error:', error)
// })

// setTimeout(() => {
//   database.ref('job/title').set('asdf')
// }, 3000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(45)
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(50)
// }, 10500);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })

// database.ref().set({
//   name: 'Thomas Kelley',
//   age: 32,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Seattle',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Synchronization succeeded')
// }).catch(() => {
//   console.log('Synchronization failed')
// })

// database.ref().set('This is my data.')
// database.ref('age').set(33)
// database.ref('location/city').set('Denver')

// database.ref('attributes').set({
//   height: 'small',
//   weight: 'tall'
// }).then(() => {
//   console.log('Synchronization succeeded')
// }).catch(() => {
//   console.log('Synchronization failed')
// })

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('Remove succeeded')
//   })
//   .catch((error) => {
//     console.log('Remove failed:', error.message);
//   })

// database.ref('isSingle').set(null)

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Bellvue'
// })
