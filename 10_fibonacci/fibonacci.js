const fibonacci = function(num) {
    let [head, tail] = [1, 1]
    num = +num;
    if (num < 0){
        return ("OOPS");
    }
    if (num === 0){
        return 0;
    }
    for (i = 2; i < num; i++){
        let store = tail;
        tail = store + head;
        head = store;
    }
    return tail;

};

// Do not edit below this line
module.exports = fibonacci;
