/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
   let min=Infinity
   for(let i=0;i<nums.length;i++){
    if(Math.abs(nums[i])<Math.abs(min)|| nums[i]===Math.abs(min)){
        min=nums[i]
    }
   }return min
};