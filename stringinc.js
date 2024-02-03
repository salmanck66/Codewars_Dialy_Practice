function nameInStr(str, name){
    let letterIndex = 0; 
     str = str.toLowerCase();
     name = name.toLowerCase();
     
     for (let i = 0; i < str.length; i++) {
         if (str[i] === name[letterIndex]) {
             letterIndex++; 
         }
         if (letterIndex === name.length) {
             return true;
         }
     }
     return false;
 }