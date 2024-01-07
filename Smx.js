function sumMix(x){
    return x.reduce((a,b)=>Number(a)+Number(b))
}

const s = [9, 3, '7', '3']

console.log(sumMix(s));