/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a= new Set(nums)
    let arr=[...a]
   for(let i=0;i<nums.length;i++){
     nums[i]=arr[i]

   }
   return arr.length
};