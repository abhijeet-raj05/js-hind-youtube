// Primitive [call by value]

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type [Non Primitive]: memory me reference direct allocate hota hai.

// Eg. Array, Objects, Functions

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/ 
const id_01 = Symbol('1234')
const id_02 = Symbol('1234')

// console.log(id_01);
// console.log(id_02);

console.log(id_01 === id_02);

const bigNumber = 46584123846513279846513n

console.log(bigNumber);

const heros = ["Shaktimaan","Superman","Batman"] //arrays

//object: 

let myObject = {
       name: "Abhijeet",
       age: 18
}
// console.log(myObject);

const myFunction = function(){
       console.log("Hello World");
       
}

console.log(typeof myFunction);

