function sumTwoSmallestNumbers(numbers) {  
    let a =  numbers.sort((a,b)=>a-b)
    return a[0]+a[1]
}

  const a =[19, 5, 42, 2, 77]
  console.log(sumTwoSmallestNumbers(a));