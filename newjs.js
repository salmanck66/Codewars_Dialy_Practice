//Memoization
function a (x)
    {
    return function (y)
        {
            return function (z)
            {
                return x+y+z
            }


        }
    }


function ab(x,y,z)
{
    return x+y+z
}

console.log(ab(1,2,3));







console.log(a(2)(3)(4));

//call apply bind

const person = {
    name:"salman",
    age:20,
    showName:function(good,bad)
    {
        console.log(`${this.name} ${good} ${bad}`);
    }

}
const person2 = {
    name:"ajmal",
    age:21
}

let fun = person.showName.bind(person2)
fun("hi","hello")

