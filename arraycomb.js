function solve(arr) {
    let count = 0 
    arr.forEach(element => {
        element.forEach(element => {
            console.log(element);
        });
    });
  };

solve([[1,2],[4],[5,6]])

//   For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6]. 

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

// If you like this Kata, please try:

// Sum of integer combinations

// Sum of array singles