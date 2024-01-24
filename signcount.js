function catchSignChange(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let signc = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i] >= 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] >= 0)) {
            signc++;
        }
    }
    return signc;
}


  console.log(catchSignChange([1,-3,-4,0,5]));
//   const tests = [
//     [[], 0],
//     [[1,3,4,5], 0],
//     [[-1,-3,-4,-5], 0],
//     [[1,-3,-4,0,5], 2],
//     [[-47,84,-30,-11,-5,74,77], 3],
//   ];