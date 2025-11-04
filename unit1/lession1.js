// topic : javascript variables -> let, var, const

// var -> legacy code, let -> mutable variable, const -> constant/immutable refs

// var — the old way, before ES6, var was the only keyword, it's function- scoped, not block-scoped, which can cause bugs.

function demoVar(){
    if(true){
        var x = 10;
        console.log("inside block : ", x);
    }

    console.log("outside block : ", x); // still accessible
}

demoVar();

/* 
inside block : 10
outside block : 10
*/

// let — 'let' was introduced in ES6, it's block-scoped, meaning variables delared with let exist only inside {} where they are defined

function demoLet(){
    if(true){
        let x = 10;
        console.log("inside block : ", x);
    }

    // console.log("outside block : ", x); // x is not defined -> reference error
}

demoLet();

// const — for constants -> const works like let, but it cannot be reassigned

const PI = 3.14;
// PI = 3.14159; // ❌ TypeError: Assignment to constant variable

// note => objects and arrays declared with const can have their contents mutated
const person = {name : "sunny"};
person.name = "rahul"; // works
console.log(person.name);

