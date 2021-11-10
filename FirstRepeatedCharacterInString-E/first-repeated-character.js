const getFirstRepeatedCharacter = (str) => {
    const charMap = new Set();
    for (var char of str) {
        if (charMap.has(char)) {
            return char;
        }
        else {
            charMap.add(char);
        }
    }
    return "No Repeated character found in string";
}

console.log("fist Repeated character = ", getFirstRepeatedCharacter("Hello Worled"));