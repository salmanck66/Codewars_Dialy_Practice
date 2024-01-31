function isIntArray(arr) {
    return arr.every(Number.isInteger)
  }

  console.log(isIntArray([1, 2, 3, null]));[]