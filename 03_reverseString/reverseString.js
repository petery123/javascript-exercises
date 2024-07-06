const reverseString = function(string) {
    reversed = ""
    for (i = -1; i >= -(string.length); i--){
        reversed+=string.at(i);
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
