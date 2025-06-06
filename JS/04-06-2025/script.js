// It is an array looping technique used to map values to each element
// It returns new array result for array elements
// Also a higher order function

// let currentAge = [10, 20, 30, 40]
// let ageAfterFive = currentAge.map(ele => {
//   return ele + 5
// })
// console.log(ageAfterFive)

// let names = ["aditya", "anushka", "chetana", "atharva"]

// let Anames = names.map(ele => {
//   return ele.startsWith("a")
// })

// console.log(Anames)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = numbers.reduce((e1, e2) => {
//   return e1 + e2
// })
// console.log(sum)

// Concat
let alpha = ['a', 'b', 'c']
let alphaSum = alpha.reduce((e1, e2) => {
  return e1 + e2
})

console.log(typeof alphaSum)
console.log(alphaSum)