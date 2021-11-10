const vowelsCount = (str) => {
    const vowelsArr = ['a','e','i','o','u'];
    let count = 0;
    for (let char of str.toLowerCase()) {
        console.log("char = ", char);
        if (vowelsArr.includes(char)) {
            count++;
        }
    }
    return count;
};

const secondWayVowelsCount = (str) => {
    const matchedArr = str.match(/[aeiou]/gi);
    return matchedArr ? matchedArr.length : 0
};

console.log(vowelsCount("Hello World"));
console.log(secondWayVowelsCount('Hello World'));