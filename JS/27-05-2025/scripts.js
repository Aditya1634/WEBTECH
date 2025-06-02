// Functions in JavaScript

function add(a,b){
    console.log(a+b);
}

add(10,20)
add(100,200)

//--------------------------------------------------------------------------------------------------------------------

let age = 21
let salary = 3242434354
let weight = 45.5
console.log(typeof weight + typeof age + salary)

let Name = "Saniya"
let Sen = "I'm the great man!"
let char = "78"
console.log(typeof Name + typeof Sen + typeof char);

let isMarried = false
console.log(typeof isMarried);
let id;
console.log(typeof id);
let nothing = null
console.log(typeof nothing);


// -----------------------------------------------------------------------------------------------------------------

let money = BigInt ("123456789012345")
console.log(typeof money);

let fav = 14
let fav2 = 14
console.log(fav == fav2);

let num = Symbol(21)
let num2 = Symbol(21)
console.log(num == num2);

//------------------------------------------------------------------------------------------------------------------

let person = {
    Name : "Neha",
    salary : Symbol(26226),
    isMarried : false
}

let person2 = {
    Name : "Samyak",
    salary : Symbol(200000000),
    isMarried : true
}

console.log(person.salary == person2.salary);

//------------------------------------------------------------------------------------------------------------------