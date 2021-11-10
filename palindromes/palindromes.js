const isPalinDromes = (str) => {
   const strLength = str.length;
   if (strLength>1) {
    const it = strLength/2;
    for (var i=0; i<it; i++) {
        if (str[i]!==str[strLength-1-i]) {
            return "Not a palindrome"; 
        } 
    }
   } else {
        return "Not a palindrome";
   }
   return "palindrome";
};

console.log (isPalinDromes("abba"));
