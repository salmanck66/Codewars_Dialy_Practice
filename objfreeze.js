// mark the MrFreeze object instance as frozen
let MrFreeze = {
    name : "asdsfs",
    age: 23
}
Object.freeze(MrFreeze)
MrFreeze.name = "saa"
console.log(MrFreeze);