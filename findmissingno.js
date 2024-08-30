findMissingNumber([1, 2, 4, 5, 6]); // returns 3
findMissingNumber([3, 7, 1, 2, 8, 4, 5]); // returns 6

function findMissingNumber(input)
{
    for (let i = 1; i <= input.length; i++) {
        if(![...input].includes(i))
        {
            console.log(i)
            return i
        }
    }
    return null
}