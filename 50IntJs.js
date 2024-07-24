function sum(a,b)
{
    return a+b
}
// console.log(sum(5,4))
function maxintwo(arr)
{
    return Math.max(...arr)
}
// console.log(maxintwo([5,4]))
function checkPal(pal)
{
    return pal.split("").reverse().join("") == pal 
}
// console.log(checkPal("bab"))
function revstring(str)
{
    return str.split("").reverse().join("")
}
// console.log(revstring("salman"))
function retEven(arrayy)
{
    return arrayy.filter(item=>item%2 ==0)
}
// console.log(retEven([1,2,3,4,5,6,7]))
function factorial(input)
{

    if(input==0 )
    {
        return 1
    }else
    {
        return input*factorial(input-1)
    }
}
// console.log(factorial(1))
function prime(inn)
{
    if(inn < 1)
    {
        return false
    }
    if(inn == 2)
    {
        return true
    }

    for(let i = 2;i<=inn/2;i++)
    {
        if(inn%i == 0)
        {
            return false
        }
    }
    return true
}
// console.log(prime(4))
function largestInNested(inarray)
{
    
}

