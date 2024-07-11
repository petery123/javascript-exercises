const palindromes = function (string) {
    const store = string
            .split("")
            .filter((char) => (/[a-zA-Z0-9]/)
            .test(char))
            .map((char) => char.toLowerCase());
    reversed = store.slice().reverse();
    return reversed.join("") == store.join("");
};

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
