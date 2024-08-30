maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // returns 6 (subarray is [4, -1, 2, 1])
maxSubArraySum([1, 2, 3, -2, 5]); // returns 9 (subarray is [1, 2, 3, -2, 5])

function maxSubArraySum(input)
{
    currentsum = input[0]
    max = input[0]
    for (let i = 1; i < input.length; i++) {
        currentsum = Math.max(input[i],currentsum+input[i])
        max = Math.max(currentsum,max)
    }
    console.log(max)
    return max
}