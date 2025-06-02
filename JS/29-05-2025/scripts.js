// Arrow Function
/*

    Syntax:
    let var_name = () => {

    }
    Definition:
    Arrow Fucntion: It is a modern function which introduced in ES6 concept and it is known for its lesser syntax.
    And it is mostly used in React.js.
*/


let arrow = () =>{
    console.log("Hii in arrow function.");
}
arrow()

let numbers = [8, 5, 99, 45, 78, 23, 96, 47, 68, 92, 95, 1, 25]
let EvenNum = numbers.filter((ele) => {
    return ele % 2 == 0;
})
console.log(EvenNum);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Nested Function

/*
    Nested Fucntion: The function inside anither function is called as naested Function.
    Note: Not too many function inside one function.

*/

function parent(){
    console.log("in parent function");
    // Declaring the child function inside parent function.
    function child() {
        console.log("in child function");
    }
    child()
    parent()
}
parent()
// Note: 
// We can call parent function or its properties in child function which is called recursion with maximum call stack memory exceeded.
// But we cannot access the child function or its property inside parent function which gives an error of not defined.

//----------------------------------------------------------------------------------------------------------------------------------------------------------


//Scopes in JavaScript

var Name = "Prajakta"
console.log(Name);

function printName(surname) {
    let BroName = "Chetan"
    console.log(BroName + " " + surname);    

    let name = "Gayatri"
    console.log(name);
    
}

printName("Khaire")
console.log(Name);
console.log(name);
console.log(BroName);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

function parent(){
    let Name = "Manasi"
    console.log(Name);
    function child(){
        console.log("Hello "+ Name);
        let Name2 = "Rahul"
        console.log(Name2);
    }
    child()
    console.log(Name2);
}
parent()

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Lexical Scope

/*
    Lexical Scope defines the accessibility of variables and fucntions depending on their location in the source code.
    Variables and functions have different levels of scope:
*/

// Global Scope:

var place = "Pune"
console.log(place);
{
    console.log(place);
}
console.log(place);

//Local Scope: We can access the variable value or property in that specific block only.

var Name = "Prajakta"
console.log(Name);

function printName(surname) {
    let BroName = "Chetan"
    console.log(BroName + " " + surname);    

    let name = "Gayatri"
    console.log(name);
    
}

printName("Khaire")
console.log(Name);
console.log(name); // Will give you output as blank statement becuase of name variable
console.log(BroName); // Will give you output as not defined.




