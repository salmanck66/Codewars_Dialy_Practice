function shortenToDate(longDate) {
    // Extract the relevant parts from the input string using a regular expression
    const match = longDate.match(/(\w+ \w+ \d+)/);

    // Check if the match is found
    if (match) {
        // Return the matched part (shortened format)
        return match[0];
    } else {
        // Handle the case where the input format is not as expected
        return "Invalid Date";
    }
}