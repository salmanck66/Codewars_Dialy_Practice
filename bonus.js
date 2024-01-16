bonus = function(arr, s) {
    let tot = arr.reduce((a,b)=>a+b)
    let res = arr.map((v)=>
    {
        return Math.floor((s*v)/tot)
    })
    return res
}

console.log(bonus([22, 3, 15], 18228));
console.log(10025+1367+6835);
