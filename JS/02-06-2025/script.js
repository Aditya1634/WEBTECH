// let trainers = ["Collin", "Pradeep", "Sejal", "Harsha", "Rohit", "Girish"]
// console.log(trainers)

// Doesn't modifies the original array -> makes a copy
// let sql = trainers.slice(0, 2)
// console.log(sql)
// console.log(trainers)

// Modifies the original array
// trainers.splice(2, 2)
// console.log(trainers)
// trainers.splice(2, 2, ...["Aditya", "Anushka"])
// console.log(trainers)

let numbers = [10, 20, 30, 40]
let names = ["Aditya", "Anushka", "Chetana", "Atharva"]

console.log(numbers.indexOf(20))
console.log(names.indexOf("Chetana"))
console.log(names.includes("Rawat"))

let girls = ["anushka", "chetana", "gunjan"]
let boys = ["aditya", "chaitanya", "ninad"]
let group = girls.concat(boys)
let bigGroup = girls.concat(boys, boys)
console.log(group)
console.log(bigGroup)