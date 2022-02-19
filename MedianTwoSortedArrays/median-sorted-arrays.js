/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106


1) Find the length of the smaller arrays of the two. We will perform binary search on the smaller array.

2) For binary search, we will have two pointers - start = 0 and end = m (assuming m is the smaller length).

3) Loop until start meets end i.e., while (start <= end) { ... }.

4) Calculate the partition index (partitionA) for a which is the mid-point of start and end i.e., (start + end) / 2.

5) Calculate the partition index (partitionB) for b which is (m + n + 1) / 2 - partitionA.

6) Find the maximum element in the left of a and b and minimum element in the right of a and b.

7) Now, we can have three cases -
(i) If (maxLeftA <= minRightB && maxLeftB <= minRightA), then we have hit the jackpot 💰. Now, we can return the median based on (m + n) is even or odd.

(ii) Else If (maxLeftA > minRightB), it means, we are too far on the right and we need to go on the left, so, set end = partitionA - 1.

(iii) Else, we are too far on the left and we need to go to the right, so, set start = partitionA + 1.



*/

var medianOfSortedArrays = (arrA, arrB) => {
    //Find the length of the smaller arrays of the two. We will perform binary search on the smaller array.
    //Check if arrA is smaller than arrB
    //if not then we will swap num1 with num2, We want to interate over smaller array
    if (arrA.length > arrB.length) {
        return medianOfSortedArrays(arrB, arrA);
    }

    // length of two arrays 
    const arrALength = arrA.length;
    const arrBLength = arrB.length;
    const totalArrLength = arrALength + arrBLength ;
    
    //pointers for binary search
    let start = 0;
    let end = arrALength;

    //Binary search starts from here
    while (start <= end) {
        //Partitions of both the arrays
        let partitionA = Math.floor((start + end)/2);
        let partitionB = Math.floor((totalArrLength + 1)/2) - partitionA;

        //Edge Cases
        //If there are no elements left on the left side after partition 
        let maxLeftA = partitionA === 0 ? Number.MIN_SAFE_INTEGER : arrA[partitionA - 1];
        // If there are no elements left on the right side after partition
        let minRightA = partitionA === arrALength ? Number.MAX_SAFE_INTEGER : arrA[partitionA];
        
        // Similarly for arrB
        let maxLeftB = partitionB === 0 ? Number.MIN_SAFE_INTEGER : arrB[partitionB - 1];
        let minRightB = partitionB === arrBLength ? Number.MAX_SAFE_INTEGER : arrB[partitionB];
        
        // Check if we have found the match
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            // Check if the combined array is of even/odd length
            if (totalArrLength % 2 === 0) {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2.0 ;
            } else {
                return Math.max(maxLeftA, maxLeftB);
            }
        } else {
            if (maxLeftA > minRightB) {
                // If we are too far on the right, we need to go to left side
                end = partitionA - 1;
            } else {
                // If we are too far on the left, we need to go to right side
                start = partitionA + 1;
            }
        }

    }
    return 0 ;
};

console.log("Median = ", medianOfSortedArrays([4,5,6,8,9],[]));


