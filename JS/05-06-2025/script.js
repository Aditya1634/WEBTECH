//05 JUNE 2025
//JAVASCRIPT IS OBJECT BASED LANGUAGE
//OBJECTS IN JAVASCRIPT :: It is a real time entity and datatype in javascript where 
// we can store the data in key value pair.
//Left hand side is used to give keys and right hand side will store the values.
//And for both the key value pair together we call it object properties
//In object we can store any kind of data such as number, string , boolean, undefined ,
// array and nested object too.

//Object named user and user2 have being created in which the SET OF keys should be same and 
// object names must differ.
//Also after each value separator is must
//FILTER METHOD IS NOT VALID FOR OBJECT IT IS VALID FOR ARRAY ONLY.
// THEREFORE WE WILL USE OBJECT ARRAY CONCEPT.
let user ={
    Username : "Pranavi",
    hobby : ["painting" ,"playing"],
    addr :{
        native : "panhada",
        dist : "kolhapur"
    } 
}

let user2 ={
    Username : "Pranjal",
    hobby : ["travelling" ,"music"],
}

//we can access the object property by using the .(dot) notation
console.log(user.hobby);
console.log(user.addr.dist);
console.log(user2.hobby);

//OBJECT is being converted into array to use the filter method
let trainers =[
    {Name :"Avinash", sub :"java", gender :"male"},
    {Name :"Harsha", sub :"java", gender :"male"},
    {Name :"Sejal", sub :"java", gender :"female"},
    {Name :"Collin", sub :"SQL", gender :"male"},
    {Name :"Pradeep", sub :"SQL", gender :"male"},
]
console.log(trainers);

let JavaTrainers = trainers.filter((ele)=>{
    return ele.gender =="female"
})
console.log(JavaTrainers);

//CRUD OPERATIONS ON OBJECT
//1. ADD the new property inside current object by creating new key 
// here :(colon) wont work we need to give =(eqauls to) 
user.password = 1250
console.log(user);

//2.UPDATE the current property by using existing key
user.addr.place ="Durga cafe"
console.log(user);

//3.DELETE the object proeprty by using delete keyword
delete user.hobbies
console.log(user);