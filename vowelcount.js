function getCount(str) {
    let res = str.split("")
    let result = 0
        res.forEach(v => {
        if(v=="a"||v=="e"||v=="o"||v=="i"|| v=="u")
         {
            result ++
         }
    })
    return result
  }

console.log(getCount("abracadabra"))