function arrayDiff(a, b) {
    let arr = []
    let j =0

a.forEach((v,i,a) => {
    if(!b.includes(v))
    {
        arr[j] = v
        j++
    }
});
    return arr
}
const a = [1,2,3]
const b = [4,2,2]
console.log(arrayDiff(a,b));

// assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
// assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
// assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")