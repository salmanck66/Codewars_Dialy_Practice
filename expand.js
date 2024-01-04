function expandedForm(num) {
    let a = num.toString()

    for(let i = 0 ;i<a.length;i++)
    {

        if(a.length===1)
        {
            return num
        }else
        if(a.length==2)
        {
            return "hello"
        }
    }
  }
console.log(expandedForm(1));
// let a = 2
// let b= a.toString
// let c = Number(b)
// console.log(b.length);
// console.log(c.length);

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// length 2
// 12%10 = 2
console.log(12%10);
console.log(12/10);