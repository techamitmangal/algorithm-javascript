function reverseIntSecondTechnicque(n) {
    const reversedStr = n.toString().split('').reverse().join('');
    return parseInt(reversedStr) * Math.sign(n);
}

function reverseInt(n) {
    var reversedIntArr = [];
    var reversedInt = 0;
    const num = n;
    n = Math.abs(n);
   if (n===0) {
       return 0;
   } else {    
       while(n>=1) {
           if (n%10!==0) {
               reversedIntArr.push(n%10) ;
           }
           n = Math.floor(n/10);
       }
   }
   if (Math.sign(num)==1) {
       reversedInt = parseInt(reversedIntArr.join(''));
   } else {
       reversedInt = parseInt(reversedIntArr.join(''));
       reversedInt = - reversedInt;
   }
  return reversedInt;
}
var t0 = performance.now();
reverseInt(-289484);
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

var t2 = performance.now();
reverseIntSecondTechnicque(-289484);
var t3 = performance.now();
console.log("Call to doSomething took " + (t3 - t2) + " milliseconds.");