// Class - has been added in ES6 as a special and upgraded function to give us feature similar to
// other class based programming languages

//class keyword is used to create class and we can create associated methods as we did in cOnstructor function <without using this>


class Area { //scope of the class { < --- --- >}
    
    // constructor is used to initialized the properties
    constructor(length = 0, breadth = 0){
        this.length = length //properties
        this.breadth = breadth
    }

    Square = ()=> this.length*this.length

    SquareB = ()=> this.breadth*this.breadth

    Rectangle = ()=> this.length*this.breadth

    Circle = (radius,constantPie)=> constantPie*radius*radius

}

let areaObj = new Area(5,6)

console.log(areaObj.Square())
console.log(areaObj.SquareB())
console.log(areaObj.Rectangle())

console.log(areaObj.Circle(10, 3.1412))


// Task - create a class named as account accepting 3 ormore params  like - name, acct type etc and
// has three methods to show balance, user details and account offers
class Account {
    constructor(name, accountNumber, type, balance = 0) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.type = type;
        this.balance = balance;
    }

    showBalance() {
        console.log(`Balance: $${this.balance}`);
    }

    showUserDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Account Type: ${this.type}`);
    }

    showAccountOffers() {
        if (this.type === 'Savings') {
            console.log('Offer: 5% interest rate on savings!');
        } else if (this.type === 'Checking') {
            console.log('Offer: Free checking with no minimum balance.');
        } else {
            console.log('Offer: Please check with the bank for special offers.');
        }
    }
}

// Example usage:
const user1 = new Account('Alice', '123456789', 'Savings', 1000);
user1.showUserDetails();
user1.showBalance();
user1.showAccountOffers();