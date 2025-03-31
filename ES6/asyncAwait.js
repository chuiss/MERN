// Async and Await are the keywords used to create a seperate thread and the concept comes from the multi-threading programming languages
// which means they dont have multi promises or multi callbacks, they are just a single thread
// so eventually creates a separate mini stack to do its execution by using the processor thread

// async - keyword is used to specify the function which you want to execute on separate thread
// each async is each thread
// await - keyword is used to fetch the information done via async function show result on main stack
// each or multiple operations on a separate thread will be synchronous

function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved',
                    "task" : "Learning async await"
                    });
            }, 2000);
    });
}


console.log("asyncv Execution starts");
// async creates a new thread to execute API 's that we see will take some time

async function asyncCall() {

    console.log("inside async call function")

    await resolveAfter2Seconds().then((data)=> console.log(data)) //this will be a sync call means wait to complete before moving to next line

    console.log("inside async call function - step 2")

    await resolveAfter2Seconds().then((data)=> console.log(data))

    console.log("inside async call function - done")
}

asyncCall();

console.log("async Execution ends - outer");


//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)