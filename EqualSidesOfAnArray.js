function findEvenIndex(arr)
{
  for(let i = 0;i<arr.length;i++)
  {
    const lsum = arr.slice(0,i).reduce((a,b)=>a+b,0)
    const rsum = arr.slice(i+1).reduce((a,b)=>a+b,0)
    if(lsum===rsum)
    {
        return i
    }
  }
  return -1
}

let a = [1,2,3,4,2,1,3]
console.log(a.slice(0,2));
console.log(findEvenIndex(a))
