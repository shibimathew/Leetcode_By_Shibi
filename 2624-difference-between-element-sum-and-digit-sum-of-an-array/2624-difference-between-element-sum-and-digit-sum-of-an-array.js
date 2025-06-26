/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
 let sum=nums.reduce((acc,curr)=>acc+curr,0)

 let digitsum=nums.join('').split('').map(Number).reduce((acc,curr)=>acc+curr,0)
return Math.abs(sum-digitsum)

    
};