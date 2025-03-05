
// closure: is a structure where we have a function returning another function with the properties
// that we need to expose with the executor
function Encapsulation(){
    var accountName = "Banking Account";
    var accountBalance = "$10_000"; // public

    var password = "4357"; // private
    var accountOwener ="Dat"; //private

    var getAccountBalance = function( pass, showBalance){
        if (password == pass && showBalance){
            return{
                accountName, // accountName : accountName,
                accountBalance // accountBalance : accountBalance
            }
        } else {
            return "Authorization Failed!"
        }
    }
    return getAccountBalance;
}
var closureData = Encapsulation()

console.log(closureData("4357",true))

