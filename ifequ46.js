const arr = [60, 10, 20, 7, 11, 25, 40, 31, 98, 100];
function findSumEquals46(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let sum = arr[i] + arr[j] + arr[k];
                if (sum === 46) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(findSumEquals46(arr));