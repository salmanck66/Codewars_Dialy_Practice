
function factorial(n) { 
    if (n <1) { 
        return 1; 
    } else { 
        return n * factorial(n - 1); 
    } 
} 
// 5    
let num1 = 5; 
let result = factorial(num1); 
console.log("The factorial of given number is :" + result);
