export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: (string | number)[], valueToRemove: string | number): (string | number)[] {
  // Finding the index of value to be removed
  const index = arr.indexOf(valueToRemove);
  if (index === -1) {
    //  If the index is not found we return the copy of array
    return arr.slice();
  } else {
    // If the index is found, we return the part of array before index and concatenate it with part after the index
    return arr.slice(0, index).concat(arr.slice(index + 1));
  }
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
