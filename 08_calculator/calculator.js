const add = function(a, b) {
  return a + b;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numList) {
  return numList.reduce((total, current) => total + current, 0);
};

const multiply = function(numList) {
  return numList.reduce((total, current) => total * current);
};

const power = function(num1, num2) {
	return (Math.pow(num1,num2));
};

const factorial = function(num) {
	total = 1;
  for (i = 0; i < num; i++){
    total *= (i+1);
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
