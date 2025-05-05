/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
let ones = s.split('1').length - 1;
let zero=s.length-ones
return "1".repeat(ones-1)+"0".repeat(zero)+"1"
};