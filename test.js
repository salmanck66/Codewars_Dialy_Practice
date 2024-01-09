//currying

// function a (x)
// {
//     return function b(y)
//     {
//         return x+y
//     }
// }

// console.log(a(1)(2));

// closure
// function a ()
// {
//     let count = 1
//     return function b()
//     {
//         return count++
       
//     }
// }
// let count = a()
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())

// Call Backs

// function a(callback)
// {
//     setTimeout(()=>{console.log("First One")
//     callback()},3000)
    
// }
// function b()
// {
//     setTimeout(()=>{console.log("Second One");},1000)
// }
// a(b)

//Promises

// let p1 = new Promise((resolve,reject)=>

// {
//     let data = false
//     if(data===true)
//     {
//         resolve("Everyhting Has been done 1")
//     }else
//     {
//         reject(("Errorod 1"))
//     }
// })
// let p2 = new Promise((resolve,reject)=>

// {
//     let data = false
//     if(data===true)
//     {
//         resolve("Everyhting Has been done 2")
//     }else
//     {
//         reject(("Errorod 2"))
//     }
// })
// let p3 = new Promise((resolve,reject)=>

// {
//     let data = true
//     if(data===true)
//     {
//         resolve("Everyhting Has been done 2")
//     }else
//     {
//         reject(("Errorod 3"))
//     }
// })
// Promise.any([p1,p2,p3]).then((result)=>{console.log(result)}).catch((err)=>console.log(err))

//map reduce filter sort

// const arr = [1,2,3,4,5]

// console.log(arr.map((val,ind,arr)=>
// {
//    return val*2
// }
// ));
// console.log(arr.filter((val,ind,arr)=>
// {
//    return val>2
// }
// ));
// console.log(arr.reduce((acc,curr)=>
// {
//    return acc+curr
// }
// ));
// console.log(arr.sort((acc,curr)=>
// {
//    return curr-acc
// }
// ));
// call apply bind

// let a ={
//     name: "salman",
//     age:20,
//     getFull:function (ht,ss)
//     {
//         console.log(`${this.name} ${this.age} ${ht} ${ss}`)
//     }
// }
// let b ={
//     name: "arafath",
//     age:22
// }

// a.getFull.apply(b,['areekode',"s"])

// let bb = a.getFull.bind(b)
// bb('a','b')

// foreach

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (num, index) {
//   console.log(`Index ${index}: ${num}`);
// });

// const person = {
//     name: 'John',
//     age: 30,
//     job: 'Engineer'
//   };
  
//   for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }

const numbers = [1, 2, 3, 4, 5];
const str = "salman"

// for (const iterator of str) {
//     console.log(iterator);
// }

for (const iterator of str) {
   console.log(iterator);
}

