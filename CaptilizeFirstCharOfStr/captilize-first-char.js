function capitalize(str) {
    const resultArr = str.split(" ");
    const upperArr = [];
    for (let word of resultArr) {
        upperArr.push(word[0].toUpperCase() + word.slice(1));
    }
    return upperArr.join(" ");
}

console.log(capitalize('hi how are u'));