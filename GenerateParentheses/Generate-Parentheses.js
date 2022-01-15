/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
Input: n = 1
Output: ["()"]
Constraints:
1 <= n <= 8
*/

const generateParentheses =  (remainOpeningBraceCount, remainClosingBraceCount, str) => {
    if (remainClosingBraceCount === 0 && remainOpeningBraceCount === 0) {
        validParentheses.push(str);
        return ;
    }

    if (remainOpeningBraceCount > 0) {
        str = str + "(" ;
        generateParentheses(remainOpeningBraceCount - 1, remainClosingBraceCount, str);
        str = str.slice(0, -1);
    }

    if(remainClosingBraceCount > 0 && remainClosingBraceCount > remainOpeningBraceCount) {
        str = str + ")";
        generateParentheses(remainOpeningBraceCount, remainClosingBraceCount - 1, str);
        str = str.slice(0, -1);
    }
};
var str = "";
var validParentheses = [];
var numberOfBrces = 3; 
generateParentheses(numberOfBrces, numberOfBrces, str);
console.log(validParentheses);