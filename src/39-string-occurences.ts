export {};
//Add value types.
const count = (str: string, subStr: string): number => {
    // Convert both strings to lowercase.
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    // Using match with regular expression to find all occurances of substring
    const matches = lowerStr.match(new RegExp(lowerSubStr, 'g'));
    // If there is no matches we return 0, otherwise we return the length of matches
    return matches ? matches.length : 0;

};


console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
