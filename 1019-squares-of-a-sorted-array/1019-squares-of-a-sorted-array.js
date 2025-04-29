/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let b=nums.map(X=>X*X).sort((a,b)=>a-b)
    return b
};