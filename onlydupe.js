function onlyDuplicates(str) {
    return str.split("").filter((char, i, arr) => arr.indexOf(char) !== arr.lastIndexOf(char)).join("");
}

   console.log(onlyDuplicates("abccdefee"))