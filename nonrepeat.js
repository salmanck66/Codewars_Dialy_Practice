function findUniq(arr) {
    return  +arr.filter((element,index,arr)=>arr.indexOf(element)===arr.lastIndexOf(element))
  }
  let s= [1,2,2,3,3,]
  console.log(findUniq(s));