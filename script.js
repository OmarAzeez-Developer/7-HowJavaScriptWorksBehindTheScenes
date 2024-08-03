// activate strict mode
'use strict';

// Scoping
/*
// function declaration
function calcAge (birthYear) {
    const age = 2024 - birthYear;

    // look up the parent scope
    // global variable was declared before we called (calcAge) function
    // so if we called function before declaring (firstName), it will NOT work 
    console.log(firstName);

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        // check if millennium person
        // block scope
        if (birthYear >= 1981 && birthYear <= 1996) {
            // var variables ==> variables declared with (var) keyword are function scoped (simply ignored the scope)
            // because they are not block scoped at all which is the opposite of (let) and (const)
            var millenniumPerson = true;

            // if we decalre a varable that is already declared(exists) in a parent scope because it looked for
            // variable name(firstName) in the current scope
            const firstName = "Azeez";

            const str = `Oh, you are a millennium person, ${firstName}`;
            console.log(str);

            // fuctions are blocked scope
            function add(a, b) {
                return a + b;
            }

            // const output = "New OutPut"  ==> it will be same situation as firstName and it will still work
                                             // because variable name(output) in the current scope.
            output = "New OutPut"
        }

        // it will NOT work because we used (const)
        // console.log(str);

        // it will work because we used (var)
        console.log(millenniumPerson);

        // it will work because we re-assign value NOT creating new variable
        console.log(output);

        // it will  NOT work because fuctions are blocked scoped in strict mode
        // it will work if I remove strict mode
        // console.log(add(2, 3));
    }

    // call (printAge) function
    printAge();
    
    return age; 
}

// global variable
const firstName = "Omar";

// call the function
calcAge(1989);

// Note: scope chain is a one way street, meaning that inner can access outter BUT outter can NOT access inner.

// we can NOT do this because it is outter to inner scope
// console.log(age);
// console.log(printAge);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Hoisting
/*
// any variable declared with (var) will be HOISTED and set to define

// variables
console.log(me);
// console.log(job);
// console.log(age);

var me = "Omar";
let job = "Developer";
const age = 35;

// variables
console.log(addDeclaration(2, 3));  // only function you can use before declaration
// console.log(addExpression(2, 3));
// console.log(addArrow(2, 3));

// functions ==> function declaration
function addDeclaration (a, b) {
    return a + b;
}

// functions ==> function expression
const addExpression = function(a, b) {
    return a + b;
}

// functions ==> arrow function
const addArrow = (a, b) => a + b;

// example

if(!numProducts) {
    deleteShoppingCart();
}

// numProducts is undefined NOT 0 because we used (var) ==> HOISTING
var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted")
}

// variables declared (var) will create a property on the global (window) object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

// LONG STORY SHORT
// DO NOT use (var) for declaration, use (const), or (let) if you really need to change value
// declare variable at the top of each scope
// declare all your functions first then use them after declaration
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// This keyword
/*
// (this) is the window object(global object)
console.log(this);

// function expression
const calcAgeExpression = function(birthYear) {
    console.log(2024- birthYear);
    // (this) inside function will be undefined
    // get it's own (this)
    console.log(this);
}
calcAgeExpression(1989);

// arrow function
const calcAgeArrow = birthYear => {
    console.log(2024- birthYear);
    // (this) inside function will be window because it will point to the global scope which is (this) which returns (window) 
    // get the parent (this)
    console.log(this);
}
calcAgeArrow(1989);

// method
const omar = {
    birthYear: 1989,
    calcAgeExpression: function() {
        console.log(this);
        console.log(2024 - this.birthYear);
    }
}
// when a moethod call the (this) keyword inside of the method then it will be the object that is calling the method
omar.calcAgeExpression();

const abdullah = {
    birthYear: 1991,
}
// method borrowing (borrowed from omar and use it for abdullah)
abdullah.calcAgeExpression = omar.calcAgeExpression

abdullah.calcAgeExpression();

// (this) keyword always points to the object that is calling the method

// take function out of omar object
const f = calcAgeExpression;

// can NOT do this because it is just a regular function call
// f();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Regular Functions vs Arrow Functions
/*
const omar = {
    firstName: "Omar",
    birthYear: 1989,
    calcAgeExpression: function() {
        console.log(this);
        console.log(2024 - this.birthYear);

        // function inside of a method

        // // does NOT work because (this) keyword is undefined
        // const isMillenial = function() {
        //     console.log(this);
        //     console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        // }

        // // solution 1 ==> to solve the issue we can declare a vaiable and set this to it
        // const self = this;
        // const isMillenial = function() {
        //     console.log(self);
        //     console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
        // }

        // solution 2 ==> use arrow function
        const isMillenial = () => {
            console.log(this);
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        }
        // calling the function
        isMillenial();
    },

    // arrow function
    // NEVER EVER use arraow function as a method instead use normal function expression
    greet1: () => console.log(`Hey ${this.firstName}`),   // does NOT work because arrow function does NOT get it's own (this) keyword

    // function expression
    greet2: function() {    // works perfectly fine
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }
}

omar.greet1();
omar.greet2();
omar.calcAgeExpression();

// arguments keyword
// function expression get (arguments) keyword 
const addExpression = function(a, b) {
    console.log(arguments)
    return a + b;
}

addExpression(2, 5);

// you can add more arguments and it is legal to do this
addExpression(2, 5, 3, 7);

// arraow function does NOT get (arguments) keyword
var addArrow = (a, b) => {
    console.log(arguments);
 return a + b;
}

// arraow function does NOT get (arguments) keyword
addArrow(2, 5);
addArrow(2, 5, 7);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Primitives vs Objects (Primitive vs. Reference Types)
/*
// primitive types
let age = 30;
let oldAge = age;
age = 35;
console.log(oldAge);
console.log(age);

// reference types
const omar = {
    name: "Omar",
    age: 30
};

const friend = omar;
friend.age = 1;
// return age of 1
console.log("Friend:", friend);
// return age of 1
console.log("Me:", omar);

// primitive types
let lastName ="Alkhayyat";
let oldLastName = lastName;
// mutate lastName ==> assign lastName to new value
lastName = "Azeez";
// does work
console.log(oldLastName);
console.log(lastName);

// reference types
const abdullah = {
    firstName: "Abdullah",
    lastName: "Alkhayyat",
    age: 33,
};
const abdullahNew = abdullah;
abdullahNew.lastName = "Azeez";
// does NOT work
console.log(abdullah);
console.log(abdullahNew);

// solution to make it work(copying object) ==> shallow copy works on only on first lvel
// BUT it will NOT work if we have an object inside an objcet
const abdullah2 = {
    firstName: "Abdullah",
    lastName: "Alkhayyat",
    age: 33,
    family: ["Omar", "Abdullah"]
};
// merge to objects and return new one
const abdullahCopy = Object.assign({}, abdullah2);
// change lastName in abdullahCopy
abdullahCopy.lastName = "Azeez";
// solution worked
console.log(abdullah2);
console.log(abdullahCopy);
// push new element to the array obk=ject inside (abdullahCopy) object
abdullahCopy.family.push("Omar JR");
abdullahCopy.family.push("Abdullah JR");
// does NOT work
console.log(abdullah2);
console.log(abdullahCopy);
*/