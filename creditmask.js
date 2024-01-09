
function maskify(cc) {
    let a = cc.split("")
    if(a.length<=4)
        {
            return a.join("")
        }
    for(let i=0;i<a.length-4;i++)
    {
      a[i] = '#'
    }
    return a.join("")
  }