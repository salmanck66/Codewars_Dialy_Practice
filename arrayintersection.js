arrayIntersection([1, 2, 2, 1], [2, 2]);           // returns [2]
arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4]);    // returns [4, 9]

function arrayIntersection(input1,input2)
{
    let res = []
    let long =input1.length>input2.length?input1.length:input2.length

    for (let i = 0; i < long ; i++) {
        if(input1.includes(input2[i]))
        {
            res.push(input2[i])
        }
    }
    console.log([...new Set(res)])
    return res
}