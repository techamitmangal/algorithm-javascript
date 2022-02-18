/*
Given a string s, find the length of the longest substring without repeating characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
    var str = "";
    var maxCount = 0;
    for (var char of s) {
        let charIndex = str.indexOf(char);
        if (charIndex > -1) {
            let strLength = str.length;
            if (strLength>maxCount) {
                maxCount = strLength  
            }
            str = str.slice(charIndex+1);
        }
        str = str + char;
    }
    let strLength = str.length;
    if (strLength>maxCount) {
        maxCount = strLength  
    }
    return maxCount;
};

console.log(lengthOfLongestSubstring("dvdf"));