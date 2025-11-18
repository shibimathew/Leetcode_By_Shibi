/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr=s.trim().split(' ')
    let c=arr[arr.length-1]
    return c.split('').length


};