// arrow function and this 

// what are arrow function => it's a concise way to write introduced defined in ES6

// regular function
function sum(a, b){
    return a + b;
}

// arrow fuction

const arrowSum = (a, b) => a+b;

console.log(sum(1, 3));
console.log(arrowSum(1, 3)); // same output cleaner syntax

// syntax variation

//1. single line

const sum3 = (a, b) =>  a+b; // implicit return

//2. multiple statements => use {} and return

const sum2 = (a, b) => {
    let c = a + b;
    return c;
};

//3. single parameter => paranthesis optional

const square = x => x*x;

//4. no parameter => must use ()

const greet = () => console.log("Hi");

// understanding 'this' in arrow function

// in regular function, 'this' depends upon how the function is called.
// in arrow function, 'this' depends upon where the fuction is defined(lexical).

function Person(){
    this.name = "sunny";
    setTimeout(function (){
        console.log("Regular: ", this.name); // Regular:  undefined
    }, 1000);
}

const p = new Person();

