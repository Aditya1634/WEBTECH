// three ways to write objects in Js
// 1. By Using Literal

// let obj = {
//   name: "Aditya",
//   age: 21
// }

// 2. BY new constructor
// let obj2 = new Object();
// obj2.name = "Aditya"
// obj2.age = 21

// 3. By new constructor with function
// function User(name, password) {
//   this.name = name;
//   this.password = password
// }

// let user1 = new User("Aditya", 123456)
// let user2 = new User("Atharva", 323456)

// console.log(obj)
// console.log(obj2)
// console.log(user1)
// console.log(user2)

let trainers = [
  {
    name: "Harsha",
    id: 1,
    subject: ["Java", "Selenium"],
    sal: 700000
  },
  {
    name: "Rohit",
    id: 2,
    subject: ["HTML", "CSS", "JS"],
    sal: 700000
  },
  {
    name: "Hariprasanth",
    id: 3,
    subject: ["ADV Java"],
    sal: 600000
  },
  {
    name: "Vijay",
    id: 4,
    subject: ["Testing", "Manual"],
    sal: 800000
  },
  {
    name: "Chandrashekar",
    id: 5,
    subject: ["Communication"],
    sal: 400000
  },
  {
    name: "Collin",
    id: 6,
    subject: ["DQL", "sql"],
    sal: 900000
  }
]

let sameSalary = trainers.filter(e => {
  return e.sal == 700000
})
console.log(sameSalary)

let newTrainers = trainers.map(e => {
  e.branch = "Wakad"
  return e
})

console.log(newTrainers)

trainers.forEach((e) => {
  if (e.name == "Harsha") e.name = "harshaWardhan"
}
)
console.log(trainers)