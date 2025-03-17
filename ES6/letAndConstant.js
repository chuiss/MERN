// let and const are added in es6

/*
1.Scope
var - is funcional scope 
let the const are lexical scope

*/

{
    var name = "Var Name"
    let let_name = "let Name"
    const const_name = "Const Name"


    console.log(name)
    console.log(let_name)
    console.log(const_name)

}
// cannot be access outside of the scope
// console.log(name)
// console.log(let_name)
// console.log(const_name)

/*
2. Assigment and Declaration
var - variable can be declared and assignd as many times as possible
let - can be declared for once and assignment of new values can be done any time 
const - can't be re declared and needs to assign the value as soon as we define it, also value cant be updated

*/

{
var name = "Var Name" // multiple re-declarations
//
let let_name; // declare and assign
let_name = "let Name"

// const const_name; // we need to assign as soon as we declare
// const_name= "Const Name"

const const_name = "Const Name"

console.log(let_name)

}