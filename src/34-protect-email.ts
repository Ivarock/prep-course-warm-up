export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */

const protectEmail = (email: string): string => {
    const [localPart, domainPart] = email.split('@');
    let hiddenLocalPart = '';
        if (localPart.length >= 7) {
        hiddenLocalPart = `${localPart.slice(0, 3)}...`;
    } else if (localPart.length >= 5) {
        hiddenLocalPart = `${localPart.slice(0, 2)}...`;
    } else {
        hiddenLocalPart = '...'
    }
    return `${hiddenLocalPart}@${domainPart}`;
}
console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
console.log(protectEmail('12345@example.com')); // Expected result: 12...@example.com
console.log(protectEmail('12@example.com')); // Expected result: ...@example.com