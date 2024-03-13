function squareDigits(num){
    return Number(String(num).split("").map((x)=>Number(x)**2).join(""))
  }
  console.log(squareDigits(91))