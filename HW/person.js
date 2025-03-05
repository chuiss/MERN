// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

// once done create a git repo and push this answer and send me your github link with access



var Person = {
    FirstName: "Huy",
    Address: "Seattle",
    ID: "0709",
    getPersonDetails: function() {
        return `First Name is - ${this.FirstName}
                Address is - ${this.Address}`    
    }
    
}
//create a constructor of the class and allow inheritance and polymorphism
var Student = Object.create(Person)

Student.FirstName = "Dat"
Student.degree = "Bachelor"
Student.ID = "2580448"

console.log(Person.getPersonDetails())

Student.getPersonDetails = function (){
    return `First Name is - ${this.FirstName}
            Address is - ${this.Address}
            SID is - ${this.ID}
            Degree is - ${this.degree}`
            
}
console.log(Student.getPersonDetails())