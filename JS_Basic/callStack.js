// LIFO

// callstack - a memory space allocated to main thread for executing the program written in given runtime
// js = is a single threaded programming

//one thread means one set of memmory space and memory space will be in term of stack

//console.log ("My name is Some Name")//

// window.alert("My name is Some Alerted Name")//

// function foo (params){
//     throw new Error ("Execution happens in callstack as LIFO");

// }

// function bar (){
//     foo()
// }

// function baz(params){
//     bar()
// }

// baz (); //function execution


//exhaystung the allocated space of call stack
function baz(){
    baz()
}

baz();


// heap: creata any object as location of you funciton also that is present ,all that thing acutally happens on heap
// priority queues