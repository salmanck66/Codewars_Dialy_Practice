// Problem: Find the First Non-Repeating Character


const firstNonRepeatingCharacter = (input) => {
    for (let i = 0; i < input.length; i++) {
        if (input.indexOf(input[i]) === input.lastIndexOf(input[i])) {
            return input[i]; // Return the first non-repeating character
        }
    }
    return null; // Return null if all characters repeat
};

// Test cases
console.log(firstNonRepeatingCharacter("javascript")); // Output: "j"
console.log(firstNonRepeatingCharacter("aabbcc"));     // Output: null
