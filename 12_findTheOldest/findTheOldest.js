const findTheOldest = function(array) {
    array.sort((first, second) => {
        let [firstBirth, firstDeath] = [first.yearOfBirth, first.yearOfDeath];
        let [secondBirth, secondDeath] = [second.yearOfBirth, second.yearOfDeath];
        if (firstDeath === undefined){
            firstDeath = 2024;
        }
        if (secondDeath === undefined){
            secondDeath = 2024;
        }
        return ((firstDeath - firstBirth) - (secondDeath - secondBirth));
    })
    return array[array.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
