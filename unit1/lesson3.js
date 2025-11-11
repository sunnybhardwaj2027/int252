// Topic: Important Array Methods in Modern JavaScript

// This lesson is a core foundation for React, because most real-world React apps rely on these methods to handle lists, state updates, and rendering data dynamically.

// basic idea = Array methods let you iterate, transform, and filter data easily.They make your code shorter, more expressive, and cleaner

// 1. forEach() -> Used to iterate through each item in an array (but doesn’t return anything).

const nums = [1, 2, 3, 4, 5];
nums.forEach(num => console.log(num*2));

// Note: forEach() is mainly used for side effects (logging, DOM updates).It does not return a new array

// 2. map() -> Used to transform each element and return a new array.

const doubled = nums.map(n => n*2);
console.log(doubled);

/*

const names = ["Sunny", "Rahul", "Aman"];
return (
  <ul>
    {names.map(name => <li key={name}>{name}</li>)}
  </ul>
);

*/

// 3. filter() -> Used to filter out elements based on a condition.

const even = nums.filter(num => num%2 == 0);
console.log(even);

// 4. find() -> Returns the first element that matches the condition.

const nums2 = [10, 15, 20 , 34];
const result = nums2.find(num => num > 10);
console.log(result);

// 5. every() and some(). every() => checks if every element match the condition, some() => checks if atleast one element match the condition

console.log(nums2.every(num => num > 15));
console.log(nums2.some(num => num > 15));
