export {};

/**
 * Create a function called isBlank, which checks if passed string is blank or not
 */
function isBlank(value: any) {
    return value === null || value.trim() === '';
}

console.log(isBlank(null)); // Expected output: true
console.log(isBlank("")); // Expected output: true
console.log(isBlank(" ")); // Expected output: true
console.log(isBlank("abc")); // Expected output: false
console.log(isBlank(" abc ")); // Expected output: false
