function findOdd(Array) {
    var unique = Array.filter((a,b)=>Array.indexOf(a)===Array.lastIndexOf(a) )
    console.log(unique)
    return Number(unique);
  }
  let a =[20,1,2,3,5,4,7]
  console.log(findOdd(a))
