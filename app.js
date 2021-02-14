//'use strict';
//   if(n===0){
  //      return 0;
    //}else if (n===1){
      //  return 1;
   // }
    //return fib(n-1) + fib(n-2);
//}

//for(let i = 0; i <= 40; i++){
  //  console.log(fib(i));
//}


'use strict'
const memo = new Map();

memo.set(0,0);
memo.set(1,1);
function fib(n)  {
    if (memo.has(n)){
        return memo.get(n); //メモにデータがあればそれを使う
    }

    //メモにデータがなければ計算する
    let value = fib(n - 1) + fib(n - 2);
    memo.set(n,value)

    return value;
}

for(let i = 0; i <= 40; i++){
    console.log(fib(i));
}
