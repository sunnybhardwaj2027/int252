// arrow function and this 

// what are arrow function => it's a concise way to write functions, introduced in ES6

// --- Regular Function Syntax ---
function sum(a, b){
    return a + b;
}

// --- Arrow Function Syntax ---
const arrowSum = (a, b) => a+b;

console.log(sum(1, 3));
console.log(arrowSum(1, 3)); // same output, cleaner syntax

// --- Syntax Variations ---

// 1. Single line: implicit return (no 'return' keyword needed)
const sum3 = (a, b) => a + b;

// 2. Multiple statements: must use {} and 'return'
const sum2 = (a, b) => {
    let c = a + b;
    return c;
};

// 3. Single parameter: parenthesis optional
const square = x => x * x;

// 4. No parameters: must use ()
const greet = () => console.log("Hi");

// --- Understanding 'this' in Arrow Functions ---

// In regular function, 'this' depends upon how the function is called (dynamic).
// In arrow function, 'this' depends upon where the function is defined (lexical).

function Person(){
    this.name = "Sunny";
    // Regular function loses its 'this' context inside setTimeout
    setTimeout(function (){
        console.log("Regular: ", this.name); // Regular: undefined (or window object 'this')
    }, 1000);
}

const p = new Person();

function Person2() {
    this.name = "Sunny";
    // Arrow function preserves the 'this' context from Person2 (lexical scoping)
    setTimeout(() => {
        console.log("Arrow:", this.name); //  Arrow: Sunny
    }, 1000);
}
const p2 = new Person2();

// --- Arguments Object ---

// Regular functions bind their own 'arguments' object.
function showArgs(){
    console.log(arguments);
}

showArgs(1, 2, 3);

// Arrow functions do not bind their own 'arguments' object.
const showArrowArgs = () => {
    // console.log(arguments); //  ReferenceError: arguments is not defined
};

// If you need arguments in an arrow function, use the rest operator.
const showArrowArgs2 = (...args) => {
    console.log(args); // 'args' is a true array
};

showArrowArgs2(1, 2, 3);

// --- Advanced Limitations and Use Cases ---

// 1. Arrow functions cannot be used as constructors.
const MyClass = () => {
    this.value = 10;
};
// const instance = new MyClass(); // ❌ TypeError: MyClass is not a constructor

// Arrow functions also don't have a 'prototype' property or 'new.target'.

// 2. Caution for DOM Event Handlers (when needing element context).
// Note: This part requires a DOM environment to run and see the difference.

// Assuming a button exists with id="myButton"
/*
const button = document.getElementById('myButton');

// Regular function: 'this' refers to the button element (dynamic)
button.addEventListener('click', function() {
    console.log("Regular Handler 'this':", this.tagName); // ✅ BUTTON
});

// Arrow function: 'this' refers to the surrounding context (e.g., window/global)
button.addEventListener('click', () => {
    console.log("Arrow Handler 'this':", this.tagName); // ❌ UNDEFINED
});
*/

// Arrow functions in React => arrow functions are everywhere in React

// 1. Used in functional component
// const Welcome = () => <h1>Hello React</h1>;

// 2. used in event handlers

// <button onClick={() => alert('clicked')}>click Me</button>

// 3. used in array methods

const arr = [1, 2, 3];
const doubled = arr.map(n => n*2);
console.log(doubled);

// when not to use arrow function => 1. a constructor (new MyClass()) 2. the arguments 'object' directly 3. Dynamic this (e.g., in object methods that need their own this)

const user = {
  name: "Sunny",
  showName: () => console.log(this.name)
};
user.showName(); // undefined => Because this here doesn’t refer to user, but to the global scope.

/*

| Concept                   | Arrow Function | Normal Function |
| ------------------------- | -------------- | --------------- |
| Has own `this`            | ❌              | ✅               |
| Can use as constructor    | ❌              | ✅               |
| Has `arguments`           | ❌              | ✅               |
| Cleaner syntax            | ✅              | ❌               |
| React components/handlers | ✅ Preferred    | ⚠️ Rarely used  |

*/

