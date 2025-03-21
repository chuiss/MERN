// Map - is a data structure which stores values in key: value format and allows a set of methods and
// properties to fecth, add, delete, update the values in the map object.
// There are mainly two typwes of maps in javascript
// 1. Strong Map: when our kes  are of string type or alphanumeric type
// 2. WeakMap: when our keys are ofo string typr or alphanumeric type

// [key, value] => [1, "One"]
let myMap = new Map();

//creates multiple types of keys, to build a weak map 
let myString = "key is string", objectKey = {}, functionKey = function(){}, numberKey = 2025;

myMap.set(myString, "string key present")
myMap.set(objectKey, "object key present")
myMap.set(functionKey, "function key present")
myMap.set(numberKey, "number key present")

console.log(myMap) 
console.log(myMap.entries())
console.log(myMap.size)

console.log(myMap.get(2025))// number key present
console.log(myMap.get({})) // undefined
console.log(myMap.delete(functionKey)) // true
console.log(myMap.size) // 3

myMap.clear()
console.log(myMap.size) // 0


//Set - is a data  structure ised similar to array byt can hold uquiue values only
//let nameList = [] // for every insertion we need to validate if the name is already present or not

let teamName = new Set (["Eric", "Mike", "Dat", "Em Long", "Joel", "Tejasvi", "Eric", "Mike"])
console.log(teamName.entries())
console.log(teamName.size)

teamName.add("Eric")
console.log(teamName.entries())
console.log(teamName.size) 

