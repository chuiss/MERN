// default param - is a standard practice used now to have a default value for the parameters

function Sum(p1=0, p2=0, p3=0) {
    //console.log(p3)
    // if (p1 && p2 && p3) {
    //     return p1+p2+p3    
    // }
    // else{
    //     return 0
    // }

    return p1+p2+p3
}

console.log(Sum())
console.log(Sum(1,2,3))
console.log(Sum(1,2))
console.log(Sum(1))


//create and example of multiplication using default params

function Manager(t1 = 0, t2 = 0, t3 = 0){
    return t1 + t2+ t3
}
console.log("Manager")
console.log(Manager())
console.log(Manager(34,4))
console.log(Manager(12,3,43))