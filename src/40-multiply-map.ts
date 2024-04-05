export {};

/**
 * Implement map function which works similarly as
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * NB! The goal of this exercise is not to call .map inside your own map function,
 * but instead  you have to figure out how Array.prototype.map() works under the hood
 * and recreate the logic yourself.
 */

// Defining map with two arguments - the input array(arr), and callback function(callback)
const map = (arr: number[], callback: (num: number) => number): number[] => {
  // Create a empty array within map function to store mapped values
  const mappedArray: number[] = [];
  // Iterate over each element using a for loop
  for (const num of arr) {
    // .push() the result of callback function to new array
    mappedArray.push(callback(num));
  }
  // Return new array containing mapped values
  return mappedArray
};
// First argument of map function
const numbers = [1, 2, 3];
// Apply the callback function to array 'numbers' and store it in variable 'doubled'
const doubled = map(numbers, function(number) {
  return number * 2;
});
console.log(doubled); // Expected result: [2, 4, 6]
