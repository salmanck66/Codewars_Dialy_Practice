function toCsvText(array) {
    array.forEach((arr)=>
                 {
      let length = arr.length-1
      let temp = arr[length]
      arr[length] = `${temp}\n`
    })
   return array.split("+")
 }

 console.log(toCsvText([
    [ 5,55,5,5,55 ],
    [ 6,6,66,23,24 ],
    [ 666,31,66,33,7 ]
   ]))