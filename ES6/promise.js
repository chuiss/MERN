//Promises -  are the objexts act like wrapper which gives us the capability to control the data access via API
//it also helps to identify curren state of execution - FULLFILLED, PENDING, REJECTED
//when we nned to async operation this is the best suited approach

function Authentication(user, authorizationCallBack){
    //makes a call to server auth api for proper sign in/sign up process returns information
}

function Authorization(user_id, sessionToken, navigationCallBack){
    //makes a call to server to fetch the user roles
}

function NavigateToApplication(user_id){
    // out of all available pages sends back list of pages he should be redirected to and the page he last visited
}
//callbacks - when we have some issues of service failure which are not handled in proper modularized way
//this leads into a continous callback execution and creates as situation like helll and is
//termed as callback hell

// we can further mature and add more modulatized check to handle responses but still a more feasible solution is to add promises
/*
function SignIn(authenticationCallBack){
    let response = authenticationCallBack(user, authorizationCallBack) //2mins
    if (response.valid){
        let authResponse = authorizationCallBack(response.user_id, response.sessionToken, navigationCallBack)// 1min

        if (authResponse.validRole){ 
            let pageList = navigationCallBack(user_id, authResponse.role)//3 seconds

        }else {
            SignIn(authenticationCallBack, user) // call again to get valid info incase of failure
            //navigate to payment page or show them some cacthy templates about application

        }
    } else {
        //navigateToErrorPage or IncoorectPasswordPage or resetPasswordPage
    }
}
*/


//Promises is a pre-defined class we can use as below
let promiseObj = new Promise((resolve, reject)=>{

    //promise executes authenticationCallback recives the data from API and stores in response
    // let response = authenticationCallback(user, authorizationCallBack) //2 minutes
    // if (response.valid) {
    //     resolve(response)
    // }else{
    //     reject(response)
    // }

    setTimeout(() => {
        resolve({
            status : "Success",
            code : 200,
            message : "Authentication Success"
        })
    }, 3000); //3 seconds wait to make it feel like making a call to server

    setTimeout(() => {
        reject({
            status : "Failed",
            code : 500,
            message : "Internal server error!!"
        })
    }, 2500); //3 seconds wait to make it feel like making a call to server

})

console.log(promiseObj)

promiseObj
.then((data)=>{ //this access the data send when promise is resolved
    console.log(data) //upon success you'll make call to authorization
})
.catch((err)=>{ // this access the data send when promise is rejected
    console.log(err)
})


console.log("at end ", promiseObj )


// create a promise with name student login
// resolve it after 3 seconds and set student details with call status in the response object
// reject it after 4 seconds and set error details with call status in the response object