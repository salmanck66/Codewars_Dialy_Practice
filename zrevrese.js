function reverseWords(inputString) {
   return inputString.split(" ").map((x)=>x.split("").reverse().join('')).join(" ")
  }
  
  // Examples
  console.log(reverseWords("This is an example!"));  // Output: "sihT si na !elpmaxe"
  console.log(reverseWords("double  spaces"));        // Output: "elbuod  secaps"
  