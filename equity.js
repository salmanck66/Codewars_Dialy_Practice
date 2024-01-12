function eqAll(input) {
    let flag = 0
    for (const iterator of input) {
            if(iterator === input[0])
            {
                flag =1
            }
    }
    if(flag===1)
    {
        return true
    }else
    {
        return false
    }

  }
console.log(eqAll("abc"));

//   assert.strictEqual( eqAll("aaa"), true );
//   assert.strictEqual( eqAll("abc"), false );
//   assert.strictEqual( eqAll(""), true );
//   assert.strictEqual( eqAll([0,0,0]), true );
//   assert.strictEqual( eqAll([0,1,2]), false );
//   assert.strictEqual( eqAll([]), true );