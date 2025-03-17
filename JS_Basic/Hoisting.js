console.log("Before, ", a); 
var a = 10;
console.log("after: ", a); 


function hoistExample(){
    var a;
    a =10;
}
hoistExample();
console.log(a);


//answer testFunc is not a function
// testFunc();
// var testFunc = function funcHoist(){
//     console.log("i am being hoisted");
// }


// setTimeout(function){
//     console.log("first timeout");
//     setTimeout(function()){
//         console.log("inner timeout");
    
//     },0);
// }


//JS is interpretedand partially compiled language and pulling all the var and funtion on top and having an information about them
//even if they present in the last line of JS file

//two types of hoisting are present
// 1. variable hoisting -  a variable is hoisted with a default value (undefined)


// 2. Function hoisting - it is hoisted iwth its completed definition
console.log(Add)
//nsole.log(Add(4,4))//undifined

console.log(Sum) //hoisted with it definition
//nsole.log(Sum(4,4)) // can be executed even before the declareration of the function


console.log(myFancyvariable) // not an error but undifined
console.log("I am a programmer!!")

var Add = function (p1, p2){
    return p1+p2
}

var myFancyvariable = " this is just basic not fancy"
console.log(myFancyvariable)

//js partially combime the code
//it allocate memory with definition
//

function Sum(p1, p2){
    return p1 + p2
}


