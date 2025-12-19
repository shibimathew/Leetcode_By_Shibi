/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let num=1
    while(num<n){
        num=num*2+1
    }
    return num
};