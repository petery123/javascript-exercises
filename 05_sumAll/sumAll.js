const sumAll = function(min, max) {
    if (Number.isInteger(min) && Number.isInteger(max)){
        if (min >= 0 && max >= 0){
            let total = 0;
            if (min > max){
                const temp = min
                min = max;
                max = temp;
            }
           
            for (i = min; i <= max; i++){
                total+=i;
            }
            return total;
        }
    }
    return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
