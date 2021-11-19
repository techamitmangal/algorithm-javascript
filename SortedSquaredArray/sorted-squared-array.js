/*Given an array of both positive and negative integers ‘arr[]’ which are sorted. The task is to sort the square of the numbers of the Array. 
Examples: 

Input  : arr[] =  {-6, -3, -1, 2, 4, 5}
Output : 1, 4, 9, 16, 25, 36 

Input  : arr[] = {-5, -4, -2, 0, 1}
Output : 0, 1, 4, 16, 25*/

//First Approach ////////////////////////////////////////////////////////
const mergeSortedArrays = (firstArray, secondArray) => {
    let resultArr = [];
    while (firstArray.length && secondArray.length) {
        const next = firstArray[0] > secondArray[0] ? secondArray.shift() : firstArray.shift();
        resultArr.push(next);
    }

    if (firstArray.length) {
        resultArr = resultArr.concat(firstArray);
    } else {
        if (secondArray.length) {
            resultArr = resultArr.concat(secondArray);
        }
    }
    
    return resultArr;
};

const sortedSquaredArray = inputArr => {
    const positiveArr = inputArr.filter(item => item>=0).map(item => item*item);
    const negativeArr = inputArr.filter(item => item<0).map(item => item*item);
    negativeArr.reverse();
    return mergeSortedArrays (negativeArr, positiveArr);
};
//First approach ended ///////////////////////////////////////////////////////////////////////////////


////Second Approach this is better with 2 pointers 
//Time complexity: O(n) 
//Auxiliary Space: O(n) 
const sortedSquaredArrayBetterApproach = inputArr => {
    const resultArr = new Array(inputArr.length).fill(0);
    let smallValuePointer = 0;
    let bigValuePointer = inputArr.length - 1;
    for (let idx = bigValuePointer; idx >= 0; idx--) {
        if (Math.abs(inputArr[bigValuePointer]) < Math.abs(inputArr[smallValuePointer])) {
            const value = inputArr[smallValuePointer];
            resultArr[idx] = value * value ;
            smallValuePointer++;
        } else {
            const value = inputArr[bigValuePointer];
            resultArr[idx] = value * value ;
            bigValuePointer--;
        }
    }
    return resultArr;
};

console.log(sortedSquaredArrayBetterApproach([-5, -4, -2, 0, 1, 8]));