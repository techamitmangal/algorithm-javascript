/*
Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, 
calls itself for the two halves, and then merges the two sorted halves.
The merge() function is used for merging two halves. 
The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one. 

MergeSort(arr[], l,  r)
If r > l
     1. Find the middle point to divide the array into two halves:  
             middle m = l+ (r-l)/2
     2. Call mergeSort for first half:   
             Call mergeSort(arr, l, m)
     3. Call mergeSort for second half:
             Call mergeSort(arr, m+1, r)
     4. Merge the two halves sorted in step 2 and 3:
             Call merge(arr, l, m, r)
*/


function merge (arr, left, middle, right) {
    var n1 = middle - left + 1 ;
    var n2 = right - middle ;

    //Create new temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    //Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }

    for (var j = 0; j < n2; j++) {
        R[j] = arr[middle + 1 + j];
    }

    // merge the temp arrays back in to arr[l..r]

    // Initial index of first subarray 
    var i = 0;
    
    //Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i] ;
            i++;
        } else {
            arr[k] = R[j];
            j++
        }
        k++;
    }

    // Copy the remaining elements of 
    // L[], if there are any 
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    } 

    //copy the remaining elements of 
    // R[], if there are any 
    while (j < n2) {
        arr[k] = R[j] ;
        j++;
        k++; 
    }

};

function mergeSort (arr, left, right) {
    if (left>=right) {
        return;
    }

    var mid = left + parseInt((right-left)/2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid+1, right);
    merge(arr, left, mid, right);
};

var arr = [12, 11, 13, 5, 8 , 7];
var arrSize = arr.length;
mergeSort(arr, 0, arrSize-1);
console.log(arr);


