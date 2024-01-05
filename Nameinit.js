function abbrevName(name){

    let names= name
    let result =  names[0]+"."+name[name.indexOf(" ")+1]
    return result.toUpperCase()

}
console.log(abbrevName("Sam Harris"));
let a = "salman du"
console.log(a[0])