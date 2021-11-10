const maxChar = (str) => {
    //Add each character in the object
    const tempChars = {};
    var maxChar = '';
    var maxCharCount = 0; 
    for (var char of str) {
        if (!tempChars[char]) {
            tempChars[char] = 1;
        } else {
            tempChars[char]++; 
        }
        if (maxCharCount<tempChars[char]) {
            maxCharCount = tempChars[char];
            maxChar = char;
        }
    }
    return maxChar;
};

const maxCharSecond = (str) => {
    const charsMap = {};
    var maxChar = '';
    var maxCharCount = 0 ;
    for (var char of str) {
        if (!charsMap[char]) {
            charsMap[char] = 1;
        } else {
            charsMap[char]++;
        }
    }

    for (var char in charsMap) {
        if (charsMap[char]>maxCharCount) {
            maxCharCount = charsMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

/*var t0 = performance.now();
console.log(maxChar("Hellosnkfsaklfmalfl;sakfl;akf;lsakf;sdlakf;kasdlfkalfdkaldskf;laskflnmbnvcxkgnklsfjnklgfdsjgljskdsfjkgdjsgkjdsgksWorld"));
var t1 = performance.now();
console.log(`first algorithm time take = ${t1-t0} milliseconds`);*/

var t2 = performance.now();
console.log(maxCharSecond("Hellosnkfsaklfmalfl;sakfl;akf;lsakf;sdlakf;kasdlfkalfdkaldskf;laskflnmbnvcxkgnklsfjnklgfdsjgljskdsfjkgdjsgkjdsgksWorld"));
var t3 = performance.now();
console.log(`second algorithm performance is ${t3-t2} milliseconds`);