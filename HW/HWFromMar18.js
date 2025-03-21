//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

let {FirstName, TotalMarks, Subject : {Physics, Chemistry, Language} } = Student
console.log(FirstName)
console.log(TotalMarks)
console.log(Physics)
console.log(Chemistry)
console.log(Language)

let {LastName = "Smith", Subject : {Ecology = 95}} = Student
console.log(LastName)
console.log(Ecology)


//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let aspirations = [TwentyTwentyFour, TwentyFive, TwentySix, ...rest] = [2024,25,26, 22, 23, 21, 27, 28, 29, 30]
console.log(TwentyTwentyFour)
console.log(TwentyFive)
console.log(TwentySix)
console.log(rest)

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(p1 = 0, p2 = 0, p3 = 0) {
    return p1 * p2 * p3
}
console.log(multiply(2,3,4)) 


//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let arr = [1,2,3,4,5]
arr[6] = 6
for (const key in arr) {
    const element = arr[key];
    console.log({key})
    console.log({element})
}

for (const element of arr) {
    console.log(element)
}

//create an example of const where we can update on property of the object, where it says const is mutable
const obj = {name: "John"}
obj.name = "Doe"
console.log(obj)

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 2000)
}


