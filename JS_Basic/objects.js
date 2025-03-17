// Object as class, we can create an object with details of key, value pair
// An object is the reference pointer holds the value via properties defined inside the object
// new Object() - instance object, Object.create()
// {} - this is and object

//create an object with some properties and functions to explain the behaviour
var Employee = {
    FirstName : "Jason",
    Address : "Somewhere in US",
    EmpId : "007",
    getEmployeeDetails : function () {
        //return  this.FirstName +" "+this.Address +" "+this.EmpId;
        return `First Name is - ${this.FirstName} 
                Address Is - ${this.Address} 
                Designation is - ${this.designation}`
    }
}

//var empObj = new Employee()
//console.log(Employee.getEmployeeDetails())

//we can use this class directly with Employee variable or can use it to create new class

//1. By using new Object 

// var SoftwareEngineer = new Object(Employee) //create a constructor of the class and allow inheritance and polymorphism

// SoftwareEngineer.FirstName = "Mike"
// SoftwareEngineer.designation = "Software Engineer"

// console.log(Employee.getEmployeeDetails())
// console.log(SoftwareEngineer.getEmployeeDetails())


// SoftwareEngineer.getEmployeeDetails = function () {
//     return `First Name is - ${this.FirstName} 
//             Address Is - ${this.Address} 
//             Employee ID is - ${this.EmpId} 
//             Designation is - ${this.designation}`
// }

// console.log(SoftwareEngineer.getEmployeeDetails())


//2. By using Object.create -

var SoftwareEngineer = Object.create(Employee) //create a constructor of the class and allow inheritance and polymorphism

SoftwareEngineer.FirstName = "Mike"
SoftwareEngineer.designation = "Software Engineer"

console.log(Employee.getEmployeeDetails())
console.log(SoftwareEngineer.getEmployeeDetails())

SoftwareEngineer.getEmployeeDetails = function () {
    return `First Name is - ${this.FirstName} 
            Address Is - ${this.Address} 
            Employee ID is - ${this.EmpId} 
            Designation is - ${this.designation}`
}

console.log(SoftwareEngineer.getEmployeeDetails())


//prototype object attached with functions and object literals allow to build a chain of inhritance in javascript classes

console.log(SoftwareEngineer.__proto__)

//3. Empty object - will have prototype

var EmptyClass = Object.create({})

//4. Null constructor object - will not have a prototype

var NullCtrClass = Object.create(null)


//create a student object
//set some properties and display the information in
//inherited object - SoftwareEngineer


//5. Merging and preserving the immutability

var user = {name : "Dat", id:2025, address : "Somewhere in Chicago"}
var product = {name : "Dat", id:2025, deliveryAddress : "Somewhere in Newyork", product : "some electronic product"}

var billing = {name : "Mr Jason", id:2030, amount : "$3000"}

//we need to create the final object with details of delivery proposed

var deliveryData = {};

// deliveryData = {user, product}
// user.mobile = "5552224444" //doesn't meets the preservation of immutability
// console.log(deliveryData)

user.mobile = "5552224444"

deliveryData = Object.assign({}, user, product, billing) //the last source will replace common values

//user.mobile = "5552224444" // this preserves the immutability

console.log(deliveryData)


// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

// once done create a git repo and push this answer and send me your github link with access