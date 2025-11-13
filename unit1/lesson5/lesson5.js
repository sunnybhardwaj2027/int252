// Topic: Modules, SPA vs MPA, and Introduction to React Framework

// 1. javascript modules

// In modern JavaScript (ES6+), modules allow you to break your code into separate files — each file can export data/functions/classes and import them elsewhere. This makes code organized, reusable, and maintainable.

// exporting => you can export in two ways

// named export

/*
// file: mathUtils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

*/

// importing named exports

/*

// file: app.js
import { add, multiply } from './mathUtils.js';

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6

// you can also import all exports as an object

import * as math from './mathUtils.js';
console.log(math.add(4, 5));

/*

// 2. default export => use when module export one main thing

/*

// file: greet.js
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}

// import default

import greet from './greet.js';
greet("Sunny");


// You can rename it freely: => because default export exports only one thing

import hello from './greet.js';
hello("Sunny");

/*

// every react component is usually default export

/*

// file: Header.js
export default function Header() {
  return <h1>Welcome</h1>;
}

// file: App.js
import Header from './Header';


*/


// 2. difference between SPA and MPA

// before diving deep into react first we need to understand why react is called single page application how it differ's from traditional multi page application

// multi page application(MPA) -> ex -> amazon, wikipedia(classic model) => characteristics -> 1. each page is separate HTML file (eg:- home.html, about.html etc...) 2. every time you navigate -> browser send a new http request -> server sends a new html page 3. page reloads completely each time 4. backend handles routing... drawbacks => 1. slow navigation(reloads every time) 2. more server load 3. poor user experiance for dynammic apps

// single page application(SPA) -> ex -> React, Angular, Vue based apps -> Gmail, instagram, twitter... characteristics => 1. only one html file (index.html) 2. on navigation javascript updates the view dynammically 3.  uses client side routing -- URL changes but page doesn't reload 4. feels like desktop app in the browser... advantages => 1. super fast navigation 2. smooth user experiance 3. data fetched asynchronously via APIs 5. great for modern apps... disadvantages => 1. initially load slightly larger(js bundle) 2. requires js to work properly (not ideal for SEO - heavy pages)

/*

| Feature              | SPA               | MPA                  |
| -------------------- | ----------------- | -------------------- |
| Number of HTML pages | 1                 | Multiple             |
| Page Reload          | No                | Yes                  |
| Routing              | Client-side       | Server-side          |
| Speed                | Fast              | Slower               |
| Example              | Gmail, React apps | Traditional websites |

*/

// 3. introduction to react framework

// what is react => React is a JavaScript library (not a full framework) created by Facebook for building user interfaces, It helps build reusable components that make up an app’s UI.

// why react ?

/*

| Problem with Old JS              | React’s Solution                                           |
| -------------------------------- | ---------------------------------------------------------- |
| Manual DOM updates are slow      | React uses a **Virtual DOM** for efficient updates         |
| UI code mixed with logic         | React introduces **components** — reusable building blocks |
| Hard to manage complex UI states | React provides **state management**                        |
| Page reloads break flow          | React uses **client-side rendering (SPA)**                 |


/*

// key feature react

/*

Component-Based Architecture — UI = small reusable building blocks

Virtual DOM — only updates what changes

Declarative Syntax — describe what UI should look like, not how to build it

Unidirectional Data Flow — data flows from parent → child

JSX — lets you write HTML inside JavaScript

Huge Ecosystem — tons of libraries, tools, and community support

*/

// how react works(simplified)

/*

1️⃣ React builds a Virtual DOM (a JS object representing your UI)
2️⃣ When state changes, React creates a new Virtual DOM
3️⃣ React compares it with the previous one (Diffing algorithm)
4️⃣ It updates only the changed parts in the real DOM — very fast! ⚡

*/

// react in modern web development => react powers huge app like => facebook, instagram, netflix, whatsapp web => And it’s the base for frameworks like Next.js, which adds routing, SEO, and server-side rendering.

// summary of lesson 5

/*

| Concept     | Key Idea                                          |
| ----------- | ------------------------------------------------- |
| **Modules** | Split JS into multiple files (import/export)      |
| **SPA**     | One-page app with dynamic updates                 |
| **MPA**     | Multi-page traditional reload model               |
| **React**   | Library for building SPAs via reusable components |


*/
