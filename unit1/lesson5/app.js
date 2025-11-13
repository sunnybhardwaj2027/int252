import {add, multiply} from './mathUtil.js';

console.log(add(2, 5));
console.log(multiply(2, 5));

// we can also import all export as object

import * as math from './mathUtil.js';

console.log(math.add(2, 5));
console.log(math.multiply(2, 5));

import greet from './greet.js';
greet('sunny');

// we can rename 'greet' as 'hello' or anything else because 'greet.js' is exporting only one thing so

import hello from './greet.js';
hello('sunny');

// import Header from './Header.js'

