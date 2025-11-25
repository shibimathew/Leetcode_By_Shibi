/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max=Math.max(...nums)
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum+=max-nums[i]
    }
    return sum
};