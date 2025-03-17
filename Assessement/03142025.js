//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

/*
semicolon is optional
dynamic typing - assigning any data types to the variable
autocasting - allows to reassign and change the data type at the moment of reassign
cls - can be used to clear terminal data
ctrl + c - to stop idenfinite excution
for, foreach, whole, do-while are available loop in JS
arrays are dynamic: var numbers = [1,2,3,3]
identifiers/ variable - case sensitive
prototype - is an object from other object inherite properties. every function in Javascript has a prototype property which is an object to build
            inheritance
*/


//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

var variable = "Robert";
console.log(variable, typeof variable); // "Robert" - string
var variable = 0.0266;
console.log(variable, typeof variable); // 0.0266 - number
var variable = false;
console.log(variable, typeof variable); // false - boolean
var variable = {myname : "testme"};
console.log(variable, typeof variable); //  {myname : "testme"} - object 
var variable = 251666665;
console.log(variable, typeof variable); // 2516666665 - number
var variable = undefined;
console.log(variable, typeof variable); // undifined - undifined 
var variable = "Robert Jr";
console.log(variable, typeof variable); // Robert Jr - string
var variable = null;
console.log(variable, typeof variable); // null object (JavaScript quirk)
var variable = {};
console.log(variable, typeof variable); // {} - object 
var variable = -32767;
console.log(variable, typeof variable); // -327676 - number


//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function showInfor(firstName, lastName, age){
    console.log("firstName: " +firstName)
    console.log("lastName:  " +lastName)
    console.log("age:  " +age)
    }


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

function doaddition (x1,x2,x3){
    return x1 + x2 + x3;
}
console.log(doaddition(2,3,4)); //9
console.log(doaddition(2)); // NaN
console.log(doaddition(2.3,3)); //NaN
console.log(doaddition("first", 2, "three")); // "first2three"
//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
function Encapsualtion(){
    var accountName = "Banking Account"; //public

    var password = "123456SDFEW" //private

    var getAccountName = function (pass, showAccount){
        if (password == pass && showAccount){
            return{
                accountName,
            }
        } else {
            return "Authorization Failed"
        }
    }
    return getAccountName;

}
// b. hoisting, 
console.log("Before, ", a); 
var a = 10;
console.log("after: ", a); 


function hoistExample(){
    var a;
    a =10;
}
hoistExample();
console.log(a);
// c. constructor function
function Area(length, width){
    this.length = length,
    this.width = width,

    this.Square = function(){
        return this.length + this.width
    }
}

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
/* 
Call and Apply are the extended functions present in the function definition, which allows to change or update the scope of the given function
--by passing the object as a parameter 
--whenever we set object and invoke call or apply it is immediately executes the function with the scope of new object passed
Call - function.call is used to accept first parameter as an object which we want to apply as scope in the function, and second and subsequent
-- parameters will be used to pass function parameters
Apply - function.apply is used to accept fisrt parameter as an object  which we want to apply as scope in the function, 
-- but the second parameter will be an array of data that we need to pass as function own parameter

Bind is a function extentsion present similar to call and apply but can be used in case of delayed exection 
--in object (scope and context) we will be able to use bind
-- bind doesn't execuate immidiately but is retained as scope in the call back function



*/
//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
var Student  = {
    SName: "Hansdsone",
    SID : 124568,
    School : "UW"

}
//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?
//purpose of null prototype: 
//Q9. How do we merge different objects properties using Object class function

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned