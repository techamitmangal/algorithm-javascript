function chunk (array, size) {
    var chunkArray = [];
    var tempArray = [];
    for (var i=0; i<array.length; i++) {
        if ((tempArray.length+1)%size === 0) {
            tempArray.push(array[i]);
            chunkArray.push(tempArray);
            tempArray = [];
        } else {
            tempArray.push(array[i]);
        }
    }
    if (tempArray.length>0) {
        chunkArray.push(tempArray);
    }
    console.log(chunkArray);
}

chunk([1,2,3,4,5,6,7,8,9,10],2);