export {};

function truncateString(word: string, num: number) {
    return word.substring(0, num);
}
console.log(truncateString("CODELEX", 4)); // Expected output: CODE
