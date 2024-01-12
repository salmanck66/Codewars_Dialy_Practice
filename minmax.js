function highAndLow(numbers){
let num =  numbers.split(" ").sort((a,b)=>b-a)
return `${num[0]} ${num[num.length-1]}`.toString()
}
// highAndLow();  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
console.log(highAndLow("1 2 3 4 5"));