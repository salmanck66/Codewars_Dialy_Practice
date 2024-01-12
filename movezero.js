function moveZeros(arr) {
    console.log(arr)
}

let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

arr = arr.filter(value => value !== 0).concat(arr.filter(value => value === 0));
console.log(arr);
