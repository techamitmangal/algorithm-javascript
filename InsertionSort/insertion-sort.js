const insertionSort = (arr) => {
    const arrayLength = arr.length;
    for (let j=1; j<arrayLength; j++) {
        const key = arr[j];
        let i = j-1;
        while (i>=0 && arr[i]>key) {
            arr[i+1] = arr[i];
            i = i-1 ;
        }
        arr[i+1] = key;
    }
    console.log(arr);
};

insertionSort([56,34,12,3,23,89,45,33,55,44,45,67,890,76,56]);