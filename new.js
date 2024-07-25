let arr =[3,4,5,2,6,8]
let t = 10
let ans = []
let f = arr[0]

    for (let i = 1 ; i< arr.length ; i++)
    {
        for (let j = arr.length-1 ; j>i-1 ;j--)
        {
            if(arr[i]+arr[j]==10 )
            {
                if(arr[i])
                {
                    ans.push([arr[i],arr[j]])
                }

            }
        }
    }

    console.log(ans)


// for(i=0;i<=10;i++)
// {
//     console.log("*")
//     for(j=0;j<=10;j++)
//     {
//         console.log("*")
//     }
// }