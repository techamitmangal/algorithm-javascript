/*Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) 
which has the maximum sum and return its sum.
Example 1:
Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.
Example 2:
Input:
N = 4
Arr[] = {-1,-2,-3,-4}
Output:
-1
Explanation:
Max subarray sum is -1 
of element (-1)
*/

const maxSumSubArray = (arr) => {
    var maxSum = arr[0];
    var currSum = 0 ;
    for (var i of arr) {
        currSum = currSum + i;
        if (currSum > maxSum) {
            maxSum = currSum;
        } else {
            if (currSum<0) {
                currSum = 0;
            }
        }
    }
    return maxSum;
};

console.log(maxSumSubArray([-5, -2, -4, -3, 4, -2]));
