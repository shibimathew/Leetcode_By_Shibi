/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
      let ones = s.split('1').length - 1;  
    let zeros = s.length - ones;         
    
    return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
    
    
};