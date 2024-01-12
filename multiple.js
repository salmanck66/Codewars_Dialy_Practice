function solution(number){
    let sum = 0
    if(number<0)
    {
        return 0
    }

    for(i=1;i<number;i++)
    {
        if(i%3===0 || i%5===0)
        {
            sum = sum+i
        }
    }
    return sum
}

console.log(solution(10));
