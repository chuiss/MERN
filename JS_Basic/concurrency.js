// we cannot create multi threaded in JavaScript



//start
console.log("Execution Starts")

setTimeout(function () {
    console.log("First Callback")
    
    
    setTimeout(function () {
        console.log("Inner Callback")
    
    }, 0) //after 1 second

}, 1000) //after 1 second

setTimeout(function () {
    console.log("Second Callback")


}, 2000) // after 1+2 second


setTimeout(function () {
    console.log("Third Callback")


}, 3000) // after 1+2+3+ second

console.log("Execution Ends") // last