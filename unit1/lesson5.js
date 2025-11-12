// Topic: Modules, SPA vs MPA, and Introduction to React Framework

// javascript modules => in modern javascript (ES6+) modules, allow you to break codes into seperated files - each file can export/data/classes and import them elsewhere -> this makes codes reusable, organised and maintainable.

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





