//iterators are loop like "for loop", "while loop", or anything that iterates over a collection of data

// with the increasing load of data and manipulations requried in it developers needed more some new features
// so that it can help them create/extract/modify data out of available array of object 
// this also assures the principle of immutability where our core object or base object remains consistent

// Four new ITERATORS are included to achieve these functionalities
// 1. Filter, 2. Map, 3. Reduce, 4. Some


let personsList = [
    {id : 1, name : "John", savedby : "DrStrange"},
    {id : 2, name : "Doe", savedby : "IronMan"},
    {id : 3, name : "Eric", savedby : "Thor"},
    {id : 4, name : "Mike", savedby : "Hulk"},
    {id : 5, name : "Tejasvi", savedby : "CaptainAmerica"},
    {id : 6, name : "Alec", savedby : "BlackWidow"},
    {id : 7, name : "Dat", savedby : "IronMan"},
    {id : 8, name : "Joel", savedby : "DrStrange"},
    {id : 9, name : "Em Long", savedby : "DrStrange"},
]
// 1. Give me list of the persons saved by IronMan
let persnSavedByIronMan = personsList.filter(person => person.savedby === "IronMan")
console.log(persnSavedByIronMan)

console.log(personsList)

// 2. give me the lisf of names save by DrStrange
let nameListSavedByDrStrange = personsList.map(person => person.savedby == "DrStrange" ? person.name : "").filter(names => names != "")
console.log("names List saved by DrStrange")
console.log(nameListSavedByDrStrange)


// append sir before the naem an also change the key fromo name to Citizen 

let nameObjWithSir = personsList.map((personObject) => {
    if(personObject.savedby == "DrStrange"){
        return {"Citizen" : "Sir " + personObject.name}

        }
}) .filter((names) => names != undefined)

    console.log(nameObjWithSir)



//3. Is there anyone saved by Hulk - SOME - returns boolean true or false
//Some operator works as short circuit 
let savedbyHulk = personsList.some(personObj => personObj.savedby == "Hulk")
console.log(savedbyHulk) // true

let savedbyBlackWidow = personsList.some(personObj => personObj.savedby == "BlackWidow")
console.log(savedbyBlackWidow)// true

let savedbyBlackPanther = personsList.some(personObj => personObj.savedby == "BlackPanther")
console.log(savedbyBlackPanther)// false

//4. When we need to backtrack, keep checking the current value, need an object to accumulate and also need the base object in each iteration
// to perform an aggregate, we use REDUCE, which works exactly the same way as its name to reduce  a complete new data with mulple operations

// Task: give me the count of the persons saved by each superhero uniquelly

let uniquePersonsCount = personsList.reduce((prevVal, currVal, index, array) => {
    
    console.log(prevVal)
    console.log(currVal)
    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] +1 : 1

    return prevVal

//}, new Set()); // initialized the value to be pressented in prevVal for the first time
}, []);
//console.log(uniquePersonsCount) // {DrStrange: 3, IronMan: 2, Thor: 1, Hulk: 1, CaptainAmerica: 1, BlackWidow: 1}



//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
console.log("Person with javascript tag")
let personWithJavascript = persons.filter(person => person.tags == "javascript")
console.log(personWithJavascript)
//2. List the name of person using java and put programmer after their name, change the name key to Developer
console.log("Person with java tag and add programmer after their name")
let personWithJava = persons.map(person => {
    if(person.tags == "java"){
        return {"Developer" : person.name + " Programmer"}
    }
    
}).filter(names => names != undefined)
console.log(personWithJava)

//3. If we have anyone with tag python
let personWithPython = persons.some(person => person.tags == "python")
console.log(personWithPython)

//4. Find the number of unique tags and their count present in list
let uniqueTags = persons.reduce((prevVal, currVal, index, array) => {
    console.log(prevVal)
    console.log(currVal)
    prevVal[currVal.tags] = prevVal[currVal.tags] ? prevVal[currVal.tags] +1 : 1
    return prevVal
}, []);