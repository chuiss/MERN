//callback: when we use one function to be called by another function that will be termed as callback function
//the function whihc we need to be called by another function is passed as parameter

function PrintInfo(msg, p1 ){
    console.log(`${msg} - ${p1}`)
}

function GetUserInfo(name, age, callback){
    // console.log(name)
    // console.log(age)
    callback("User Name is ", name)
    callback("User Age is ", age)
}

//GetUserInfo("Dat", 21)
GetUserInfo("Dat", 21, PrintInfo)

function Sum(p1, p2, callback){
    callback("Sum of values is: ", p1 + p2)
}
Sum(5,6,PrintInfo)

// create an account class, and build a common function to print data use the data use the common functionas callback parameter
