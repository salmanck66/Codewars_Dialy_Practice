function findShort(s){
    return s.split(" ").reduce((short,word)=>word.length<short.length?word:short);
}

  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))