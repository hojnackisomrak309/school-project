// This is just an example of a Node.js function. You can modify it to suit your specific needs.
function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage
console.log(calculateGCD(12, 8)); // Output: 4
