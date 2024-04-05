export {};

function add(num1: number, num2: number): number {
  return num1 + num2;
}

function subtract(num1: number, num2: number): number {
  return num1 - num2;
}

function sum(nums: number[]): number {
  return nums.reduce((acc: number, curr: number) => acc + curr, 0);
}

function multiply(nums: number[]):number {
  return nums.reduce((acc: number, curr: number) => acc * curr, 1);
}

function power(num1: number, num2: number):number {
  return num1 ** num2;
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
