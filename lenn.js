var splitInParts = function(s, partLength){
    let a = s.split("")
    for(let i = partLength;i<a.length;i+=partLength+1)
      {
        a.splice(i,0," ")
      }
      return a.join("")
  }

    console.log(splitInParts("supercalifragilisticexpialidocious",3)); 
