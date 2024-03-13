// function longestPalindrome(str) {
//     if(str.length === 1)
//     {
//         return "palindrome"
//     }
//     }

// console.log(longestPalindrome("bs")); //

var theString     = 'somerandomword',
     allSubstrings = []; 

console.log(getAllSubstrings(theString))

function getAllSubstrings(str) {

  var start = 1;

  for ( var i = 0; i < str.length; i++  ) {

     allSubstrings.push( str.substring(start,i) ); 
  }

} 

console.log(allSubstrings)
array.forEach(element => {
    
});


