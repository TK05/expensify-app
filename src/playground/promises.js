/* eslint-disable prefer-promise-reject-errors */
function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is the returned promise')
    }, 1500);
  })
}

console.log('before')

promise.then((data) => {
  console.log('1', data)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise')
    }, 1500);
  })
}).then((str) => {
  console.log('does this run?', str)
}).catch((error) => {
  console.log(error)
})

console.log('after')
