function group(arr) {

   const set =new Set(arr)
   const Resarr =  Array.from(set)
    const grouparr = Resarr.map(val=>arr.filter(item=>item===val))
    return grouparr  

}

console.log(group([3, 2, 6, 2, 1, 3])); 
// >>> [[3, 3], [2, 2], [6], [1]]