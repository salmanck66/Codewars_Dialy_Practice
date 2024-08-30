function bubbleSort(array)
{
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length-1; j++) {
            if(array[j]>array[j+1])
            {
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array
}

console.log(bubbleSort([1,24,45,43,2,23,4,3,2]))