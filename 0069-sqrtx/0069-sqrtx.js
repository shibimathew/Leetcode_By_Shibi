/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (let i = 0; i <= x; i++) {
        if (i * i > x) {
            return i - 1; // return the floor of sqrt
        }
    }
    return x; // covers x = 0 or 1
};