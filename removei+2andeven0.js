
const a = [4,19,27,29,14,26,29,33,44,46,67,68,94]
// 0 , 19 , 0 , 0 , 29 , 0 ,67
function deltp(input)
{
    for(let i = 0;i<input.length;i++)
    {
        for(let j = 2 ; j<Math.sqrt(input[i]);i++)
        {
            if(input[i] % j !== 0)
            {
                input[i+1]=null
                input[i+2]=null
            }
        }
    }
 
    return a.filter((item)=>
    item!==null ).map((item)=>
    {
        return item % 2== 0 ? 0 :item
    })
}

console.log(deltp(a))