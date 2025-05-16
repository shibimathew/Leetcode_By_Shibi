/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    const digitSum = x
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
  
  return x % digitSum === 0 ? digitSum : -1
};