// Spread - is an operator used to spread the individual values of array or object, so that we can retireve it one by one
// without applying additional indexes

let teamList = ["John", "Doe", "Mike", "Smith", "Eric", "Tom", "Jerry"]
// let first = teamList[0]
// let second = teamList[1]

console.log(...teamList)

let User = {   
    Name: "Joel",
    Session: "MERNStack",
    product: "Many",
    Mobile: "1234567890",
}

let Address = {
    Name: "Joel",
    Home: "Somewhere in Seatlle",
    Office: "Somewhere in downtown"
}

// let UserProduct = {User, Address} // 
// let UderProduct = Object.assign({}, User, Address) 
// console.log(UserProduct)
let UserProduct = {...User, ...Address} 

Address.Telephone = "4324567896"
console.log(UserProduct)


User.Name= "Doechii"
Address.Name = "Doechii"
User.Mobile = "9876543210"
let UserProduct2 = {...User, ...Address}
console.log(UserProduct2)


//Rest - parameter and operator: any array data can be passed as rest parameter in any function, but it shoulf be
// the last parameter, also whern we try to assign values to rest operator it should be the last literal

//rest should be the last parameter
//function name{p1,p2,p3, ...rest} {

//}

let Sum = (p1, p2, p3, ...rest) => p1 + p2 + p3 

let numbers = [2,3,4,5,6,7,8,9,10]
console.log(Sum(...numbers))//spreading number's
let largeNumbers = function(...numbers) {
    let sum = 0
    
    sum = numbers.reduce((preVal, currVal, index, array) =>{
        // console.log("currVal" ,currVal)
        // console.log("preVal", preVal)

        // console.log("index", index)
        // console.log("array", array)

        return preVal + currVal

    }, 0)

    console.log(sum)
}

largeNumbers(...numbers)


