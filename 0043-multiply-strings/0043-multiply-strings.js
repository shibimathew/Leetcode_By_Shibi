/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  
  let s = BigInt(num1)*BigInt(num2)
  return s.toString()
};