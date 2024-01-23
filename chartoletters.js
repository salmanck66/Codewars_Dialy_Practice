function gimmeTheLetters(inputStr) {
    const [start, end] = inputStr.split('-');
     const result = Array.from({ length: end.charCodeAt(0) - start.charCodeAt(0) + 1 }, (_, index) => String.fromCharCode(start.charCodeAt(0) + index));
     return start === start.toUpperCase() ? result.join('').toUpperCase() : result.join('')
   }
   