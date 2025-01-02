// Primitive [call by value]

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type [Non Primitive]: memory me reference direct allocate hota hai.

// Eg. Array, Objects, Functions

//JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const id_01 = Symbol('1234')
const id_02 = Symbol('1234')

console.log(id_01);
console.log(id_02);

console.log(id_01 === id_02);
