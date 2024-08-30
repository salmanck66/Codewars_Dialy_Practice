isPalindrome("racecar");            // returns true
isPalindrome("hello");              // returns false


function isPalindrome(input)
{
    if(input.split("").reverse().join("")==input)
    {
        console.log(input)
        return true
    }
    return false
}