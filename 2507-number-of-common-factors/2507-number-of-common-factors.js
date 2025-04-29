/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {



    function gcd(x, y) {
        return y === 0 ? x : gcd(y, x % y);
    }

    let gcdValue = gcd(a, b);
    let count = 0;

    for (let i = 1; i <= gcdValue; i++) {
        if (gcdValue % i === 0) {
            count++;
        }
    }

    return count;




    
};