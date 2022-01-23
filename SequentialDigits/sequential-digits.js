/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
 

Constraints:

10 <= low <= high <= 10^9

*/

var sequentialDigits = (low, high) => {
    let resArray = [];
    let digits = "123456789";
    let nl = low.toString().length;
    let nh = high.toString().length;
    for (let i=nl; i <= nh; i++) {
        for (let j=0; j <= digits.length - i; j++) {
            let num = parseInt(digits.substring(j, j+i));
            if (num >= low && num <= high) {
                resArray.push(num);
            }
        }
    }
    return resArray;
};

console.log(sequentialDigits(100,3000));
