//The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).
//Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].

const binarySearch = (arr, findElement) => {
    var arrayLength = arr.length;
    if (arrayLength>1) {
        const midItem = arrayLength/2;
        while(midItem>0) {
            if (arr[midItem]>=findElement) {

            } else {

            }
        }
    }
}

console.log("Element Status = ", binarySearch([2,5,68,72,89,102,102,105,107,108,112,134,200,234,300,355], 102));