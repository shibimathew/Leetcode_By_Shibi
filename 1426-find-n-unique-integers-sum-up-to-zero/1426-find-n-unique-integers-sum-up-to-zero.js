/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let result = [];

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(-i, i); 
    }

    if (n % 2 !== 0) {
        result.push(0);  
    }

    return result;
};
